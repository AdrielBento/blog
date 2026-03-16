import { useDeferredValue, useState } from "react";
import HomeTemplate from "../components/templates/HomeTemplate";
import { posts } from "../lib/posts";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const deferredCategory = useDeferredValue(selectedCategory);
  const categories = ["all", ...new Set(posts.map((post) => post.category))];
  const filteredPosts =
    deferredCategory === "all"
      ? posts
      : posts.filter((post) => post.category === deferredCategory);

  return (
    <HomeTemplate
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory}
      posts={filteredPosts}
    />
  );
}
