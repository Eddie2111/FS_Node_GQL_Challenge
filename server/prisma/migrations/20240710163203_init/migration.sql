/*
  Warnings:

  - The primary key for the `Rented` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Rented" DROP CONSTRAINT "Rented_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Rented_pkey" PRIMARY KEY ("id");
