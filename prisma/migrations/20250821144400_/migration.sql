-- CreateTable
CREATE TABLE `routes` (
    `id_routes` INTEGER NOT NULL AUTO_INCREMENT,
    `plates` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_routes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
