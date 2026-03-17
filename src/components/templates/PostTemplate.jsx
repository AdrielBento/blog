import SeparatorLine from "../atoms/SeparatorLine";
import ArticlePaginationLink from "../molecules/ArticlePaginationLink";
import ArticleContent from "../organisms/ArticleContent";
import CommentsSection from "../organisms/CommentsSection";
import PostHero from "../organisms/PostHero";
import SiteHeaderBar from "../organisms/SiteHeaderBar";

const postNavItems = [
  { label: "Arquivo", href: "/#artigos" },
];

export default function PostTemplate({ post, nextPost }) {
  const headerStyle = post.heroImage
    ? { "--post-hero-image": `url("${post.heroImage}")` }
    : undefined;

  return (
    <div className="page-shell">
      <header className="site-header site-header--article" style={headerStyle}>
        <SiteHeaderBar items={postNavItems} />
        <PostHero post={post} />
      </header>

      <SeparatorLine />
      <ArticleContent post={post} />
      <CommentsSection postSlug={post.slug} postTitle={post.title} />

      <nav className="article-pagination" aria-label="Próximo artigo">
        <ArticlePaginationLink nextPost={nextPost} />
      </nav>
    </div>
  );
}
