import SeparatorLine from "../atoms/SeparatorLine";
import HomeHero from "../organisms/HomeHero";
import PostsArchiveSection from "../organisms/PostsArchiveSection";
import SiteFooter from "../organisms/SiteFooter";
import SiteHeaderBar from "../organisms/SiteHeaderBar";

const homeNavItems = [
  { label: "Articles", href: "#artigos" },
];

export default function HomeTemplate({
  categories,
  selectedCategory,
  onSelectCategory,
  posts,
}) {
  return (
    <div className="page-shell">
      <header className="site-header">
        <SiteHeaderBar items={homeNavItems} />
        <HomeHero />
      </header>

      <main>
        <SeparatorLine />
        <PostsArchiveSection
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
          posts={posts}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
