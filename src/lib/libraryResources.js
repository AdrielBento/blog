import { z } from "zod";
import articlePlate from "../../assets/library-article-plate.svg";
import bookPlate from "../../assets/library-book-plate.svg";
import paperPlate from "../../assets/library-paper-plate.svg";
import videoPlate from "../../assets/library-video-plate.svg";

export const resourceTypeOrder = ["book", "article", "video", "paper"];

export const resourceTypeLabels = {
  all: "Todos",
  book: "Livros",
  article: "Artigos",
  video: "Videos",
  paper: "Papers",
};

const resourceSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  creator: z.string().min(1),
  type: z.enum(resourceTypeOrder),
  theme: z.string().min(1),
  summary: z.string().min(1),
  href: z.string().url(),
  sourceLabel: z.string().min(1),
  image: z.string().min(1),
  imageAlt: z.string().min(1),
  year: z.string().min(1).optional(),
  duration: z.string().min(1).optional(),
  readingTime: z.string().min(1).optional(),
  featured: z.boolean().optional(),
});

const rawResources = [
  {
    id: "a-philosophy-of-software-design",
    title: "A Philosophy of Software Design",
    creator: "John Ousterhout",
    type: "book",
    theme: "design de software",
    summary:
      "Uma referencia curta e precisa sobre complexidade, profundidade de interfaces e como reduzir carga cognitiva no codigo.",
    href: "https://web.stanford.edu/~ouster/cgi-bin/book.php",
    sourceLabel: "Stanford",
    image: bookPlate,
    imageAlt: "Capa editorial ornamentada para livros tecnicos.",
    year: "2018",
    featured: true,
  },
  {
    id: "designing-data-intensive-applications",
    title: "Designing Data-Intensive Applications",
    creator: "Martin Kleppmann",
    type: "book",
    theme: "sistemas distribuidos",
    summary:
      "Panorama robusto sobre armazenamento, streams, consistencia e arquitetura de sistemas que precisam sobreviver ao mundo real.",
    href: "https://dataintensive.net/",
    sourceLabel: "dataintensive.net",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mesa com livros abertos e luz baixa, sugerindo estudo tecnico.",
    year: "2017",
    featured: true,
  },
  {
    id: "the-pragmatic-programmer",
    title: "The Pragmatic Programmer",
    creator: "David Thomas, Andrew Hunt",
    type: "book",
    theme: "craftsmanship",
    summary:
      "Disciplina, comunicacao, automacao e postura profissional tratadas como habito continuo, nao como slogan de carreira.",
    href: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
    sourceLabel: "Pragmatic Bookshelf",
    image: bookPlate,
    imageAlt: "Prancha artistica com moldura vitoriana para recomendacao de livros.",
    year: "2019",
  },
  {
    id: "working-effectively-with-legacy-code",
    title: "Working Effectively with Legacy Code",
    creator: "Michael Feathers",
    type: "book",
    theme: "arquitetura evolutiva",
    summary:
      "Leitura obrigatoria para quem precisa mudar sistemas herdados sem heroismo e com estrategia de teste incremental.",
    href: "https://www.informit.com/store/working-effectively-with-legacy-code-9780131177055",
    sourceLabel: "InformIT",
    image: bookPlate,
    imageAlt: "Composicao visual de estante editorial para um livro sobre codigo legado.",
    year: "2004",
  },
  {
    id: "choose-boring-technology",
    title: "Choose Boring Technology",
    creator: "Dan McKinley",
    type: "article",
    theme: "decisao arquitetural",
    summary:
      "Um antidoto direto contra empolgar-se com stack nova demais quando o problema pede previsibilidade operacional.",
    href: "https://mcfunley.com/choose-boring-technology",
    sourceLabel: "mcfunley.com",
    image: articlePlate,
    imageAlt: "Folio editorial com linhas e ornamentos inspirado em gravura classica.",
    readingTime: "9 min",
    featured: true,
  },
  {
    id: "falsehoods-programmers-believe-about-time",
    title: "Falsehoods Programmers Believe About Time",
    creator: "Noah Sussman",
    type: "article",
    theme: "sistemas e tempo",
    summary:
      "Uma lista classica que expande rapidamente a nocao de risco quando se trabalha com calendarios, fusos, eventos e estado.",
    href: "https://infiniteundo.com/post/25326999628/falsehoods-programmers-believe-about-time",
    sourceLabel: "Infinite Undo",
    image: articlePlate,
    imageAlt: "Prancha artistica para artigo com atmosfera de arquivo tecnico.",
    readingTime: "12 min",
  },
  {
    id: "the-bitter-lesson",
    title: "The Bitter Lesson",
    creator: "Rich Sutton",
    type: "article",
    theme: "estrategia em IA",
    summary:
      "Ensaio curto e influente sobre como metodos que escalam computacao tendem a superar intuicoes humanas embutidas demais.",
    href: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html",
    sourceLabel: "Incomplete Ideas",
    image: articlePlate,
    imageAlt: "Folha editorial com composicao dramatica para ensaio sobre IA.",
    readingTime: "8 min",
  },
  {
    id: "simple-made-easy",
    title: "Simple Made Easy",
    creator: "Rich Hickey",
    type: "video",
    theme: "design e complexidade",
    summary:
      "Uma palestra seminal para separar aquilo que e simples do que apenas parece conveniente no curto prazo.",
    href: "https://www.youtube.com/watch?v=SxdOUGdseq4",
    sourceLabel: "YouTube / InfoQ",
    image: "https://img.youtube.com/vi/SxdOUGdseq4/hqdefault.jpg",
    imageAlt: "Thumbnail da palestra Simple Made Easy no YouTube.",
    duration: "59 min",
  },
  {
    id: "inventing-on-principle",
    title: "Inventing on Principle",
    creator: "Bret Victor",
    type: "video",
    theme: "ferramentas e pensamento",
    summary:
      "Uma defesa elegante de ferramentas que encurtam o caminho entre intencao, feedback e entendimento profundo do sistema.",
    href: "https://www.youtube.com/watch?v=PUv66718DII",
    sourceLabel: "YouTube",
    image: "https://img.youtube.com/vi/PUv66718DII/hqdefault.jpg",
    imageAlt: "Thumbnail da palestra Inventing on Principle no YouTube.",
    duration: "44 min",
  },
  {
    id: "attention-is-all-you-need",
    title: "Attention Is All You Need",
    creator: "Ashish Vaswani et al.",
    type: "paper",
    theme: "modelos de IA",
    summary:
      "O paper que consolidou transformers como base pratica para a geracao recente de modelos de linguagem e multimodalidade.",
    href: "https://arxiv.org/abs/1706.03762",
    sourceLabel: "arXiv",
    image: paperPlate,
    imageAlt: "Placa editorial para paper de pesquisa com geometria radial.",
    readingTime: "35 min",
    year: "2017",
  },
  {
    id: "criteria-for-decomposing-systems-into-modules",
    title: "On the Criteria To Be Used in Decomposing Systems into Modules",
    creator: "David L. Parnas",
    type: "paper",
    theme: "modularidade",
    summary:
      "Texto fundador sobre decomposicao orientada a decisao de mudanca, ainda mais atual do que boa parte da conversa moderna sobre arquitetura.",
    href: "https://doi.org/10.1145/361598.361623",
    sourceLabel: "DOI / ACM",
    image: paperPlate,
    imageAlt: "Composicao artistica de paper classico sobre modularidade.",
    readingTime: "18 min",
    year: "1972",
  },
  {
    id: "out-of-the-tar-pit",
    title: "Out of the Tar Pit",
    creator: "Ben Moseley, Peter Marks",
    type: "paper",
    theme: "complexidade acidental",
    summary:
      "Uma tese ambiciosa sobre estado, controle e como simplificar sistemas reduzindo a superficie de erro humano.",
    href: "https://github.com/papers-we-love/papers-we-love/blob/main/design/out-of-the-tar-pit.pdf",
    sourceLabel: "Papers We Love",
    image: paperPlate,
    imageAlt: "Prancha editorial para paper sobre complexidade acidental.",
    readingTime: "40 min",
    year: "2006",
  },
];

function loadResources() {
  const parsed = rawResources.map((resource, order) => {
    const result = resourceSchema.safeParse(resource);

    if (!result.success) {
      const issues = result.error.issues
        .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
        .join("; ");
      throw new Error(
        `[library-resources] Invalid resource "${resource.id ?? "unknown"}". ${issues}`,
      );
    }

    return {
      ...result.data,
      order,
    };
  });

  const ids = new Set();
  for (const resource of parsed) {
    if (ids.has(resource.id)) {
      throw new Error(`[library-resources] Duplicate id "${resource.id}".`);
    }
    ids.add(resource.id);
  }

  return parsed
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || a.order - b.order)
    .map(({ order, ...resource }) => resource);
}

export const libraryResources = loadResources();
export const libraryResourceTypes = ["all", ...resourceTypeOrder];
