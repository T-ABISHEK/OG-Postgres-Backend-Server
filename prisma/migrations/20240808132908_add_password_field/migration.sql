-- Add the `password` column with a temporary default value
ALTER TABLE "User" ADD COLUMN "password" VARCHAR(255) DEFAULT 'temporary_password';

-- Update existing rows to have a proper password (hashed) if needed
-- You might want to update this with a script or a manual process later

-- Remove the default value
ALTER TABLE "User" ALTER COLUMN "password" DROP DEFAULT;
