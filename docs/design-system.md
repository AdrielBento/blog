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

- [src/styles/app.css](/home/adriel/documents/code-craft/src/styles/app.css)
- [src/styles/tailwind.css](/home/adriel/documents/code-craft/src/styles/tailwind.css)
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

## Stack de estilos

- Tailwind CSS v4 está instalado via plugin oficial do Vite.
- O entrypoint de estilos do app é [src/styles/app.css](/home/adriel/documents/code-craft/src/styles/app.css), com ordem:
1. Tailwind (`theme.css` + `utilities.css`)
2. camadas semânticas atuais (`tokens`, `base`, `layout`, `components`, `prose`, `utilities`)
- Preflight do Tailwind está desabilitado nesta fase para evitar regressões no layout editorial.
- As cores e temas continuam canônicos em CSS variables (`:root` e `:root[data-theme="light"]`).

## Política de autoria

- Estratégia atual: classes semânticas + Tailwind `@apply` gradual.
- Não migrar componentes em massa para utilitários inline.
- Primeiro alvo de adoção: elementos de baixo risco visual (navegação, filtros, toggle).
- Hero, tipografia de artigo, code highlight e Mermaid permanecem sob as camadas semânticas existentes.

## Roadmap Tailwind

1. Base instalada (concluída)
- plugin Vite ativo, entrypoint `app.css`, Preflight desabilitado.
- convivência entre Tailwind utilities e camadas semânticas estabilizada.

2. Migração completa de `components.css` (onda atual)
- converter regras elegíveis de layout/spacing/typography para `@apply`.
- preservar identidade visual, tokens semânticos e seletores existentes.
- evitar mudanças de markup React e evitar redesign.

3. Revisão de Preflight (executada em 16 de março de 2026)
- avaliação feita após estabilização da onda de `components.css`.
- decisão tomada com base em regressões reais e custo de overrides globais.
- status atual: Preflight segue desabilitado.

## Critérios de autoria

- Usar classe semântica + `@apply` quando houver:
- reutilização em múltiplos componentes;
- estado/variante mais complexo;
- importância de linguagem visual do design system.
- Usar utility inline no JSX apenas para ajuste local, único e sem impacto de tema.
- Não usar utility inline para identidade visual central:
- hero e ornamentos;
- cards editoriais;
- tipografia/prosa de artigo e bloco MDX.

## Gate para Preflight

- Pré-condição: `components.css` estabilizado sem regressões relevantes.
- Checklist de validação:
- smoke visual completo em home e post;
- desktop e mobile;
- dark e light mode;
- sem quebra de hierarquia tipográfica e ritmo editorial.
- Critério de aprovação:
- habilitar Preflight apenas se não exigir volume alto de overrides globais.

## Revisão de Preflight (16 de março de 2026)

Resultado do experimento com Preflight temporariamente habilitado:

- regressão em tipografia de artigo: margens de `p` e `h2` zeradas em runtime;
- regressão em listas do conteúdo MDX: `list-style: none` e `padding-left: 0`;
- impacto direto no ritmo editorial e na legibilidade.

Decisão:

- manter Preflight desabilitado;
- preservar reset/base custom já existente nas camadas semânticas;
- reavaliar somente se houver estratégia explícita de overrides globais para conteúdo editorial.

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
