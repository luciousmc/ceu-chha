/*
  Warnings:

  - You are about to drop the `RegisteredClasses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `platform` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ClassDate" DROP CONSTRAINT "ClassDate_classId_fkey";

-- DropForeignKey
ALTER TABLE "RegisteredClasses" DROP CONSTRAINT "RegisteredClasses_classId_fkey";

-- DropForeignKey
ALTER TABLE "RegisteredClasses" DROP CONSTRAINT "RegisteredClasses_studentId_fkey";

-- DropIndex
DROP INDEX "ClassDate_classId_key";

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "platform" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ClassDate" ALTER COLUMN "classId" DROP NOT NULL;

-- DropTable
DROP TABLE "RegisteredClasses";

-- DropEnum
DROP TYPE "Platform";

-- CreateTable
CREATE TABLE "_ClassToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClassToStudent_AB_unique" ON "_ClassToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassToStudent_B_index" ON "_ClassToStudent"("B");

-- AddForeignKey
ALTER TABLE "ClassDate" ADD CONSTRAINT "ClassDate_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToStudent" ADD CONSTRAINT "_ClassToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToStudent" ADD CONSTRAINT "_ClassToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
