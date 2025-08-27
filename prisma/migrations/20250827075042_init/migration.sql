-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "alamat" TEXT,
    "tanggal_lahir" TIMESTAMP(3),
    "no_hp" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Answer" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "jawaban1" TEXT,
    "jawaban2" TEXT,
    "jawaban3" TEXT,
    "jawaban4" TEXT,
    "jawaban5" TEXT,
    "jawaban6" TEXT,
    "jawaban7" TEXT,
    "jawaban8" TEXT,
    "jawaban9" TEXT,
    "jawaban10" TEXT,
    "jawaban11" TEXT,
    "jawaban12" TEXT,
    "jawaban13" TEXT,
    "jawaban14" TEXT,
    "jawaban15" TEXT,
    "jawaban16" TEXT,
    "jawaban17" TEXT,
    "jawaban18" TEXT,
    "jawaban19" TEXT,
    "jawaban20" TEXT,
    "hasil_persen" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Answer" ADD CONSTRAINT "Answer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
