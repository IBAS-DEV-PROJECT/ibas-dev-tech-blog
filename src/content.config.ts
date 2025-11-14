import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import type { ProjectTagId } from './data/projectTags';
import { PROJECT_TAG_IDS } from './data/projectTags';

const projectTagEnum = z.enum(PROJECT_TAG_IDS as [ProjectTagId, ...ProjectTagId[]]);

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      tags: z.array(projectTagEnum).default([]),
    }),
});

export const collections = { blog };
