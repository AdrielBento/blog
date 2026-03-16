import { useMemo, useState } from "react";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import { ArrowLeft, LibraryBig, ScrollText, Sparkles } from "lucide-react";
import { posts, postsBySlug } from "./postsData";

const categories = ["all", "Arquitetura", "Craftsmanship", "IA"];

function SiteHeaderNav() {
  return (
    <div className="site-header__bar">
      <Link className="brand" to="/">
        <span className="brand__mark">A</span>
        <span className="brand__text">
          <strong>Atelier do Código</strong>
          <span>engenharia, craft e IA</span>
        </span>
      </Link>
      <nav className="top-nav" aria-label="Main navigation">
        <a href="#artigos">Articles</a>
        <a href="#manifesto">Manifesto</a>
      </nav>
    </div>
  );
}

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredPosts = useMemo(
    () =>
      selectedCategory === "all"
        ? posts
        : posts.filter((post) => post.category === selectedCategory),
    [selectedCategory],
  );

  return (
    <div className="page-shell">
      <header className="site-header">
        <SiteHeaderNav />
        <section className="hero">
          <div className="hero__ornament hero__ornament--left" aria-hidden="true"></div>
          <div className="hero__content">
            <p className="eyebrow">Caderno editorial para equipes que constroem com rigor</p>
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
      </header>

      <main>
        <section className="intro-grid" id="manifesto">
          <article className="manifesto-card">
            <p className="section-kicker">Manifesto editorial</p>
            <h2>Escrever software continua sendo um trabalho de julgamento.</h2>
            <p>
              Ferramentas mudam, frameworks evaporam e modelos generativos
              aceleram a superfície do trabalho. Ainda assim, a diferença entre
              código apenas funcional e software durável segue dependendo de
              leitura atenta, decisões reversíveis e arquitetura com intenção.
            </p>
          </article>
          <aside className="quote-card">
            <p className="section-kicker">Marginalia</p>
            <blockquote>
              A pressa produz volume. O ofício produz clareza, coerência e espaço
              para manutenção futura.
            </blockquote>
          </aside>
        </section>

        <section className="posts-section" id="artigos">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Arquivo</p>
              <h2>Leituras recentes</h2>
            </div>
            <div className="filter-group" aria-label="Filtrar artigos">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-chip${selectedCategory === category ? " is-active" : ""}`}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all" ? "Todos" : category}
                </button>
              ))}
            </div>
          </div>

          <div className="posts-grid">
            {filteredPosts.map((post) => (
              <Link className="post-card" to={`/posts/${post.slug}`} key={post.slug}>
                <p className="post-card__tag">{post.category}</p>
                <h3>{post.title}</h3>
                <p className="post-card__excerpt">{post.excerpt}</p>
                <div className="post-card__meta">
                  <span>{post.date}</span>
                  <span>{post.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Atelier do Código. Editorial para engenharia de software, craft e IA.</p>
        <p>Ilustração de cabeçalho baseada em gravura de Gustave Doré, em domínio público.</p>
      </footer>
    </div>
  );
}

function PostPage() {
  const { slug } = useParams();
  const post = slug ? postsBySlug[slug] : null;

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = posts.findIndex((item) => item.slug === post.slug);
  const nextPost = posts[currentIndex + 1] ?? null;

  return (
    <div className="page-shell">
      <header className="site-header site-header--article">
        <SiteHeaderNav />
        <section className="article-hero">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="article-hero__subtitle">{post.subtitle}</p>
          <div className="article-hero__meta">
            <span>por {post.author}</span>
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
          </div>
        </section>
      </header>

      <main className="article-layout">
        <aside className="article-rail">
          <Link className="back-link" to="/">
            <ArrowLeft />
            Voltar ao arquivo
          </Link>
          <div className="rail-card">
            <p className="section-kicker">Foco</p>
            <p>{post.excerpt}</p>
          </div>
        </aside>

        <article className="article-body">{post.body}</article>
      </main>

      <nav className="article-pagination" aria-label="Próximo artigo">
        {nextPost ? (
          <Link to={`/posts/${nextPost.slug}`}>
            <span className="section-kicker">Próxima leitura</span>
            <strong>{nextPost.title}</strong>
          </Link>
        ) : (
          <Link to="/">
            <span className="section-kicker">Retornar</span>
            <strong>Explorar o arquivo completo</strong>
          </Link>
        )}
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/:slug" element={<PostPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
