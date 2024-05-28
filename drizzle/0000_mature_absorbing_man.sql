CREATE TABLE `gifts` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`value` integer NOT NULL,
	`url` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`acquired` integer DEFAULT false NOT NULL
);
