import Kicker from "../atoms/Kicker";
import CategoryFilter from "../molecules/CategoryFilter";
import PostCard from "../molecules/PostCard";

export default function PostsArchiveSection({
  categories,
  selectedCategory,
  onSelectCategory,
  posts,
}) {
  return (
    <section className="posts-section" id="artigos">
      <div className="section-heading">
        <div>
          <Kicker>Arquivo</Kicker>
          <h2>Leituras recentes</h2>
        </div>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
      </div>

      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
