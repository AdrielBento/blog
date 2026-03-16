# Design System

Este diretório passa a concentrar a documentação do design system em partes menores e uma referência visual navegável.

## Índice

### Documentação textual

- [tokens.md](/home/adriel/documents/code-craft/docs/tokens.md)
- [components.md](/home/adriel/documents/code-craft/docs/components.md)
- [content-guidelines.md](/home/adriel/documents/code-craft/docs/content-guidelines.md)

### Referência visual

- [style-guide.html](/home/adriel/documents/code-craft/docs/style-guide.html)

## Escopo

O design system do projeto cobre:

- direção estética dark academia
- referências visuais inspiradas em Gustave Doré
- tokens de cor, tipografia, sombra e superfícies (dark e light)
- componentes editoriais da home e das páginas de artigo
- regras de responsividade, acessibilidade e consistência
- diretrizes de linguagem editorial
- padrões de conteúdo MDX (prosa, código e Mermaid)

## Fonte da verdade

A implementação continua concentrada principalmente em:

- [src/styles/tokens.css](/home/adriel/documents/code-craft/src/styles/tokens.css)
- [src/styles/base.css](/home/adriel/documents/code-craft/src/styles/base.css)
- [src/styles/layout.css](/home/adriel/documents/code-craft/src/styles/layout.css)
- [src/styles/components.css](/home/adriel/documents/code-craft/src/styles/components.css)
- [src/styles/prose.css](/home/adriel/documents/code-craft/src/styles/prose.css)
- [src/lib/theme.jsx](/home/adriel/documents/code-craft/src/lib/theme.jsx)
- [src/components/molecules/ThemeToggle.jsx](/home/adriel/documents/code-craft/src/components/molecules/ThemeToggle.jsx)
- [index.html](/home/adriel/documents/code-craft/index.html)
- [src/components/templates/HomeTemplate.jsx](/home/adriel/documents/code-craft/src/components/templates/HomeTemplate.jsx)
- [src/components/templates/PostTemplate.jsx](/home/adriel/documents/code-craft/src/components/templates/PostTemplate.jsx)

## Uso recomendado

1. Consulte [tokens.md](/home/adriel/documents/code-craft/docs/tokens.md) antes de criar novos estilos.
2. Consulte [components.md](/home/adriel/documents/code-craft/docs/components.md) antes de introduzir novos blocos de UI.
3. Consulte [content-guidelines.md](/home/adriel/documents/code-craft/docs/content-guidelines.md) ao escrever ou revisar conteúdo editorial.
4. Use [style-guide.html](/home/adriel/documents/code-craft/docs/style-guide.html) para inspeção visual rápida dos padrões.

## Theming

- O tema default é `dark`; o tema alternativo é `light`.
- O estado do tema é persistido em `localStorage` (`atelier-theme`).
- O atributo `html[data-theme]` controla a troca de tokens.
- O toggle de tema está no header e fica disponível na home e na página de post.
- `color-scheme` é atualizado em runtime para alinhar controles nativos do browser.
