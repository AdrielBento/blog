import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { resourceTypeLabels } from "../../lib/libraryResources";

export default function ResourceTypeFilter({
  types,
  selectedType,
  onSelectType,
}) {
  return (
    <ToggleGroup.Root
      type="single"
      value={selectedType}
      onValueChange={(value) => {
        if (value) {
          onSelectType(value);
        }
      }}
      className="filter-group"
      aria-label="Filtrar biblioteca"
    >
      {types.map((type) => (
        <ToggleGroup.Item
          key={type}
          value={type}
          className="filter-chip"
          type="button"
        >
          {resourceTypeLabels[type]}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}
