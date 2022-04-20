-- AlterTable
ALTER TABLE "Recipe" ALTER COLUMN "ingredients" DROP NOT NULL,
ALTER COLUMN "ingredients" SET DATA TYPE TEXT;
