export default function ResourceMetaStrip({ resource }) {
  const meta = [resource.creator];

  if (resource.year) {
    meta.push(resource.year);
  }

  if (resource.readingTime) {
    meta.push(resource.readingTime);
  }

  if (resource.duration) {
    meta.push(resource.duration);
  }

  return (
    <div className="resource-card__meta">
      {meta.map((item) => (
        <span key={`${resource.id}-${item}`}>{item}</span>
      ))}
    </div>
  );
}
