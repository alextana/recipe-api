-- DropIndex
DROP INDEX "Recipe_name_key";

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "author" TEXT,
ADD COLUMN     "calories" TEXT,
ADD COLUMN     "carbs" TEXT,
ADD COLUMN     "cooking_time" TEXT,
ADD COLUMN     "difficulty" TEXT,
ADD COLUMN     "fats" TEXT,
ADD COLUMN     "fibre" TEXT,
ADD COLUMN     "ingredients" TEXT[],
ADD COLUMN     "instructions" TEXT,
ADD COLUMN     "preparation_time" TEXT,
ADD COLUMN     "protein" TEXT,
ADD COLUMN     "salt" TEXT,
ADD COLUMN     "saturates" TEXT,
ADD COLUMN     "servings" TEXT,
ADD COLUMN     "sugars" TEXT;
