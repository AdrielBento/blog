import {
  ArrowUpRight,
  BookOpenText,
  FlaskConical,
  MonitorPlay,
  ScrollText,
} from "lucide-react";
import ResourceMetaStrip from "./ResourceMetaStrip";
import { resourceTypeLabels } from "../../lib/libraryResources";

const typeIconMap = {
  book: BookOpenText,
  article: ScrollText,
  video: MonitorPlay,
  paper: FlaskConical,
};

export default function ResourceCard({ resource }) {
  const TypeIcon = typeIconMap[resource.type];

  return (
    <a
      className={`resource-card${resource.featured ? " resource-card--featured" : ""}`}
      href={resource.href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="resource-card__media">
        <img src={resource.image} alt={resource.imageAlt} loading="lazy" />
        <div className="resource-card__badges">
          <span className="resource-card__badge">
            <TypeIcon />
            {resourceTypeLabels[resource.type]}
          </span>
          <span className="resource-card__source">{resource.sourceLabel}</span>
        </div>
      </div>

      <div className="resource-card__body">
        <p className="resource-card__theme">{resource.theme}</p>
        <h3>{resource.title}</h3>
        <p className="resource-card__summary">{resource.summary}</p>
        <ResourceMetaStrip resource={resource} />
        <span className="resource-card__cta">
          abrir recurso
          <ArrowUpRight />
        </span>
      </div>
    </a>
  );
}
