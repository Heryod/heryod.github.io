import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const localizedText = z.object({
  pl: z.string(),
  en: z.string(),
});

const localizedList = z.object({
  pl: z.array(z.string()),
  en: z.array(z.string()),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    status: z.enum(["wip", "archived", "active"]),
    imageAlt: z.string().optional().default(""),
    summary: localizedText,
    description: localizedText,
    technologies: z.array(z.string()).default([]),
    duration: localizedText,
    role: localizedText,
    responsibilities: localizedList,
    skills: z
      .array(
        z.object({
          name: z.string(),
          level: z.number().min(1).max(5).optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { projects };
