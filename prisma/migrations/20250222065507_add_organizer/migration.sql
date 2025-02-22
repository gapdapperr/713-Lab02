-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `event_OrganizerId_fkey`;

-- DropIndex
DROP INDEX `event_OrganizerId_fkey` ON `event`;

-- AlterTable
ALTER TABLE `event` MODIFY `OrganizerId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `event_OrganizerId_fkey` FOREIGN KEY (`OrganizerId`) REFERENCES `organizer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
