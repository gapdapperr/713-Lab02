/*
  Warnings:

  - You are about to drop the column `organizer` on the `event` table. All the data in the column will be lost.
  - Added the required column `OrganizerId` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` DROP COLUMN `organizer`,
    ADD COLUMN `OrganizerId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `organizer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `event_OrganizerId_fkey` FOREIGN KEY (`OrganizerId`) REFERENCES `organizer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
