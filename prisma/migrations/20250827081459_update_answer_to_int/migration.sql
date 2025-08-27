/*
  Warnings:

  - The `jawaban1` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban2` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban3` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban4` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban5` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban6` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban7` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban8` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban9` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban10` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban11` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban12` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban13` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban14` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban15` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban16` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban17` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban18` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban19` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `jawaban20` column on the `Answer` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Answer" DROP COLUMN "jawaban1",
ADD COLUMN     "jawaban1" INTEGER,
DROP COLUMN "jawaban2",
ADD COLUMN     "jawaban2" INTEGER,
DROP COLUMN "jawaban3",
ADD COLUMN     "jawaban3" INTEGER,
DROP COLUMN "jawaban4",
ADD COLUMN     "jawaban4" INTEGER,
DROP COLUMN "jawaban5",
ADD COLUMN     "jawaban5" INTEGER,
DROP COLUMN "jawaban6",
ADD COLUMN     "jawaban6" INTEGER,
DROP COLUMN "jawaban7",
ADD COLUMN     "jawaban7" INTEGER,
DROP COLUMN "jawaban8",
ADD COLUMN     "jawaban8" INTEGER,
DROP COLUMN "jawaban9",
ADD COLUMN     "jawaban9" INTEGER,
DROP COLUMN "jawaban10",
ADD COLUMN     "jawaban10" INTEGER,
DROP COLUMN "jawaban11",
ADD COLUMN     "jawaban11" INTEGER,
DROP COLUMN "jawaban12",
ADD COLUMN     "jawaban12" INTEGER,
DROP COLUMN "jawaban13",
ADD COLUMN     "jawaban13" INTEGER,
DROP COLUMN "jawaban14",
ADD COLUMN     "jawaban14" INTEGER,
DROP COLUMN "jawaban15",
ADD COLUMN     "jawaban15" INTEGER,
DROP COLUMN "jawaban16",
ADD COLUMN     "jawaban16" INTEGER,
DROP COLUMN "jawaban17",
ADD COLUMN     "jawaban17" INTEGER,
DROP COLUMN "jawaban18",
ADD COLUMN     "jawaban18" INTEGER,
DROP COLUMN "jawaban19",
ADD COLUMN     "jawaban19" INTEGER,
DROP COLUMN "jawaban20",
ADD COLUMN     "jawaban20" INTEGER;
