-- CreateEnum
CREATE TYPE "ElectionType" AS ENUM ('SAPA', 'ONGKARN', 'SAMO');

-- CreateEnum
CREATE TYPE "Prefix" AS ENUM ('Mr', 'Ms', 'Mrs');

-- CreateTable
CREATE TABLE "Eligible" (
    "id" SERIAL NOT NULL,
    "student_id" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "firstname_eng" TEXT NOT NULL,
    "lastname_eng" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "semester" INTEGER NOT NULL,
    "registered" BOOLEAN NOT NULL,
    "faculty_id" INTEGER NOT NULL,

    CONSTRAINT "Eligible_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faculty" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "name_eng" TEXT NOT NULL,

    CONSTRAINT "Faculty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Major" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "name_eng" TEXT NOT NULL,

    CONSTRAINT "Major_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "name_eng" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Election" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "start_date" TIMETZ(6) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "year" INTEGER NOT NULL,
    "type" "ElectionType" NOT NULL,
    "count_vote" BOOLEAN NOT NULL,

    CONSTRAINT "Election_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Party" (
    "id" SERIAL NOT NULL,
    "application_no" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviate" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "symbol" TEXT NOT NULL,
    "group_image" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL,
    "election_id" INTEGER NOT NULL,

    CONSTRAINT "Party_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartyMember" (
    "id" SERIAL NOT NULL,
    "no" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "party_id" INTEGER NOT NULL,
    "candidate_id" INTEGER NOT NULL,

    CONSTRAINT "PartyMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" SERIAL NOT NULL,
    "student_id" TEXT NOT NULL,
    "prefix" "Prefix" NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "disciplinary_history" BOOLEAN NOT NULL,
    "year" INTEGER NOT NULL,
    "major_id" INTEGER NOT NULL,
    "department_id" INTEGER NOT NULL,
    "faculty_id" INTEGER NOT NULL,
    "gpax" DOUBLE PRECISION NOT NULL,
    "contact_id" INTEGER NOT NULL,
    "candidate_eng_id" INTEGER NOT NULL,
    "election_id" INTEGER NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CandidateEng" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,

    CONSTRAINT "CandidateEng_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "phone_no" TEXT NOT NULL,
    "personal_enail" TEXT NOT NULL,
    "kmutt_email" TEXT NOT NULL,
    "line_id" TEXT NOT NULL,
    "facebook" TEXT,
    "ig" TEXT,
    "address" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VoteParty" (
    "election_id" INTEGER NOT NULL,
    "party_id" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "VoteParty_pkey" PRIMARY KEY ("election_id","party_id")
);

-- CreateTable
CREATE TABLE "VoteCandidate" (
    "election_id" INTEGER NOT NULL,
    "candidate_id" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "VoteCandidate_pkey" PRIMARY KEY ("election_id","candidate_id")
);

-- CreateTable
CREATE TABLE "VoteLog" (
    "election_id" INTEGER NOT NULL,
    "eligible_id" INTEGER NOT NULL,

    CONSTRAINT "VoteLog_pkey" PRIMARY KEY ("election_id","eligible_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Party_application_no_key" ON "Party"("application_no");

-- CreateIndex
CREATE UNIQUE INDEX "PartyMember_candidate_id_key" ON "PartyMember"("candidate_id");

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_contact_id_key" ON "Candidate"("contact_id");

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_candidate_eng_id_key" ON "Candidate"("candidate_eng_id");

-- CreateIndex
CREATE UNIQUE INDEX "VoteParty_party_id_key" ON "VoteParty"("party_id");

-- AddForeignKey
ALTER TABLE "Eligible" ADD CONSTRAINT "Eligible_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "Faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Party" ADD CONSTRAINT "Party_election_id_fkey" FOREIGN KEY ("election_id") REFERENCES "Election"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartyMember" ADD CONSTRAINT "PartyMember_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartyMember" ADD CONSTRAINT "PartyMember_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_major_id_fkey" FOREIGN KEY ("major_id") REFERENCES "Major"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "Faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_candidate_eng_id_fkey" FOREIGN KEY ("candidate_eng_id") REFERENCES "CandidateEng"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_election_id_fkey" FOREIGN KEY ("election_id") REFERENCES "Election"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoteParty" ADD CONSTRAINT "VoteParty_election_id_fkey" FOREIGN KEY ("election_id") REFERENCES "Election"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoteParty" ADD CONSTRAINT "VoteParty_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "Party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoteCandidate" ADD CONSTRAINT "VoteCandidate_election_id_fkey" FOREIGN KEY ("election_id") REFERENCES "Election"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoteCandidate" ADD CONSTRAINT "VoteCandidate_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoteLog" ADD CONSTRAINT "VoteLog_election_id_fkey" FOREIGN KEY ("election_id") REFERENCES "Election"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoteLog" ADD CONSTRAINT "VoteLog_eligible_id_fkey" FOREIGN KEY ("eligible_id") REFERENCES "Eligible"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
