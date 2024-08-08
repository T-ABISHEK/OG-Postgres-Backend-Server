-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT,
    "emailId" TEXT NOT NULL,
    "state" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_emailId_key" ON "User"("emailId");
