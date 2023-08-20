/*
  Warnings:

  - The primary key for the `RegisteredClasses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `RegisteredClasses` table. All the data in the column will be lost.
  - You are about to drop the `_ClassToStudent` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `platform` on the `RegisteredClasses` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "platform" AS ENUM ('Zoom', 'Classroom');

-- DropForeignKey
ALTER TABLE "_ClassToStudent" DROP CONSTRAINT "_ClassToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClassToStudent" DROP CONSTRAINT "_ClassToStudent_B_fkey";

-- AlterTable
ALTER TABLE "RegisteredClasses" DROP CONSTRAINT "RegisteredClasses_pkey",
DROP COLUMN "id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "platform",
ADD COLUMN     "platform" "platform" NOT NULL,
ADD CONSTRAINT "RegisteredClasses_pkey" PRIMARY KEY ("studentId", "classId");

-- DropTable
DROP TABLE "_ClassToStudent";

-- CreateIndex
CREATE INDEX "RegisteredClasses_studentId_platform_idx" ON "RegisteredClasses"("studentId", "platform");
