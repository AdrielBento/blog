import Kicker from "../atoms/Kicker";
import ResourceCard from "../molecules/ResourceCard";
import ResourceTypeFilter from "../molecules/ResourceTypeFilter";

export default function LibraryArchiveSection({
  types,
  selectedType,
  onSelectType,
  resources,
}) {
  return (
    <section className="library-section" id="acervo">
      <div className="library-curation">
        <div className="manifesto-card library-curation__note">
          <Kicker>Curadoria</Kicker>
          <h2>Recursos para pensar melhor antes de construir.</h2>
          <p>
            A estante combina referencias fundacionais com materiais praticos
            para decisao arquitetural, manutencao de sistemas e uso disciplinado
            de IA em produtos reais.
          </p>
        </div>

        <div className="rail-card library-curation__index">
          <Kicker>Como navegar</Kicker>
          <ul className="library-curation__list">
            <li>Comece por livros para formar criterio de longo prazo.</li>
            <li>Use artigos como notas de calibracao para decisoes especificas.</li>
            <li>Papers entram quando o problema exige base conceitual solida.</li>
            <li>Videos servem como complemento para ritmo, contexto e debate.</li>
          </ul>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <Kicker>Arquivo visual</Kicker>
          <h2>Leituras, aulas e referencias vivas</h2>
        </div>
        <ResourceTypeFilter
          types={types}
          selectedType={selectedType}
          onSelectType={onSelectType}
        />
      </div>

      {resources.length ? (
        <div className="library-grid">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="rail-card library-empty">
          <Kicker>Sem resultados</Kicker>
          <p>Nenhum recurso corresponde ao filtro atual.</p>
        </div>
      )}
    </section>
  );
}
