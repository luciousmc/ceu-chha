/*
  Warnings:

  - Added the required column `date` to the `RegisteredClasses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RegisteredClasses" ADD COLUMN     "date" DATE NOT NULL;
