CREATE TABLE `gifts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uid` text DEFAULT '01HZ40RV8WNEG81C6YCEA75VDP',
	`title` text NOT NULL,
	`value` integer NOT NULL,
	`url` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`acquired` integer DEFAULT false
);
