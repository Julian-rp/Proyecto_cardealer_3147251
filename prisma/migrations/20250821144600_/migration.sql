/*
  Warnings:

  - You are about to drop the column `plates` on the `routes` table. All the data in the column will be lost.
  - Added the required column `plate` to the `routes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `routes` DROP COLUMN `plates`,
    ADD COLUMN `arrival_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `departure_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `plate` VARCHAR(191) NOT NULL;
