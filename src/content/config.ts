// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const menu = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    webName: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'menu': menu,
};