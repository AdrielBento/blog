import { useDeferredValue, useState } from "react";
import HomeTemplate from "../components/templates/HomeTemplate";
import { posts } from "../postsData";

const categories = ["all", "Arquitetura", "Craftsmanship", "IA"];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const deferredCategory = useDeferredValue(selectedCategory);
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
