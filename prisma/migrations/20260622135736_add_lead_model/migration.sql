-- CreateEnum
CREATE TYPE "public"."LeadStatus" AS ENUM ('NEW', 'CONTACTED', 'QUALIFIED', 'CUSTOMER', 'COMPLETED', 'LOST');

-- CreateEnum
CREATE TYPE "public"."LeadSource" AS ENUM ('FACEBOOK', 'INSTAGRAM', 'GOOGLE', 'REFERRAL', 'WEBSITE', 'PHONE_CALL', 'WALK_IN', 'OTHER');

-- CreateTable
CREATE TABLE "public"."Lead" (
    "id" TEXT NOT NULL,
    "businessId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "interest" TEXT NOT NULL,
    "source" "public"."LeadSource" NOT NULL,
    "status" "public"."LeadStatus" NOT NULL DEFAULT 'NEW',
    "notes" TEXT,
    "budget" DECIMAL(10,2),
    "location" TEXT,
    "targetAppointmentDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Lead" ADD CONSTRAINT "Lead_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "public"."Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
