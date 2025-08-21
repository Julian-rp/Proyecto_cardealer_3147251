-- CreateTable
CREATE TABLE `route_advisor` (
    `id_route_advisor` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `number_phone` INTEGER NOT NULL,
    `routes_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_route_advisor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `route_advisor` ADD CONSTRAINT `route_advisor_routes_id_fkey` FOREIGN KEY (`routes_id`) REFERENCES `routes`(`id_routes`) ON DELETE RESTRICT ON UPDATE CASCADE;
