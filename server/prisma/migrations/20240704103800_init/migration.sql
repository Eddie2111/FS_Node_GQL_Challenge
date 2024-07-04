-- CreateEnum
CREATE TYPE "Categories" AS ENUM ('ELECTRONICS', 'FURNITURE', 'HOME_APPLIANCES', 'SPORTING_GOODS', 'OUTDOOR', 'TOYS');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(16) NOT NULL,
    "email" VARCHAR(35) NOT NULL,
    "password" VARCHAR(127) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "serial" SERIAL NOT NULL,
    "id" UUID NOT NULL,
    "name" VARCHAR(16) NOT NULL,
    "price" INTEGER NOT NULL,
    "description" VARCHAR(512) NOT NULL,
    "category" "Categories" NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("serial")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Products_id_key" ON "Products"("id");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
