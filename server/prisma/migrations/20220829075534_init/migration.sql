-- CreateEnum
CREATE TYPE "AMPM" AS ENUM ('AM', 'PM');

-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('Zoom', 'OnSite', 'Discord', 'TeamSpeak');

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "middle_initial" TEXT,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "ssn" TEXT NOT NULL,
    "email" TEXT,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "work_name" TEXT,
    "work_address" TEXT,
    "work_city" TEXT,
    "work_state" TEXT,
    "work_zipcode" INTEGER,
    "cna_number" TEXT,
    "cna_exp_date" TIMESTAMP(3),
    "chha_number" TEXT,
    "chha_exp_date" TIMESTAMP(3),

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "topic" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassDate" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "am_pm" "AMPM" NOT NULL,
    "classId" INTEGER NOT NULL,

    CONSTRAINT "ClassDate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegisteredClasses" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,
    "platform" "Platform" NOT NULL,

    CONSTRAINT "RegisteredClasses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_ssn_key" ON "Student"("ssn");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_cna_number_key" ON "Student"("cna_number");

-- CreateIndex
CREATE UNIQUE INDEX "Student_chha_number_key" ON "Student"("chha_number");

-- CreateIndex
CREATE UNIQUE INDEX "ClassDate_classId_key" ON "ClassDate"("classId");

-- AddForeignKey
ALTER TABLE "ClassDate" ADD CONSTRAINT "ClassDate_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegisteredClasses" ADD CONSTRAINT "RegisteredClasses_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegisteredClasses" ADD CONSTRAINT "RegisteredClasses_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
