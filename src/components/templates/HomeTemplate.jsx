import SeparatorLine from "../atoms/SeparatorLine";
import HomeHero from "../organisms/HomeHero";
import ManifestoSection from "../organisms/ManifestoSection";
import PostsArchiveSection from "../organisms/PostsArchiveSection";
import SiteFooter from "../organisms/SiteFooter";
import SiteHeaderBar from "../organisms/SiteHeaderBar";

const homeNavItems = [
  { label: "Articles", href: "#artigos" },
  { label: "Manifesto", href: "#manifesto" },
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
        <ManifestoSection />
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
