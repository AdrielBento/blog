import { Navigate, useParams } from "react-router-dom";
import PostTemplate from "../components/templates/PostTemplate";
import { posts, postsBySlug } from "../postsData";

export default function PostPage() {
  const { slug } = useParams();
  const post = slug ? postsBySlug[slug] : null;

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = posts.findIndex((item) => item.slug === post.slug);
  const nextPost = posts[currentIndex + 1] ?? null;

  return <PostTemplate post={post} nextPost={nextPost} />;
}
