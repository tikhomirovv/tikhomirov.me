import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Markdown / MDX per locale: src/content/home/<lang>/… (hero uses MDX for page-intro + eyebrow).
 */
const home = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/home" }),
  schema: z.object({
    title: z.string(),
  }),
});

/**
 * Markdown / MDX per locale: src/content/portfolio/<lang>/… (resume uses MDX for job cards).
 */
const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { home, portfolio };
