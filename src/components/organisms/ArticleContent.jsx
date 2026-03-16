import Kicker from "../atoms/Kicker";
import BackToArchiveLink from "../molecules/BackToArchiveLink";

export default function ArticleContent({ post }) {
  const Content = post.Content;

  return (
    <main className="article-layout">
      <aside className="article-rail">
        <BackToArchiveLink />
        <div className="rail-card">
          <Kicker>Foco</Kicker>
          <p>{post.excerpt}</p>
        </div>
      </aside>

      <article className="article-body">
        <Content />
      </article>
    </main>
  );
}
