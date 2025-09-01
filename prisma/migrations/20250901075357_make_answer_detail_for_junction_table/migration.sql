/*
  Warnings:

  - You are about to drop the column `jawaban1` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban10` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban11` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban12` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban13` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban14` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban15` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban16` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban17` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban18` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban19` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban2` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban20` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban3` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban4` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban5` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban6` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban7` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban8` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `jawaban9` on the `Answer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Answer" DROP COLUMN "jawaban1",
DROP COLUMN "jawaban10",
DROP COLUMN "jawaban11",
DROP COLUMN "jawaban12",
DROP COLUMN "jawaban13",
DROP COLUMN "jawaban14",
DROP COLUMN "jawaban15",
DROP COLUMN "jawaban16",
DROP COLUMN "jawaban17",
DROP COLUMN "jawaban18",
DROP COLUMN "jawaban19",
DROP COLUMN "jawaban2",
DROP COLUMN "jawaban20",
DROP COLUMN "jawaban3",
DROP COLUMN "jawaban4",
DROP COLUMN "jawaban5",
DROP COLUMN "jawaban6",
DROP COLUMN "jawaban7",
DROP COLUMN "jawaban8",
DROP COLUMN "jawaban9";

-- CreateTable
CREATE TABLE "public"."AnswerDetail" (
    "id" SERIAL NOT NULL,
    "answerId" INTEGER NOT NULL,
    "soalId" INTEGER NOT NULL,
    "jawaban" TEXT NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "AnswerDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."AnswerDetail" ADD CONSTRAINT "AnswerDetail_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "public"."Answer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
