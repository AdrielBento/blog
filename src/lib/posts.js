import { z } from "zod";

const frontmatterSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  excerpt: z.string().min(1),
  date: z.string().min(1),
  readingTime: z.string().min(1),
  author: z.string().min(1),
  category: z.string().min(1),
  subtitle: z.string().min(1),
});

const MONTHS_PT_BR = {
  janeiro: 0,
  fevereiro: 1,
  março: 2,
  marco: 2,
  abril: 3,
  maio: 4,
  junho: 5,
  julho: 6,
  agosto: 7,
  setembro: 8,
  outubro: 9,
  novembro: 10,
  dezembro: 11,
};

function parsePtBrDate(dateString) {
  const match = dateString
    .trim()
    .toLowerCase()
    .match(/^(\d{1,2})\s+de\s+([a-zçã]+)\s+de\s+(\d{4})$/);

  if (!match) {
    throw new Error(
      `[mdx-posts] Invalid date format "${dateString}". Expected "DD de mês de YYYY".`,
    );
  }

  const day = Number(match[1]);
  const monthText = match[2];
  const year = Number(match[3]);
  const month = MONTHS_PT_BR[monthText];

  if (month === undefined) {
    throw new Error(
      `[mdx-posts] Invalid month "${monthText}" in date "${dateString}".`,
    );
  }

  return new Date(Date.UTC(year, month, day)).getTime();
}

const postModules = import.meta.glob("../content/posts/*.mdx", { eager: true });

function loadPosts() {
  const rawPosts = Object.entries(postModules).map(([filePath, mod]) => {
    const result = frontmatterSchema.safeParse(mod.frontmatter);

    if (!result.success) {
      const issues = result.error.issues
        .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
        .join("; ");
      throw new Error(`[mdx-posts] Invalid frontmatter in "${filePath}". ${issues}`);
    }

    return {
      ...result.data,
      Content: mod.default,
      sortTimestamp: parsePtBrDate(result.data.date),
    };
  });

  const slugSet = new Set();
  for (const post of rawPosts) {
    if (slugSet.has(post.slug)) {
      throw new Error(`[mdx-posts] Duplicate slug "${post.slug}".`);
    }
    slugSet.add(post.slug);
  }

  return rawPosts
    .sort((a, b) => b.sortTimestamp - a.sortTimestamp)
    .map(({ sortTimestamp, ...post }) => post);
}

export const posts = loadPosts();
export const postsBySlug = Object.fromEntries(posts.map((post) => [post.slug, post]));
