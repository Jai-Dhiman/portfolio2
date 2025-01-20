CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"live_url" text,
	"github_url" text,
	"image" text,
	"tech_stack" text[],
	"created_at" timestamp DEFAULT now()
);
