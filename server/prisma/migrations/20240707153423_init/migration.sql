-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('INTACT', 'BOUGHT', 'RENTED');

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "status" "ProductStatus" NOT NULL DEFAULT 'INTACT';
