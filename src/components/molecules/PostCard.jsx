import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link className="post-card" to={`/posts/${post.slug}`}>
      <p className="post-card__tag">{post.category}</p>
      <h3>{post.title}</h3>
      <p className="post-card__excerpt">{post.excerpt}</p>
      <div className="post-card__meta">
        <span>{post.date}</span>
        <span>{post.readingTime}</span>
      </div>
    </Link>
  );
}
