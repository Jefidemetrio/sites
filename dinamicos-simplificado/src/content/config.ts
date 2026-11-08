// Astro Content Collection Schema
import { z } from 'zod';

export const blog = {
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    featured: z.boolean().optional(),
    readingTime: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.object({
      name: z.string(),
      url: z.string().url().optional(),
    }).optional(),
    content: z.string().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
};

export const collections = { blog };