import { NextResponse } from "next/server";
import prisma from "../../../../prisma/index";
import { ApiResponse, AnswerDetail } from "@/types";

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
    const { user, hasil_persen, details } = await req.json();

    

    const result = await prisma.answer.create({
      data: {
        user: {
          create: {
            nama: user.nama,
            alamat: user.alamat,
            tanggal_lahir: new Date(user.tanggal_lahir),
            no_hp: user.no_hp,
          },
        },
        hasil_persen,
        details: {
          createMany: {
            data: details.map((detail: AnswerDetail) => ({
              soalId: detail.soalId,
              jawaban: detail.jawaban,
              score: detail.score,
            })),
          },
        },
      },
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

    return NextResponse.json({ message: "Answer created successfully", data: result });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: "Failed to create answer" }, { status: 500 });
  }
}
