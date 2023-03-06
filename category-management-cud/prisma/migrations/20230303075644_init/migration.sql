-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "category_id" TEXT NOT NULL,
    "category_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(25) NOT NULL,
    "category_id" TEXT NOT NULL,
    "category_name" TEXT NOT NULL,
    "type_id" TEXT NOT NULL,
    "type_name" TEXT NOT NULL,
    "brand" VARCHAR(25) NOT NULL,
    "series" VARCHAR(25) NOT NULL,
    "technical_parameter" VARCHAR(25) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_name_key" ON "Category"("id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Type_id_name_key" ON "Type"("id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_technical_parameter_key" ON "Product"("technical_parameter");

-- AddForeignKey
ALTER TABLE "Type" ADD CONSTRAINT "Type_category_id_category_name_fkey" FOREIGN KEY ("category_id", "category_name") REFERENCES "Category"("id", "name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_id_category_name_fkey" FOREIGN KEY ("category_id", "category_name") REFERENCES "Category"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_type_id_type_name_fkey" FOREIGN KEY ("type_id", "type_name") REFERENCES "Type"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;
