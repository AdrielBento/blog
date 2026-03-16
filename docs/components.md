# Components

## Visão geral

Os componentes do projeto seguem uma lógica editorial: blocos densos, boa hierarquia, ornamentos sutis e comportamento previsível. A nomenclatura usa padrão próximo de BEM.

## Convenções de naming

Blocos e elementos:

- `.site-header`
- `.site-header__bar`
- `.hero__content`
- `.post-card__meta`

Modificadores e estados:

- `.site-header--article`
- `.filter-chip.is-active`
- `.is-hidden`

## Header global

Referências:

- [index.html](/home/adriel/documents/code-craft/index.html)
- [posts/arquitetura-do-julgamento.html](/home/adriel/documents/code-craft/posts/arquitetura-do-julgamento.html)

Estrutura:

- `.brand`
- `.brand__mark`
- `.brand__text`
- `.top-nav`

Responsabilidade:

- assinatura do produto
- consistência entre páginas
- navegação curta e orientada ao editorial

## Hero da home

Componentes:

- `.hero`
- `.hero__content`
- `.hero__ornament`
- `.hero__meta`

Conteúdo esperado:

- eyebrow
- título principal
- lede
- metadata com ícones

Regras:

- a imagem é sempre background
- o título é o principal eixo visual
- os ornamentos não devem competir com o texto

## Manifesto card

Componente:

- `.manifesto-card`

Função:

- abrir o conteúdo da home com posicionamento editorial

## Quote card

Componente:

- `.quote-card`

Função:

- pausa visual
- reforço de tom contemplativo

## Section heading

Componente:

- `.section-heading`

Função:

- organizar a entrada da listagem
- alinhar heading e ações de filtro

## Filter chips

Componente:

- `.filter-chip`

Comportamento:

- default com fundo transparente
- ativo com `--accent`
- filtragem client-side via [script.js](/home/adriel/documents/code-craft/script.js)

Regras:

- labels curtos
- sempre legíveis
- sem motion exagerado

## Post card

Componente:

- `.post-card`

Subpartes:

- `.post-card__tag`
- `.post-card__excerpt`
- `.post-card__meta`

Conteúdo mínimo:

- categoria
- título
- resumo
- data
- tempo de leitura

Estados:

- default
- hover/focus com elevação
- oculto com `.is-hidden`

## Hero de artigo

Componente:

- `.article-hero`
- `.article-hero__subtitle`
- `.article-hero__meta`

Conteúdo:

- categoria
- título
- subtítulo
- autor
- data
- tempo de leitura

## Layout de artigo

Componente:

- `.article-layout`

Estrutura:

- rail lateral fixa no fluxo do layout
- corpo principal com largura máxima controlada

## Rail lateral

Componentes:

- `.article-rail`
- `.back-link`
- `.rail-card`

Função:

- navegação de retorno
- apoio contextual
- reforço de foco do artigo

## Corpo do artigo

Componente:

- `.article-body`

Elementos previstos:

- parágrafos
- `h2`
- `h3`
- `blockquote`
- `ul`

Regras:

- largura máxima de leitura
- espaçamento vertical generoso
- blockquote com destaque sem quebrar a sobriedade

## Paginação editorial

Componente:

- `.article-pagination`

Função:

- continuidade entre leituras
- fechamento editorial do texto

## Footer

Componente:

- `.site-footer`

Função:

- assinatura de produto
- crédito contextual da imagem principal

## Ícones

Biblioteca:

- Lucide via CDN

Uso atual:

- `scroll-text`
- `library-big`
- `sparkles`
- `arrow-left`

Regras:

- traço simples
- baixo volume
- suporte ao texto, não substituição

## Interações

### Implementadas

- hover/focus em navegação
- hover/focus em cards
- alternância de estado em chips

### Regras futuras

1. Toda nova interação precisa ter benefício funcional claro.
2. Animação deve ser curta e sóbria.
3. Foco visível não pode ser removido.
4. Ornamento nunca deve parecer componente clicável.

## Responsividade por componente

### Header e hero

- navegação colapsa verticalmente em telas menores
- ornamentos do hero desaparecem em larguras reduzidas

### Grids

- `.intro-grid`
- `.posts-grid`
- `.article-layout`

Todos colapsam para uma coluna em telas menores.

### Cards

- padding reduzido no mobile
- metadata entra em fluxo vertical quando necessário

## Checklist para novos componentes

1. Reusa tokens existentes?
2. Mantém o clima dark academia?
3. Preserva legibilidade em mobile?
4. Tem contraste suficiente?
5. Respeita o padrão de borda, superfície e hierarquia?
6. Não introduz visual lúdico ou genérico de dashboard?
