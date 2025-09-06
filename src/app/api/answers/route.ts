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

    // Check if user already exists by phone number (if provided)
    let existingUser = null;
    if (body.user.no_hp) {
      existingUser = await prisma.user.findFirst({
        where: {
          no_hp: body.user.no_hp,
        },
        select: {
          id: true,
        },
      });
    }

    let userId: number;

    if (existingUser) {
      // Use existing user
      userId = existingUser.id;
    } else {
      // Create new user
      const newUser = await prisma.user.create({
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
      userId = newUser.id;
    }

    // Create answer with details in a single transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create the answer
      const answer = await tx.answer.create({
        data: {
          hasil_persen: body.hasil_persen,
          userId: userId,
        },
      });

      // Create answer details in batch
      await tx.answerDetail.createMany({
        data: body.details.map((detail) => ({
          answerId: answer.id,
          soalId: detail.soalId,
          jawaban: detail.jawaban,
          score: detail.score,
        })),
      });

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

    if (!result) {
      throw new Error("Failed to create answer");
    }

    const response: CreateAnswerResponse = {
      user: {
        nama: result.user.nama,
        alamat: result.user.alamat || undefined,
        tanggal_lahir: result.user.tanggal_lahir?.toISOString(),
        no_hp: result.user.no_hp || undefined,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        id: result.user.id,
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
    }

    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: "Failed to create answer",
      },
      { status: 500 }
    );
  }
}
