import { BookOpenText, FlaskConical, MonitorPlay, ScrollText } from "lucide-react";
import Kicker from "../atoms/Kicker";
import { resourceTypeLabels } from "../../lib/libraryResources";

const typeIcons = {
  book: BookOpenText,
  article: ScrollText,
  video: MonitorPlay,
  paper: FlaskConical,
};

export default function LibraryHero({ catalog, totalResources }) {
  return (
    <section className="library-hero">
      <div className="library-hero__content">
        <Kicker className="eyebrow">Biblioteca</Kicker>
        <h1>Estante de referencia.</h1>
        <p className="library-hero__lede">
          Livros, ensaios, papers e videos para quem projeta software com
          criterio, repertorio e paciencia arquitetural.
        </p>
        <div className="library-hero__meta">
          <span>
            <BookOpenText />
            repertorio de engenharia
          </span>
          <span>
            <ScrollText />
            leituras com contexto
          </span>
          <span>
            <FlaskConical />
            IA e fundamentos
          </span>
        </div>
      </div>

      <aside className="rail-card library-hero__cabinet">
        <Kicker>Mapa do acervo</Kicker>
        <h2>{totalResources} entradas curatoriais</h2>
        <div className="library-hero__catalog">
          {catalog.map((item) => {
            const Icon = typeIcons[item.type];

            return (
              <div key={item.type} className="library-hero__catalog-row">
                <div className="library-hero__catalog-label">
                  <Icon />
                  <span>{resourceTypeLabels[item.type]}</span>
                </div>
                <strong>{item.count}</strong>
              </div>
            );
          })}
        </div>
        <p>
          Curadoria pensada para consulta recorrente, nao para consumo rapido.
        </p>
      </aside>
    </section>
  );
}
