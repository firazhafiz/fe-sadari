import { NextResponse } from "next/server";
import prisma from "../../../../prisma/index";

export async function GET() {
  const user = await prisma.user.findMany();
  return NextResponse.json({ status: "success", data: user });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nama, alamat, tanggal_lahir, no_hp, jawaban, hasil_persen } = body;

    if (!nama || !jawaban || jawaban.length !== 20) {
      return NextResponse.json({ error: "Data peserta tes dan jawaban wajib diisi" }, { status: 400 });
    }

    const user = await prisma.user.create({
      data: {
        nama,
        alamat,
        tanggal_lahir: tanggal_lahir ? new Date(tanggal_lahir) : null,
        no_hp,
        answers: {
          create: {
            jawaban1: jawaban[0],
            jawaban2: jawaban[1],
            jawaban3: jawaban[2],
            jawaban4: jawaban[3],
            jawaban5: jawaban[4],
            jawaban6: jawaban[5],
            jawaban7: jawaban[6],
            jawaban8: jawaban[7],
            jawaban9: jawaban[8],
            jawaban10: jawaban[9],
            jawaban11: jawaban[10],
            jawaban12: jawaban[11],
            jawaban13: jawaban[12],
            jawaban14: jawaban[13],
            jawaban15: jawaban[14],
            jawaban16: jawaban[15],
            jawaban17: jawaban[16],
            jawaban18: jawaban[17],
            jawaban19: jawaban[18],
            jawaban20: jawaban[19],
            hasil_persen,
          },
        },
      },
      include: { answers: true },
    });

    return NextResponse.json(
      {
        success: true,
        message: "User & jawaban berhasil dibuat",
        data: user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
