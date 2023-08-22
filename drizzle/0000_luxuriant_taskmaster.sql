CREATE TABLE `channel` (
	`id` varchar(36) PRIMARY KEY NOT NULL,
	`name` varchar(255) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE TABLE `daily` (
	`id` varchar(36) PRIMARY KEY NOT NULL,
	`channelId` varchar(36) NOT NULL,
	`messages` int NOT NULL,
	`byUser` json NOT NULL,
	`byBadge` json NOT NULL,
	`day` date NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE TABLE `message` (
	`id` varchar(36) PRIMARY KEY NOT NULL,
	`username` varchar(255) NOT NULL,
	`message` text NOT NULL,
	`badges` json NOT NULL,
	`timestamp` timestamp DEFAULT (now()),
	`channelId` varchar(36) NOT NULL);
--> statement-breakpoint
CREATE TABLE `role` (
	`id` varchar(36) PRIMARY KEY NOT NULL,
	`name` varchar(255) NOT NULL,
	`level` int NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` varchar(36) PRIMARY KEY NOT NULL,
	`username` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	`roleId` varchar(36) NOT NULL);
