import { NextResponse } from "next/server";
import prisma from "../../../../prisma/index";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Test API received:", body);

    // Test user creation
    const testUser = await prisma.user.create({
      data: {
        nama: "Test User",
        alamat: "Test Address",
        no_hp: "081234567890",
      },
      select: {
        id: true,
        nama: true,
      },
    });

    console.log("Test user created:", testUser);

    // Test answer creation
    const testAnswer = await prisma.answer.create({
      data: {
        hasil_persen: 50.5,
        userId: testUser.id,
      },
      select: {
        id: true,
        hasil_persen: true,
        userId: true,
      },
    });

    console.log("Test answer created:", testAnswer);

    // Test answer detail creation
    const testDetail = await prisma.answerDetail.create({
      data: {
        answerId: testAnswer.id,
        soalId: 1,
        jawaban: "Test Answer",
        score: 5,
      },
    });

    console.log("Test detail created:", testDetail);

    // Clean up test data
    await prisma.answerDetail.delete({ where: { id: testDetail.id } });
    await prisma.answer.delete({ where: { id: testAnswer.id } });
    await prisma.user.delete({ where: { id: testUser.id } });

    return NextResponse.json({
      success: true,
      message: "All database operations successful",
      testData: {
        user: testUser,
        answer: testAnswer,
        detail: testDetail,
      },
    });
  } catch (error) {
    console.error("Test API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
