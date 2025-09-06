import { NextResponse } from "next/server";
import prisma from "../../../../prisma/index";
import { CreateAnswerRequest, ApiResponse, CreateAnswerResponse } from "@/types";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (userId) {
      // Get specific user with their latest answer
      const user = await prisma.user.findUnique({
        where: {
          id: parseInt(userId),
        },
        include: {
          answers: {
            orderBy: {
              id: "desc",
            },
            take: 1,
            include: {
              details: {
                orderBy: {
                  soalId: "asc",
                },
              },
            },
          },
        },
      });

      if (!user) {
        return NextResponse.json<ApiResponse<null>>(
          {
            success: false,
            error: "User not found",
          },
          { status: 404 }
        );
      }

      return NextResponse.json<ApiResponse<typeof user>>({
        success: true,
        data: user,
      });
    } else {
      // Get all users with pagination
      const users = await prisma.user.findMany({
        select: {
          id: true,
          nama: true,
          alamat: true,
          tanggal_lahir: true,
          no_hp: true,
          _count: {
            select: {
              answers: true,
            },
          },
        },
        orderBy: {
          id: "desc",
        },
        take: 100, // Limit results for performance
      });

      return NextResponse.json<ApiResponse<typeof users>>({
        success: true,
        data: users,
      });
    }
  } catch (error) {
    console.error("GET /api/answers error:", error);
    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: "Failed to fetch data",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body: CreateAnswerRequest = await req.json();

    console.log("API received request:", {
      hasUser: !!body.user,
      hasDetails: !!body.details,
      detailsLength: body.details?.length,
      hasil_persen: body.hasil_persen,
      userNama: body.user?.nama,
    });

    // Validate required fields
    if (!body.user?.nama || !body.details || body.details.length === 0) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "Missing required fields: user.nama and details are required",
        },
        { status: 400 }
      );
    }

    // Validate hasil_persen
    if (typeof body.hasil_persen !== "number" || body.hasil_persen < 0 || body.hasil_persen > 100) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "Invalid hasil_persen: must be a number between 0 and 100",
        },
        { status: 400 }
      );
    }

    // Create new user
    let newUser;
    try {
      console.log("Creating user with data:", {
        nama: body.user.nama,
        alamat: body.user.alamat,
        tanggal_lahir: body.user.tanggal_lahir,
        no_hp: body.user.no_hp,
      });

      newUser = await prisma.user.create({
        data: {
          nama: body.user.nama,
          alamat: body.user.alamat,
          tanggal_lahir: body.user.tanggal_lahir ? new Date(body.user.tanggal_lahir) : null,
          no_hp: body.user.no_hp,
        },
        select: {
          id: true,
        },
      });

      console.log("User created successfully:", newUser);
    } catch (userError) {
      console.error("Error creating user:", userError);
      throw new Error(`Failed to create user: ${userError instanceof Error ? userError.message : "Unknown error"}`);
    }

    const userId = newUser.id;
    console.log("Using userId:", userId);

    // Create answer with details in a single transaction
    let result;
    try {
      console.log("Starting transaction with:", {
        hasil_persen: body.hasil_persen,
        userId: userId,
        detailsCount: body.details.length,
      });

      result = await prisma.$transaction(async (tx) => {
        // Create the answer
        console.log("Creating answer...");
        const answer = await tx.answer.create({
          data: {
            hasil_persen: body.hasil_persen,
            userId: userId,
          },
        });

        console.log("Answer created:", answer);

        // Create answer details in batch
        console.log("Creating answer details...");
        const detailsData = body.details.map((detail) => ({
          answerId: answer.id,
          soalId: detail.soalId,
          jawaban: detail.jawaban,
          score: detail.score,
        }));

        console.log("Details data:", detailsData.slice(0, 2)); // Log first 2 details

        await tx.answerDetail.createMany({
          data: detailsData,
        });

        console.log("Answer details created successfully");

        // Fetch the complete result
        const completeAnswer = await tx.answer.findUnique({
          where: { id: answer.id },
          include: {
            user: {
              select: {
                id: true,
                nama: true,
                alamat: true,
                tanggal_lahir: true,
                no_hp: true,
              },
            },
            details: {
              orderBy: {
                soalId: "asc",
              },
            },
          },
        });

        return completeAnswer;
      });
    } catch (transactionError) {
      console.error("Error in transaction:", transactionError);
      throw new Error(`Failed to create answer: ${transactionError instanceof Error ? transactionError.message : "Unknown error"}`);
    }

    if (!result) {
      throw new Error("Failed to create answer");
    }

    const response: CreateAnswerResponse = {
      user: {
        id: result.user.id,
        nama: result.user.nama,
        alamat: result.user.alamat || undefined,
        tanggal_lahir: result.user.tanggal_lahir?.toISOString(),
        no_hp: result.user.no_hp || undefined,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      answer: {
        id: result.id,
        userId: result.userId,
        hasil_persen: result.hasil_persen,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        details: result.details,
      },
    };

    return NextResponse.json<ApiResponse<CreateAnswerResponse>>(
      {
        success: true,
        data: response,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/answers error:", error);
    console.error("Error details:", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined,
    });

    // Handle specific Prisma errors
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint")) {
        return NextResponse.json<ApiResponse<null>>(
          {
            success: false,
            error: "Duplicate entry detected",
          },
          { status: 409 }
        );
      }

      if (error.message.includes("Foreign key constraint")) {
        return NextResponse.json<ApiResponse<null>>(
          {
            success: false,
            error: "Invalid user reference",
          },
          { status: 400 }
        );
      }
    }

    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: "Failed to create answer",
        message: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
