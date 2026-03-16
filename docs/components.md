# Components

## Visão geral

O projeto usa React com organização Atomic Design e mantém classes semânticas como contrato principal de UI.  
O estilo é aplicado por camadas (`tokens`, `base`, `layout`, `components`, `prose`, `utilities`) com Tailwind v4 como suporte para utilitários e `@apply`.

## Referências de implementação

- [src/components/templates/HomeTemplate.jsx](/home/adriel/documents/code-craft/src/components/templates/HomeTemplate.jsx)
- [src/components/templates/PostTemplate.jsx](/home/adriel/documents/code-craft/src/components/templates/PostTemplate.jsx)
- [src/styles/components.css](/home/adriel/documents/code-craft/src/styles/components.css)
- [src/styles/prose.css](/home/adriel/documents/code-craft/src/styles/prose.css)

## Convenções de naming

Blocos e elementos:

- `.site-header`
- `.site-header__bar`
- `.hero__content`
- `.post-card__meta`

Modificadores e estados:

- `.site-header--article`
- `.filter-chip.is-active`
- `.filter-chip[data-state="on"]`

## Header e navegação

Principais componentes:

- `.brand`, `.brand__mark`, `.brand__text`
- `.top-nav`, `.top-nav__list`
- `.theme-toggle`

Função:

- assinatura visual do produto
- navegação curta entre seções
- troca de tema dark/light persistida

## Home editorial

Principais componentes:

- `.hero`, `.hero__content`, `.hero__ornament`, `.hero__meta`
- `.manifesto-card`
- `.quote-card`
- `.section-heading`
- `.filter-group`, `.filter-chip`
- `.posts-grid`, `.post-card`

Função:

- estabelecer narrativa editorial
- orientar descoberta de posts por categoria
- manter ritmo visual e legibilidade

## Página de artigo

Principais componentes:

- `.article-hero`, `.article-hero__subtitle`, `.article-hero__meta`
- `.article-layout`, `.article-rail`, `.rail-card`
- `.back-link`
- `.article-body`
- `.article-pagination`

Função:

- reforçar contexto de leitura
- controlar largura e hierarquia tipográfica
- oferecer continuidade com próxima leitura

## Conteúdo MDX

A prosa e elementos de conteúdo são tratados em `prose.css`:

- `h2`, `h3`, parágrafos e listas
- `blockquote`
- code blocks (`rehype-pretty-code`)
- Mermaid

Regras:

- largura de leitura controlada
- contraste preservado nos dois temas
- componentes de conteúdo não devem romper a linguagem editorial

## Ícones

Biblioteca usada:

- `lucide-react`

Regras:

- ícone sempre como suporte ao texto
- evitar excesso de ícones na mesma área
- manter traço e tamanho consistentes

## Interações

Implementadas:

- hover/focus em navegação e links
- hover/focus em cards editoriais
- estado ativo de filtros por categoria
- toggle de tema

Diretrizes:

1. Toda interação deve ter objetivo funcional.
2. Animações devem ser curtas e discretas.
3. Foco visível não pode ser removido.

## Responsividade

Padrões principais:

- `<= 980px`: grids colapsam para coluna única e hero simplifica ornamentos.
- `<= 720px`: header passa a fluxo vertical e espaçamentos são reduzidos.

Objetivo:

- preservar leitura e hierarquia visual em desktop e mobile.

## Regras de autoria de estilo

- Padrão: classe semântica + `@apply`.
- Utility inline no JSX: apenas ajuste local, único e sem impacto de tema.
- Não usar utility inline para identidade visual central:
- hero e ornamentos
- cards editoriais
- prosa de artigo/MDX

## Checklist para novos componentes

1. Reusa tokens semânticos existentes?
2. Mantém dark academia e legibilidade?
3. Funciona em dark e light mode?
4. Responde bem em mobile?
5. Respeita padrão de superfície/borda/hierarquia?
