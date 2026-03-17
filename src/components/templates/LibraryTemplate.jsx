import SeparatorLine from "../atoms/SeparatorLine";
import LibraryArchiveSection from "../organisms/LibraryArchiveSection";
import LibraryHero from "../organisms/LibraryHero";
import SiteFooter from "../organisms/SiteFooter";
import SiteHeaderBar from "../organisms/SiteHeaderBar";

const libraryNavItems = [
  { label: "Arquivo", href: "/#artigos" },
  { label: "Acervo", href: "#acervo" },
];

export default function LibraryTemplate({
  catalog,
  totalResources,
  types,
  selectedType,
  onSelectType,
  resources,
}) {
  return (
    <div className="page-shell">
      <header className="site-header site-header--library">
        <SiteHeaderBar items={libraryNavItems} />
        <LibraryHero catalog={catalog} totalResources={totalResources} />
      </header>

      <main>
        <SeparatorLine />
        <LibraryArchiveSection
          types={types}
          selectedType={selectedType}
          onSelectType={onSelectType}
          resources={resources}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
