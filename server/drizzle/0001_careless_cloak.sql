CREATE TABLE "experiences" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"company" text NOT NULL,
	"description" text NOT NULL,
	"start_date" timestamp NOT NULL,
	"end_date" timestamp,
	"current" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"category" text NOT NULL,
	"icon_url" text
);
