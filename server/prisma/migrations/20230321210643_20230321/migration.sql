/*
  Warnings:

  - You are about to drop the column `platform` on the `Class` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "platform";

-- CreateTable
CREATE TABLE "RegisteredClasses" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,
    "platform" TEXT NOT NULL,
    "paid" BOOLEAN NOT NULL,

    CONSTRAINT "RegisteredClasses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RegisteredClasses" ADD CONSTRAINT "RegisteredClasses_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegisteredClasses" ADD CONSTRAINT "RegisteredClasses_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
