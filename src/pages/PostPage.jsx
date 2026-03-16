import { useEffect } from "react";
import mermaid from "mermaid";
import { Navigate, useParams } from "react-router-dom";
import PostTemplate from "../components/templates/PostTemplate";
import { posts, postsBySlug } from "../lib/posts";

export default function PostPage() {
  const { slug } = useParams();
  const post = slug ? postsBySlug[slug] : null;

  useEffect(() => {
    if (!post) {
      return;
    }

    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      securityLevel: "loose",
    });

    mermaid.run({
      querySelector: ".article-body pre.mermaid",
      suppressErrors: false,
    });
  }, [post, slug]);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = posts.findIndex((item) => item.slug === post.slug);
  const nextPost = posts[currentIndex + 1] ?? null;

  return <PostTemplate post={post} nextPost={nextPost} />;
}
