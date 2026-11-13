import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
    readTime: z.string().optional(),
    cover: z.string().default('/images/cover-notes.svg'),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    period: z.string(),
    role: z.string(),
    status: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    cover: z.string(),
    tags: z.array(z.string()).default([]),
    publicNote: z.string().optional(),
  }),
});

export const collections = { blog, projects };
