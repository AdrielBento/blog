import Kicker from "../atoms/Kicker";

export default function ManifestoSection() {
  return (
    <section className="intro-grid" id="manifesto">
      <article className="manifesto-card">
        <Kicker>Manifesto editorial</Kicker>
        <h2>Escrever software continua sendo um trabalho de julgamento.</h2>
        <p>
          Ferramentas mudam, frameworks evaporam e modelos generativos aceleram a
          superfície do trabalho. Ainda assim, a diferença entre código apenas
          funcional e software durável segue dependendo de leitura atenta, decisões
          reversíveis e arquitetura com intenção.
        </p>
      </article>
      <aside className="quote-card">
        <Kicker>Marginalia</Kicker>
        <blockquote>
          A pressa produz volume. O ofício produz clareza, coerência e espaço para
          manutenção futura.
        </blockquote>
      </aside>
    </section>
  );
}
