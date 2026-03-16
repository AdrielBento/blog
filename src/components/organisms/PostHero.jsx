import Kicker from "../atoms/Kicker";

export default function PostHero({ post }) {
  return (
    <section className="article-hero">
      <Kicker className="eyebrow">{post.category}</Kicker>
      <h1>{post.title}</h1>
      <p className="article-hero__subtitle">{post.subtitle}</p>
      <div className="article-hero__meta">
        <span>por {post.author}</span>
        <span>{post.date}</span>
        <span>{post.readingTime}</span>
      </div>
    </section>
  );
}
