import { defineCollection, z } from "astro:content";


const projectsCollection = defineCollection({
    type: 'content',
    schema:  ({image}) => z.object({
      title: z.string(),
      description: z.string(),
      categories: z.array(z.string()),      
      image: image(),
      location: z.string(),
      area: z.number(),
      featured: z.boolean().default(false),
      published: z.boolean().default(false),
      publishedDate: z.date(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
};