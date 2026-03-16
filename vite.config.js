import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeMermaid from "rehype-mermaid";

const prettyCodeOptions = {
  theme: "github-dark-dimmed",
  keepBackground: false,
};

const mdxPlugin = mdx({
  remarkPlugins: [
    remarkGfm,
    remarkFrontmatter,
    [remarkMdxFrontmatter, { name: "frontmatter" }],
  ],
  rehypePlugins: [
    [rehypePrettyCode, prettyCodeOptions],
    [rehypeMermaid, { strategy: "inline-svg", mermaidConfig: { theme: "dark" } }],
  ],
});

mdxPlugin.enforce = "pre";

export default defineConfig({
  plugins: [
    mdxPlugin,
    react({
      include: /\.(mdx|js|jsx|ts|tsx)$/,
    }),
  ],
});
