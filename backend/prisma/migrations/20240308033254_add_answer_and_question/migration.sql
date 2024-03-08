/*
  Warnings:

  - You are about to drop the column `faculty_id` on the `Eligible` table. All the data in the column will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Major` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `faculty` to the `Eligible` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prefix_eng` to the `Eligible` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('Party', 'Candidate');

-- DropForeignKey
ALTER TABLE "Candidate" DROP CONSTRAINT "Candidate_department_id_fkey";

-- DropForeignKey
ALTER TABLE "Candidate" DROP CONSTRAINT "Candidate_major_id_fkey";

-- DropForeignKey
ALTER TABLE "Eligible" DROP CONSTRAINT "Eligible_faculty_id_fkey";

-- AlterTable
ALTER TABLE "Eligible" DROP COLUMN "faculty_id",
ADD COLUMN     "faculty" TEXT NOT NULL,
ADD COLUMN     "prefix_eng" TEXT NOT NULL,
ALTER COLUMN "registered" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Department";

-- DropTable
DROP TABLE "Major";

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "topic" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "QuestionType" NOT NULL,
    "election_id" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "question_id" INTEGER NOT NULL,
    "partyId" INTEGER,
    "candidateId" INTEGER,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_election_id_fkey" FOREIGN KEY ("election_id") REFERENCES "Election"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
