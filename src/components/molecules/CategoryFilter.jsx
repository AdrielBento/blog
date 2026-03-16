import * as ToggleGroup from "@radix-ui/react-toggle-group";

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <ToggleGroup.Root
      type="single"
      value={selectedCategory}
      onValueChange={(value) => {
        if (value) {
          onSelectCategory(value);
        }
      }}
      className="filter-group"
      aria-label="Filtrar artigos"
    >
      {categories.map((category) => (
        <ToggleGroup.Item
          key={category}
          value={category}
          className="filter-chip"
          type="button"
        >
          {category === "all" ? "Todos" : category}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}
