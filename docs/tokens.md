# Tokens

## Visão geral

Os tokens centrais vivem em `:root` dentro de [styles.css](/home/adriel/documents/code-craft/styles.css). Eles definem a base visual do projeto e devem ser reaproveitados antes da criação de qualquer novo valor.

## Princípios visuais

- fundo escuro quente, evitando preto puro
- destaque dourado desaturado
- superfícies densas com bordas finas
- textura e profundidade discretas
- leitura como prioridade visual

## Cores

| Token | Valor | Uso |
| --- | --- | --- |
| `--bg` | `#120f0d` | fundo base mais denso |
| `--bg-soft` | `#191513` | superfícies escuras secundárias |
| `--panel` | `rgba(29, 23, 19, 0.88)` | painéis translúcidos |
| `--panel-strong` | `rgba(20, 16, 14, 0.95)` | superfícies mais opacas |
| `--line` | `rgba(215, 194, 161, 0.24)` | bordas e divisórias sutis |
| `--line-strong` | `rgba(215, 194, 161, 0.5)` | hover, foco e ênfase de borda |
| `--text` | `#f1e7d5` | texto principal |
| `--text-soft` | `#c7baa4` | texto secundário |
| `--accent` | `#d6b680` | destaque principal |
| `--accent-deep` | `#7f6842` | variação profunda do destaque |

## Sombra e elevação

| Token | Valor | Uso |
| --- | --- | --- |
| `--shadow` | `0 24px 70px rgba(0, 0, 0, 0.35)` | elevação do container principal |

## Imagem editorial

| Token | Valor | Uso |
| --- | --- | --- |
| `--hero-image` | overlay escuro + imagem local | background do hero e do header |

Referência:

- [assets/gustave-dore-illustration.jpg](/home/adriel/documents/code-craft/assets/gustave-dore-illustration.jpg)

## Tipografia

### Famílias

- `Cormorant Garamond`: títulos, citações, chamadas editoriais
- `Manrope`: corpo, metadados, navegação e interface

### Hierarquia principal

| Papel | Seletor | Escala |
| --- | --- | --- |
| display principal | `.hero h1` | `clamp(3rem, 7vw, 5.6rem)` |
| título de artigo | `.article-hero h1` | `clamp(2.8rem, 6vw, 4.8rem)` |
| seção editorial | `.manifesto-card h2`, `.section-heading h2` | `clamp(2rem, 4vw, 3rem)` |
| heading de conteúdo | `.article-body h2` | `2.4rem` |
| subheading de conteúdo | `.article-body h3` | `1.8rem` |
| utility label | `.eyebrow`, `.section-kicker`, `.post-card__tag` | `0.78rem` |

### Regras tipográficas

- títulos usam serifada com alta presença editorial
- corpo e UI usam sans-serif para clareza operacional
- labels usam uppercase e tracking alto
- evitar misturar muitos pesos ou famílias novas

## Espaçamento

### Larguras

| Elemento | Regra |
| --- | --- |
| container principal | `width: 100%` com `min-height: 100vh` |
| gutter padrão | `clamp(20px, 4vw, 56px)` |
| gutter expandido | `clamp(20px, 5vw, 72px)` |
| corpo do artigo | `max-width: 760px` |
| hero de artigo | `max-width: 960px` |

### Escala prática

- `12px`: separação curta entre label e bloco
- `18px` a `24px`: grupos internos e metadata
- `28px` a `36px`: padding de cards e painéis
- `clamp(20px, 4vw, 56px)`: gutter responsivo padrão
- `42px`: respiro entre seções de artigo

## Superfícies

### Fundo global

Composição:

- gradiente radial quente
- gradiente vertical escuro
- grade sutil em `body::before`
- moldura externa em `body::after`

### Painéis

Usam:

- gradiente escuro
- borda fina
- moldura interna com pseudo-elemento

Seletores-base:

- `.manifesto-card`
- `.quote-card`
- `.post-card`
- `.rail-card`
- `.article-pagination a`

## Ornamentação

### Header

`.site-header::before` e `.site-header::after` criam uma leitura de colunas laterais e estrutura arquitetônica.

### Hero

`.hero__ornament` combina filetes, linhas e marcações verticais para sugerir capitéis e molduras clássicas.

### Regras

- ornamentos são lineares e discretos
- sem multicolorido
- sem ilustrações infantis
- devem recuar visualmente diante do conteúdo

## Motion

O sistema usa movimento contido:

- hover/focus em links
- hover/focus em cards
- transições curtas
- scroll suave

## Responsividade

### Até `980px`

- hero colapsa para uma coluna
- grids principais colapsam
- ornamentos laterais do hero desaparecem

### Até `720px`

- padding horizontal cai para `20px`
- header entra em fluxo vertical
- molduras laterais decorativas do header desaparecem

## Regras de evolução

1. Reusar tokens existentes primeiro.
2. Não introduzir cores saturadas fora da família do projeto.
3. Preservar a dupla serifada + sans.
4. Manter contraste alto e largura controlada para leitura.
5. Qualquer novo token deve nascer de uma necessidade recorrente, não pontual.
