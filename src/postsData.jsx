export const posts = [
  {
    slug: "arquitetura-do-julgamento",
    category: "Arquitetura",
    title: "A arquitetura do julgamento técnico",
    subtitle:
      "Sistemas duráveis não surgem de decisões grandiosas, mas da disciplina de escolher o que merece complexidade.",
    excerpt:
      "Como equipes maduras usam restrições, documentação curta e decisões reversíveis para evitar sistemas vistosos e frágeis.",
    date: "2 de março de 2026",
    readingTime: "8 min de leitura",
    author: "Helena Varella",
    body: (
      <>
        <p className="article-intro">
          Há times que confundem arquitetura com ornamentação. Acumulam camadas,
          padrões e abstrações como quem protege o sistema de um futuro
          hipotético. O resultado, em geral, é um software que impressiona na
          apresentação e falha na fricção cotidiana.
        </p>

        <h2>Complexidade é um orçamento, não uma virtude</h2>
        <p>
          Toda decisão arquitetural deveria começar com uma pergunta simples: qual
          risco real estamos comprando ao introduzir esta camada? O melhor código
          de infraestrutura que uma equipe pode manter é sempre o mínimo
          necessário para sustentar os fluxos críticos, não o conjunto mais
          elegante de conceitos.
        </p>
        <p>
          Restrições claras ajudam. Um limite explícito de dependências por
          módulo, a exigência de contratos visíveis entre serviços e a recusa a
          abstrações sem caso concreto reduzem o ruído e elevam a qualidade das
          conversas técnicas.
        </p>

        <blockquote>
          Arquitetura madura não exibe poder. Ela reduz a superfície do erro.
        </blockquote>

        <h2>Documentação curta, mas situada</h2>
        <p>
          Diagramas gigantes raramente sobrevivem à terceira sprint. Em vez deles,
          prefira registros de decisão breves, com contexto, escolha, consequências
          e gatilhos de revisão. Esse formato preserva a memória institucional sem
          empurrar o time para uma arqueologia permanente.
        </p>

        <h3>Uma decisão técnica útil costuma registrar:</h3>
        <ul>
          <li>qual problema concreto motivou a mudança;</li>
          <li>quais opções foram descartadas e por quê;</li>
          <li>o que precisa acontecer para revisitar a decisão.</li>
        </ul>

        <h2>Reversibilidade como critério de desenho</h2>
        <p>
          Quando duas soluções parecem equivalentes, escolha a que permite desfazer
          o movimento com menor custo. Esse princípio vale para filas,
          particionamento de serviços, desenho de schema e adoção de IA em
          pipelines internos. A velocidade real de um time depende menos de acertar
          sempre e mais de errar sem trauma.
        </p>

        <h2>O papel da IA no julgamento</h2>
        <p>
          Ferramentas generativas já escrevem trechos plausíveis de código,
          documentação e testes. O ponto decisivo continua sendo o julgamento do
          time: validar se a solução proposta respeita domínio, limites de
          operação, custo de manutenção e segurança. IA acelera produção; não
          substitui discernimento arquitetural.
        </p>
      </>
    ),
  },
  {
    slug: "craftsmanship-interfaces",
    category: "Craftsmanship",
    title: "Interfaces que envelhecem com dignidade",
    subtitle:
      "O frontend mais sofisticado nem sempre é o mais ruidoso. Muitas vezes, ele é apenas o mais legível seis meses depois.",
    excerpt:
      "O cuidado artesanal no frontend aparece menos em efeitos e mais em ritmo, semântica, estados vazios e manutenção serena.",
    date: "27 de fevereiro de 2026",
    readingTime: "6 min de leitura",
    author: "Helena Varella",
    body: (
      <>
        <p className="article-intro">
          Há uma diferença importante entre interface impressionante e interface
          memorável. A primeira costuma depender de volume visual. A segunda
          depende de estrutura, proporção e respeito ao estado mental de quem lê ou
          opera o sistema.
        </p>

        <h2>Ritmo vertical é arquitetura silenciosa</h2>
        <p>
          Um layout editorial competente organiza leitura antes de organizar
          estilo. Isso significa trabalhar o espaço entre títulos, blocos de texto,
          chamadas laterais e transições de seção como parte do sistema, não como
          ajuste tardio. Ritmo vertical consistente reduz fadiga.
        </p>

        <h2>Semântica evita dívidas invisíveis</h2>
        <p>
          Em interfaces maduras, a escolha entre heading, list, aside ou nav não é
          detalhe acadêmico. Ela afeta acessibilidade, manutenção e a forma como o
          produto pode evoluir. O cuidado artesanal aparece justamente nessa camada
          menos exibida.
        </p>

        <blockquote>
          O refinamento de uma interface aparece quando a estrutura continua clara
          mesmo sem os efeitos.
        </blockquote>

        <h2>Estados vazios, loading e transição merecem linguagem própria</h2>
        <p>
          Grande parte da experiência de uso acontece fora do happy path. Uma
          interface que envelhece bem precisa tratar ausência de dados, falhas,
          latência e confirmações como partes do texto editorial do produto.
        </p>

        <h3>Três sinais de cuidado real no frontend:</h3>
        <ul>
          <li>
            o sistema continua legível em telas pequenas sem colapsar hierarquia;
          </li>
          <li>
            os componentes preservam contraste e consistência entre estados;
          </li>
          <li>cada ornamento decorativo serve à composição, não ao ruído.</li>
        </ul>

        <h2>Design editorial para software técnico</h2>
        <p>
          Produtos para engenharia podem ser densos sem parecer áridos. Uma paleta
          sóbria, tipografia consciente e imagem tratada como atmosfera ajudam a
          produzir esse equilíbrio.
        </p>
      </>
    ),
  },
  {
    slug: "modelos-memoria-operacional",
    category: "IA",
    title: "Modelos, memória operacional e responsabilidade",
    subtitle:
      "Assistentes generativos são componentes de sistema. Trate contexto, logs, limites e revisão humana com a mesma seriedade que trataria uma API.",
    excerpt:
      "Um guia para tratar assistentes de IA como componentes de sistema: com contexto explícito, limites claros e observabilidade.",
    date: "19 de fevereiro de 2026",
    readingTime: "9 min de leitura",
    author: "Helena Varella",
    body: (
      <>
        <p className="article-intro">
          Integrar IA em produtos internos ou externos exige abandonar a fantasia
          do assistente mágico. Modelos respondem ao contexto que recebem, variam
          com a formulação do prompt e amplificam ambiguidades do domínio. Isso
          pede projeto de sistema, não encantamento.
        </p>

        <h2>Contexto precisa de desenho deliberado</h2>
        <p>
          Um bom fluxo com IA define que dados entram, em que ordem, com qual
          permanência e com que critérios de expiração. Sem isso, a ferramenta
          devolve respostas verossímeis porém inconsistentes, difíceis de auditar e
          frágeis sob escala.
        </p>

        <h2>Memória operacional não é memória eterna</h2>
        <p>
          Times prudentes separam claramente histórico de conversa, memória de
          sessão e conhecimento persistido. Misturar tudo em um mesmo bloco de
          contexto costuma gerar custo alto, latência pior e interpretações erradas
          do que realmente deve orientar a resposta.
        </p>

        <blockquote>
          Em IA aplicada, precisão nasce menos do prompt brilhante e mais do
          desenho honesto do contexto.
        </blockquote>

        <h2>Observabilidade é parte do produto</h2>
        <p>
          Se a equipe não consegue inspecionar entradas, versões de prompts, saídas
          e decisões humanas posteriores, ela não consegue melhorar o sistema. O
          loop operacional precisa registrar o suficiente para aprender sem violar
          privacidade ou compliance.
        </p>

        <h3>Um stack mínimo de governança inclui:</h3>
        <ul>
          <li>versionamento de prompts e instruções de sistema;</li>
          <li>telemetria de custo, latência e taxa de intervenção humana;</li>
          <li>regras explícitas para fallback e bloqueio de ações sensíveis.</li>
        </ul>

        <h2>Craftsmanship também vale para IA</h2>
        <p>
          O melhor uso de IA em engenharia não elimina o cuidado artesanal; ele o
          redistribui. Menos tempo copiando boilerplate, mais tempo examinando
          contratos, modos de falha e qualidade do raciocínio colocado em produção.
        </p>
      </>
    ),
  },
];

export const postsBySlug = Object.fromEntries(posts.map((post) => [post.slug, post]));
