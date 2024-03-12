import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  author: z.string(),
  imageUrl: z.string().url(),
  date: z.date(),
  tags: z.array(z.string()),
});

const blogContent = defineCollection({
  type: "content",
  schema: blogSchema,
});

export const collections = {
  blog: blogContent,
};