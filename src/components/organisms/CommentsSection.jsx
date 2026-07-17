import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../lib/theme";

function resolveGiscusTheme(theme) {
  return theme === "light" ? "gruvbox" : "gruvbox_dark";
}

export default function CommentsSection({ postSlug, postTitle }) {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  const repo = import.meta.env.VITE_GISCUS_REPO?.trim() ?? "";
  const repoId = import.meta.env.VITE_GISCUS_REPO_ID?.trim() ?? "";
  const category = import.meta.env.VITE_GISCUS_CATEGORY?.trim() ?? "";
  const categoryId = import.meta.env.VITE_GISCUS_CATEGORY_ID?.trim() ?? "";
  const mapping = import.meta.env.VITE_GISCUS_MAPPING?.trim() || "pathname";
  const language = import.meta.env.VITE_GISCUS_LANG?.trim() || "pt-BR";
  const isDev = import.meta.env.DEV;

  const isConfigured = Boolean(repo && repoId && category && categoryId);
  const discussionsUrl = repo ? `https://github.com/${repo}/discussions` : null;
  const giscusTheme = resolveGiscusTheme(theme);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isConfigured) {
      return undefined;
    }

    setHasError(false);
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.setAttribute("data-repo", repo);
    script.setAttribute("data-repo-id", repoId);
    script.setAttribute("data-category", category);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", mapping);
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", giscusTheme);
    script.setAttribute("data-lang", language);
    script.setAttribute("data-loading", "lazy");

    if (mapping === "specific") {
      script.setAttribute("data-term", postSlug);
    } else if (mapping === "title") {
      script.setAttribute("data-term", postTitle);
    }

    script.addEventListener("error", () => {
      setHasError(true);
    });

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [
    category,
    categoryId,
    isConfigured,
    language,
    mapping,
    postSlug,
    postTitle,
    repo,
    repoId,
  ]);

  useEffect(() => {
    if (!isConfigured) {
      return;
    }

    const iframe = containerRef.current?.querySelector("iframe.giscus-frame");
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: giscusTheme } } },
      "https://giscus.app",
    );
  }, [giscusTheme, isConfigured]);

  if (!isConfigured && !isDev) {
    return null;
  }

  return (
    <section className="comments-section" aria-label="Comentários">
      <div className="comments-section__panel">
        <header className="comments-section__head">
          <h2>Discussão</h2>
          <p>Comentários via GitHub Discussions (Giscus).</p>
        </header>

        {!isConfigured ? (
          <p className="comments-section__status">
            Giscus não configurado. Defina as variáveis `VITE_GISCUS_*` para
            habilitar comentários.
          </p>
        ) : null}

        {hasError && discussionsUrl ? (
          <p className="comments-section__status">
            Não foi possível carregar o widget.{" "}
            <a href={discussionsUrl} target="_blank" rel="noreferrer">
              Abrir Discussões no GitHub
            </a>
            .
          </p>
        ) : null}

        {isConfigured ? <div ref={containerRef} className="comments-section__embed" /> : null}
      </div>
    </section>
  );
}
