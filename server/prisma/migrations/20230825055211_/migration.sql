/*
  Warnings:

  - Made the column `classId` on table `ClassDate` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ClassDate" DROP CONSTRAINT "ClassDate_classId_fkey";

-- AlterTable
ALTER TABLE "ClassDate" ALTER COLUMN "classId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ClassDate" ADD CONSTRAINT "ClassDate_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;
