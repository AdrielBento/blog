import { useEffect, useRef, useState } from "react";
import Kicker from "../atoms/Kicker";
import BackToArchiveLink from "../molecules/BackToArchiveLink";

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function ArticleContent({ post }) {
  const Content = post.Content;
  const articleRef = useRef(null);
  const [tocItems, setTocItems] = useState([]);
  const [activeHeadingId, setActiveHeadingId] = useState(null);

  useEffect(() => {
    const articleElement = articleRef.current;
    if (!articleElement) {
      setTocItems([]);
      setActiveHeadingId(null);
      return;
    }

    const headings = Array.from(articleElement.querySelectorAll("h2, h3"));
    const usedIds = new Set();

    const items = headings.map((heading, index) => {
      const level = Number(heading.tagName.replace("H", ""));
      const text = (heading.textContent ?? "").trim();
      const fallback = `secao-${index + 1}`;
      const baseId = heading.id?.trim() || slugifyHeading(text) || fallback;

      let resolvedId = baseId;
      let suffix = 2;
      while (usedIds.has(resolvedId)) {
        resolvedId = `${baseId}-${suffix}`;
        suffix += 1;
      }
      usedIds.add(resolvedId);

      heading.id = resolvedId;

      return {
        id: resolvedId,
        text: text || fallback,
        level,
      };
    });

    setTocItems(items);
    setActiveHeadingId(items[0]?.id ?? null);
  }, [post.slug]);

  useEffect(() => {
    if (tocItems.length < 2) {
      return undefined;
    }

    const articleElement = articleRef.current;
    if (!articleElement) {
      return undefined;
    }

    const headingElements = tocItems
      .map((item) => articleElement.querySelector(`#${CSS.escape(item.id)}`))
      .filter(Boolean);

    if (!headingElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (intersecting[0]?.target.id) {
          setActiveHeadingId(intersecting[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.4, 1],
      },
    );

    for (const headingElement of headingElements) {
      observer.observe(headingElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [tocItems]);

  const hasToc = tocItems.length >= 2;

  return (
    <main className="article-layout">
      <aside className="article-rail">
        <BackToArchiveLink />
        <div className="rail-card">
          <Kicker>Foco</Kicker>
          <p>{post.excerpt}</p>
        </div>
        {hasToc ? (
          <nav className="article-toc article-toc--desktop" aria-label="Nesta página">
            <p className="article-toc__title">Sections</p>
            <ul className="article-toc__list">
              {tocItems.map((item) => (
                <li key={item.id} className={item.level === 3 ? "is-child" : undefined}>
                  <a
                    href={`#${item.id}`}
                    className={`article-toc__link ${item.id === activeHeadingId ? "is-active" : ""}`.trim()}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </aside>

      <div className="article-main">
        {hasToc ? (
          <nav className="article-toc article-toc--mobile" aria-label="Nesta página">
            <details>
              <summary>Nesta página</summary>
              <ul className="article-toc__list">
                {tocItems.map((item) => (
                  <li key={item.id} className={item.level === 3 ? "is-child" : undefined}>
                    <a
                      href={`#${item.id}`}
                      className={`article-toc__link ${item.id === activeHeadingId ? "is-active" : ""}`.trim()}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </nav>
        ) : null}

        <article ref={articleRef} className="article-body">
          <Content />
        </article>
      </div>
    </main>
  );
}
