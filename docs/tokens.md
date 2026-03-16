# Tokens

## Visão geral

A fonte da verdade de tokens está em [src/styles/tokens.css](/home/adriel/documents/code-craft/src/styles/tokens.css).  
O projeto agora possui dois temas oficiais:

- `:root` para `dark` (default)
- `:root[data-theme="light"]` para `light`

O tema é controlado por `data-theme` no elemento `html`.

## Integração com Tailwind

- Tailwind v4 foi adicionado para utilitários e `@apply`.
- O Tailwind não é a fonte da paleta: os tokens continuam definidos em [src/styles/tokens.css](/home/adriel/documents/code-craft/src/styles/tokens.css).
- Utilities e `@apply` devem sempre consumir variáveis semânticas (`var(--*)`) para manter dark/light consistentes.

## Modelo de tema

1. Tokens semânticos (`--text`, `--line`, `--panel`, etc.) não devem ser usados com valores hardcoded nos componentes.
2. Todo novo token de cor precisa existir em dark e light.
3. Componentes devem consumir apenas tokens semânticos, nunca hex/rgba direto.

## Paleta semântica base

| Token | Dark | Light | Uso |
| --- | --- | --- | --- |
| `--bg` | `#120f0d` | `#f7f1e4` | fundo base |
| `--bg-soft` | `#191513` | `#ece1cf` | fundo secundário |
| `--text` | `#f1e7d5` | `#2e2418` | texto principal |
| `--text-soft` | `#c7baa4` | `#5a4a35` | texto secundário |
| `--accent` | `#d6b680` | `#8b6938` | destaque |
| `--accent-deep` | `#7f6842` | `#5b4321` | variação de destaque |
| `--line` | `rgba(215, 194, 161, 0.24)` | `rgba(133, 98, 53, 0.24)` | bordas sutis |
| `--line-strong` | `rgba(215, 194, 161, 0.5)` | `rgba(133, 98, 53, 0.5)` | hover/focus |
| `--panel` | `rgba(29, 23, 19, 0.88)` | `rgba(255, 250, 241, 0.9)` | painéis translúcidos |
| `--panel-strong` | `rgba(20, 16, 14, 0.95)` | `rgba(245, 236, 222, 0.94)` | painéis opacos |

## Tokens de superfície e layout

| Grupo | Tokens |
| --- | --- |
| Fundo global | `--page-radial`, `--page-grad-start`, `--page-grad-mid`, `--page-grad-end`, `--grid-line` |
| Shell | `--shell-border`, `--shell-bg-start`, `--shell-bg-end` |
| Header/Hero | `--hero-image`, `--header-overlay-*`, `--header-column-border` |
| Ornamentação | `--ornament-*`, `--hero-ornament-*` |
| Cards | `--card-bg-start`, `--card-bg-end`, `--card-inner-border`, `--card-hover-shadow` |

## Tokens de conteúdo MDX

| Grupo | Tokens |
| --- | --- |
| Blockquote | `--blockquote-bg` |
| Inline code | `--inline-code-border`, `--inline-code-bg` |
| Code block | `--code-block-border`, `--code-block-bg`, `--code-title-border`, `--code-title-bg` |
| Highlight | `--code-line-highlight`, `--code-line-border`, `--code-char-highlight` |
| Mermaid | `--mermaid-bg`, `--mermaid-border` |

## Tipografia

- `Cormorant Garamond`: títulos e elementos editoriais.
- `Manrope`: corpo e elementos de interface.
- Escalas continuam definidas em `components.css` e `prose.css`, sem divergência entre temas.

## Espaçamento e largura

| Token | Valor |
| --- | --- |
| `--gutter` | `clamp(20px, 4vw, 56px)` |
| `--gutter-wide` | `clamp(20px, 5vw, 72px)` |
| `--reading-width` | `760px` |
| `--hero-width` | `880px` |

## Regras de evolução

1. Novos tokens devem nascer em [src/styles/tokens.css](/home/adriel/documents/code-craft/src/styles/tokens.css).
2. Cada token novo precisa de variante dark e light.
3. Não adicionar cor direta em `components.css`, `layout.css` ou `prose.css`.
4. Preferir token semântico (`--card-*`, `--code-*`) em vez de token específico de componente.
