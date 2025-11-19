import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// schema: z.object({
	// 	title: z.string(),
	// 	excerpt: z.string().optional(),
	// 	tags: z.string().optional(),
    //     season: z.string().optional(),
    //     type: z.string().optional(),
    //     external_url: z.string().optional(),
    //     layout: z.string().optional(),
    //     assets: z.string().optional(),
	// }),
    // Allow loose schema to handle legacy data gracefully
});

export const collections = { blog };
