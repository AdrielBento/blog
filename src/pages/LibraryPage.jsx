import { useDeferredValue, useState } from "react";
import LibraryTemplate from "../components/templates/LibraryTemplate";
import {
  libraryResources,
  libraryResourceTypes,
  resourceTypeOrder,
} from "../lib/libraryResources";

export default function LibraryPage() {
  const [selectedType, setSelectedType] = useState("all");
  const deferredType = useDeferredValue(selectedType);

  const filteredResources =
    deferredType === "all"
      ? libraryResources
      : libraryResources.filter((resource) => resource.type === deferredType);

  const catalog = resourceTypeOrder.map((type) => ({
    type,
    count: libraryResources.filter((resource) => resource.type === type).length,
  }));

  return (
    <LibraryTemplate
      catalog={catalog}
      totalResources={libraryResources.length}
      types={libraryResourceTypes}
      selectedType={selectedType}
      onSelectType={setSelectedType}
      resources={filteredResources}
    />
  );
}
