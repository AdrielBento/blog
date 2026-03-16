import { LibraryBig, ScrollText, Sparkles } from "lucide-react";
import Kicker from "../atoms/Kicker";

export default function HomeHero() {
  return (
    <section className="hero">
      <div className="hero__ornament hero__ornament--left" aria-hidden="true"></div>
      <div className="hero__content">
        <Kicker className="eyebrow">Caderno editorial para equipes que constroem com rigor</Kicker>
        <h1>Onde arquitetura, ofício e modelos convivem sob a mesma lâmpada.</h1>
        <p className="hero__lede">
          Ensaios sobre disciplina técnica, qualidade deliberada e o impacto
          operacional da inteligência artificial em produtos reais.
        </p>
        <div className="hero__meta">
          <span>
            <ScrollText />
            longform técnico
          </span>
          <span>
            <LibraryBig />
            software craftsmanship
          </span>
          <span>
            <Sparkles />
            IA aplicada com método
          </span>
        </div>
      </div>
      <div className="hero__ornament hero__ornament--right" aria-hidden="true"></div>
    </section>
  );
}
