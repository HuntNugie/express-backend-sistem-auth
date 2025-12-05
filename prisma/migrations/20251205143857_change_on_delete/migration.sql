-- DropForeignKey
ALTER TABLE "User_profile" DROP CONSTRAINT "User_profile_user_id_fkey";

-- AddForeignKey
ALTER TABLE "User_profile" ADD CONSTRAINT "User_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
