/*
  Conteudo do site.
  Por enquanto fica neste arquivo. Na fase do Supabase, estes dados
  passam a vir do banco e o painel admin podera edita-los.

  Tudo que esta marcado como "provisional" ou "PROVISORIO" e um texto
  de partida: substitua pelo conteudo real da empresa.
*/

import { siteConfig } from "@/lib/site";
import type {
  AboutBlock,
  AboutImage,
  AboutValue,
  Differential,
  Project,
  Service,
  ServiceCategory,
  ServiceGroup,
  SocialLink,
  Testimonial,
} from "@/types/content";

/* ---------- Pagina inicial ---------- */

export const heroContent = {
  eyebrow: siteConfig.region,
  titleStart: "Montagem de móveis e instalações com ",
  titleHighlight: "precisão em cada detalhe",
  text: "Montagem de móveis, instalação de iluminação LED e serviços elétricos relacionados, com atendimento direto pelo WhatsApp.",
  tags: ["Montagem de móveis", "Iluminação LED", "Serviços elétricos"],
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "moveis",
    title: "Montagem de móveis",
    description: "Montagem de móveis em geral.",
    icon: "furniture",
    items: [
      "Guarda-roupas",
      "Cozinhas",
      "Painéis e racks",
      "Camas e cômodas",
      "Outros móveis",
    ],
  },
  {
    id: "led",
    title: "Iluminação LED",
    description: "Instalação de iluminação LED.",
    icon: "led",
    items: ["Instalação de iluminação LED", "Fitas LED", "Perfis LED"],
  },
  {
    id: "eletrica",
    title: "Serviços elétricos",
    description: "Instalações elétricas relacionadas aos serviços oferecidos.",
    icon: "electric",
    items: [
      "Instalações elétricas relacionadas aos serviços",
      "Outros serviços sob consulta",
    ],
  },
];

export const differentials: Differential[] = [
  {
    id: "precisao",
    title: "Precisão nos detalhes",
    text: "Atenção a cada detalhe de cada serviço.",
    icon: "precision",
  },
  {
    id: "pontualidade",
    title: "Compromisso com prazos",
    text: "Compromisso com a pontualidade nos serviços.",
    icon: "clock",
  },
  {
    id: "qualidade",
    title: "Qualidade",
    text: "Compromisso com a qualidade do que entregamos.",
    icon: "quality",
  },
  {
    id: "atendimento",
    title: "Atendimento direto",
    text: "Peça seu orçamento pelo WhatsApp.",
    icon: "chat",
  },
];

/* ---------- Projetos e depoimentos ---------- */

/*
  Enquanto esta lista estiver vazia, a pagina Projetos mostra espacos
  reservados marcados como provisorios e a secao da pagina inicial
  fica escondida. Para cadastrar um projeto real, veja o exemplo:
    { id: "p1", title: "Guarda-roupa", category: "Montagem de móveis",
      description: "Descricao do projeto.", image: "/images/projetos/p1.jpg",
      alt: "Guarda-roupa montado" },
*/
export const projects: Project[] = [];

/* Destaques da pagina inicial: os 3 primeiros projetos. */
export const featuredProjects: Project[] = projects.slice(0, 3);

export const testimonials: Testimonial[] = [];

/* ---------- Pagina Sobre nos ---------- */

export const aboutContent: {
  who: AboutBlock;
  history: AboutBlock;
  mission: AboutBlock;
  commitment: AboutBlock;
  valuesProvisional: boolean;
  values: AboutValue[];
  images: AboutImage[];
} = {
  who: {
    text: "A SL Montagens & Serviços atua com montagem de móveis, instalação de iluminação LED e serviços elétricos relacionados, atendendo a Grande Florianópolis - SC. Nosso lema é: precisão em cada detalhe.",
    provisional: true,
  },
  history: {
    text: "PROVISÓRIO: aqui entra a história da empresa (como começou, quem são os responsáveis, como o trabalho evoluiu). Substitua este texto pelo conteúdo real.",
    provisional: true,
  },
  mission: {
    text: "PROVISÓRIO: aqui entra a missão da empresa. Substitua este texto pelo conteúdo real.",
    provisional: true,
  },
  commitment: {
    text: "Qualidade e pontualidade são compromissos da SL Montagens & Serviços em cada serviço realizado.",
    provisional: true,
  },
  valuesProvisional: true,
  values: [
    {
      id: "precisao",
      title: "Precisão",
      text: "Atenção a cada detalhe de cada serviço.",
      icon: "precision",
    },
    {
      id: "qualidade",
      title: "Qualidade",
      text: "Compromisso com a qualidade do que entregamos.",
      icon: "quality",
    },
    {
      id: "pontualidade",
      title: "Pontualidade",
      text: "Compromisso com os prazos combinados.",
      icon: "clock",
    },
    {
      id: "atendimento",
      title: "Atendimento direto",
      text: "Contato principal pelo WhatsApp.",
      icon: "chat",
    },
  ],
  /*
    Fotos reais da empresa e dos trabalhos. Enquanto estiver vazio, aparecem
    espacos reservados marcados como provisorios. Exemplo:
      { src: "/images/sobre/equipe.jpg", alt: "Equipe da SL Montagens" },
  */
  images: [],
};

/* ---------- Servicos e precos ---------- */

/* true = mostra, na pagina Servicos, o aviso de conteudo provisorio. */
export const servicesProvisional = true;

/* Informacoes complementares mostradas em todo servico que nao tiver "details". */
export const serviceDefaultDetails = [
  "Atendimento na Grande Florianópolis - SC",
  "Orçamento pelo WhatsApp",
];

export const serviceGroups: ServiceGroup[] = [
  {
    id: "moveis",
    title: "Montagem de móveis",
    description: "Serviços de montagem de móveis.",
    icon: "furniture",
  },
  {
    id: "led",
    title: "Instalações de LED",
    description: "Instalação de iluminação, fitas e perfis LED.",
    icon: "led",
  },
  {
    id: "eletrica",
    title: "Serviços elétricos",
    description: "Instalações elétricas relacionadas aos nossos serviços.",
    icon: "electric",
  },
  {
    id: "outros",
    title: "Outros serviços",
    description: "Outros serviços, sempre sob consulta.",
    icon: "chat",
  },
];

/*
  Precos: para definir um valor, acrescente a linha "price" no servico.
  Exemplos:
    price: { type: "fixed", value: 150 },                    -> R$ 150,00
    price: { type: "starting", value: 90, note: "Por peca" }, -> A partir de R$ 90,00
  Sem "price" (ou com type "consult"), aparece "Sob consulta".
  Para esconder um servico do site, troque published para false.
*/
export const services: Service[] = [
  {
    id: "montagem-moveis",
    groupId: "moveis",
    name: "Montagem de móveis",
    description: "Montagem de móveis em geral.",
    published: true,
  },
  {
    id: "montagem-guarda-roupas",
    groupId: "moveis",
    name: "Montagem de guarda-roupas",
    description: "Montagem de guarda-roupas.",
    published: true,
  },
  {
    id: "montagem-cozinhas",
    groupId: "moveis",
    name: "Montagem de cozinhas",
    description: "Montagem de cozinhas.",
    published: true,
  },
  {
    id: "montagem-paineis-racks",
    groupId: "moveis",
    name: "Montagem de painéis e racks",
    description: "Montagem de painéis e racks.",
    published: true,
  },
  {
    id: "montagem-camas-comodas",
    groupId: "moveis",
    name: "Montagem de camas e cômodas",
    description: "Montagem de camas e cômodas.",
    published: true,
  },
  {
    id: "iluminacao-led",
    groupId: "led",
    name: "Instalação de iluminação LED",
    description: "Instalação de iluminação LED.",
    published: true,
  },
  {
    id: "fitas-perfis-led",
    groupId: "led",
    name: "Instalação de fitas e perfis LED",
    description: "Instalação de fitas e perfis LED.",
    published: true,
  },
  {
    id: "instalacoes-eletricas",
    groupId: "eletrica",
    name: "Instalações elétricas",
    description:
      "Instalações elétricas relacionadas aos serviços oferecidos.",
    published: true,
  },
  {
    id: "outros-servicos",
    groupId: "outros",
    name: "Outros serviços",
    description:
      "Precisa de outro serviço? Conte o que você precisa pelo WhatsApp.",
    published: true,
  },
];

export const pricesNotice =
  "Os valores variam conforme cada serviço. Peça um orçamento pelo WhatsApp para receber o valor do seu caso.";

export const pricesUndefinedMessage =
  "Os valores são definidos mediante orçamento. Conte o que você precisa pelo WhatsApp e responderemos com o valor do seu serviço.";

/* ---------- Contato ---------- */

/*
  Redes sociais (alem do Instagram, que vem do site.ts).
  Preencha "url" com o endereco completo; links vazios nao aparecem.
*/
const socialLinks: SocialLink[] = [
  { id: "facebook", name: "Facebook", url: "" },
  { id: "tiktok", name: "TikTok", url: "" },
  { id: "youtube", name: "YouTube", url: "" },
];

export const contactContent = {
  /* Deixe vazio ("") para esconder. Ex.: "Segunda a sexta, das 8h as 18h" */
  hours: "",
  socials: socialLinks,
  successTitle: "Mensagem enviada!",
  successMessage:
    "Abrimos o WhatsApp com a sua mensagem pronta. É só enviar por lá. Obrigado pelo contato!",
};