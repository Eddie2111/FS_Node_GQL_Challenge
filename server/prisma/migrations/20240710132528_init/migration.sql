-- CreateTable
CREATE TABLE "Bought" (
    "id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "createdby" INTEGER NOT NULL,
    "boughtby" INTEGER NOT NULL,

    CONSTRAINT "Bought_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rented" (
    "id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "createdby" INTEGER NOT NULL,
    "rentedby" INTEGER NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rented_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bought_product_id_key" ON "Bought"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "Rented_product_id_key" ON "Rented"("product_id");
