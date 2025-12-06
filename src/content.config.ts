import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';


// Post collection schema
const postsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.union([z.date(), z.string()]).optional().transform((val) => {
      if (typeof val === 'string') {
        return new Date(val);
      }
      return val;
    }),
    updated: z.union([z.date(), z.string()]).optional().transform((val) => {
      if (typeof val === 'string') {
        return new Date(val);
      }
      return val;
    }),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});


// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/pages" }),
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
};
