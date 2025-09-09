import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { Parser } from "json2csv";
import { createHash } from "crypto";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // hash password input
    console.log(email, password);
    const hashedPassword = createHash("sha256").update(password).digest("hex");

    // cek admin
    const admin = await prisma.superAdmin.findFirst({
      where: {
        email,
        password: hashedPassword,
      },
    });

    if (!admin) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    // ambil data jawaban
    const res = await prisma.answer.findMany({
      select: {
        hasil_persen: true,
        created_at: true,
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
          select: {
            soalId: true,
            jawaban: true,
            score: true,
          },
        },
      },
    });

    // flatten data
    const flatData = res.map((item) => {
      const row: any = {
        created_at: item.created_at,
        user_id: item.user.id,
        nama: item.user.nama,
        alamat: item.user.alamat,
        tanggal_lahir: item.user.tanggal_lahir,
        no_hp: item.user.no_hp,
        hasil_persen: item.hasil_persen,
      };

      item.details.forEach((d) => {
        row[`soal_${d.soalId}`] = `${d.jawaban} - ${d.score}`;
      });

      return row;
    });

    // header CSV
    const baseFields = ["created_at", "user_id", "nama", "alamat", "tanggal_lahir", "no_hp", "hasil_persen"];
    const soalFields = Array.from({ length: 20 }, (_, i) => `soal_${i + 1}`);
    const fields = [...baseFields, ...soalFields];

    // generate CSV
    const parser = new Parser({ fields });
    const csv = parser.parse(flatData);

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": 'attachment; filename="hasil-tes.csv"',
      },
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message || "error" }, { status: 400 });
  }
}
