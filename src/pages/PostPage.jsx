import { useEffect } from "react";
import mermaid from "mermaid";
import { Navigate, useParams } from "react-router-dom";
import PostTemplate from "../components/templates/PostTemplate";
import { useTheme } from "../lib/theme";
import { posts, postsBySlug } from "../lib/posts";

export default function PostPage() {
  const { slug } = useParams();
  const { theme } = useTheme();
  const post = slug ? postsBySlug[slug] : null;

  useEffect(() => {
    if (!post) {
      return;
    }

    const plainBlocks = document.querySelectorAll(
      ".article-body pre code.language-mermaid",
    );
    for (const code of plainBlocks) {
      const pre = code.parentElement;
      if (!pre) {
        continue;
      }

      pre.classList.add("mermaid");
      pre.textContent = code.textContent ?? "";
    }

    const mermaidBlocks = Array.from(
      document.querySelectorAll(".article-body pre.mermaid"),
    );
    if (!mermaidBlocks.length) {
      return;
    }

    for (const block of mermaidBlocks) {
      const source = block.dataset.mermaidSource ?? block.textContent ?? "";
      block.dataset.mermaidSource = source;
      block.removeAttribute("data-processed");
      block.textContent = source;
    }

    mermaid.initialize({
      startOnLoad: false,
      theme: theme === "light" ? "default" : "dark",
      securityLevel: "loose",
    });

    void mermaid.run({
      nodes: mermaidBlocks,
      suppressErrors: false,
    });
  }, [post, slug, theme]);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = posts.findIndex((item) => item.slug === post.slug);
  const nextPost = posts[currentIndex + 1] ?? null;

  return <PostTemplate post={post} nextPost={nextPost} />;
}
