import { NextResponse } from "next/server";
import prisma from "../../../../prisma/index";

export async function GET() {
  const user = await prisma.user.findMany();
  return NextResponse.json({ status: "success", data: user });
}
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { user, hasil_persen, details } = body;

    // 1. Buat user baru (atau bisa cek dulu kalau sudah ada by no_hp/email)
    const newUser = await prisma.user.create({
      data: {
        nama: user.nama,
        alamat: user.alamat,
        tanggal_lahir: user.tanggal_lahir ? new Date(user.tanggal_lahir) : null,
        no_hp: user.no_hp,
        answers: {
          create: {
            hasil_persen,
            details: {
              create: details.map((d: any) => ({
                soalId: d.soalId,
                jawaban: d.jawaban,
                score: d.score,
              })),
            },
          },
        },
      },
      include: {
        answers: {
          include: {
            details: true,
          },
        },
      },
    });

    return NextResponse.json({ success: true, data: newUser }, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
