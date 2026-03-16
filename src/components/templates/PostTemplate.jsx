import SeparatorLine from "../atoms/SeparatorLine";
import ArticlePaginationLink from "../molecules/ArticlePaginationLink";
import ArticleContent from "../organisms/ArticleContent";
import PostHero from "../organisms/PostHero";
import SiteHeaderBar from "../organisms/SiteHeaderBar";

const postNavItems = [
  { label: "Arquivo", href: "/#artigos" },
  { label: "Manifesto", href: "/#manifesto" },
];

export default function PostTemplate({ post, nextPost }) {
  return (
    <div className="page-shell">
      <header className="site-header site-header--article">
        <SiteHeaderBar items={postNavItems} />
        <PostHero post={post} />
      </header>

      <SeparatorLine />
      <ArticleContent post={post} />

      <nav className="article-pagination" aria-label="Próximo artigo">
        <ArticlePaginationLink nextPost={nextPost} />
      </nav>
    </div>
  );
}
