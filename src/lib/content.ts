/*
  Conteúdo do site.
  Por enquanto fica neste arquivo. Na fase do Supabase, estes dados
  passam a vir do banco e o painel admin poderá editá-los.
*/

import { siteConfig } from "@/lib/site";
import type {
  Differential,
  Project,
  Service,
  ServiceCategory,
  ServiceGroup,
  Testimonial,
} from "@/types/content";

/* ---------- Página inicial ---------- */

export const heroContent = {
  eyebrow: siteConfig.region,
  titleStart: "Montagem de móveis e instalações com ",
  titleHighlight: "precisão em cada detalhe",
  text: "Montagem de móveis, instalação de iluminação LED e serviços elétricos relacionados, com acabamento cuidadoso e atendimento direto pelo WhatsApp.",
  tags: ["Montagem de móveis", "Iluminação LED", "Serviços elétricos"],
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "moveis",
    title: "Montagem de móveis",
    description:
      "Montagem completa, com atenção ao alinhamento e ao acabamento.",
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
    description: "Instalação de iluminação para valorizar cada ambiente.",
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
    text: "Medidas conferidas e acabamento cuidadoso em cada etapa do serviço.",
    icon: "precision",
  },
  {
    id: "pontualidade",
    title: "Compromisso com prazos",
    text: "Pontualidade e organização para você não perder tempo.",
    icon: "clock",
  },
  {
    id: "qualidade",
    title: "Qualidade no acabamento",
    text: "Cuidado com os móveis e com o seu ambiente, do início ao fim.",
    icon: "quality",
  },
  {
    id: "atendimento",
    title: "Atendimento direto",
    text: "Peça seu orçamento pelo WhatsApp e converse direto com a equipe.",
    icon: "chat",
  },
];

/* ---------- Projetos e depoimentos ---------- */

/* Enquanto esta lista estiver vazia, a página Projetos mostra um aviso
   e a seção da página inicial fica escondida. */
export const projects: Project[] = [];

/* Destaques da página inicial: os 3 primeiros projetos. */
export const featuredProjects: Project[] = projects.slice(0, 3);

export const testimonials: Testimonial[] = [];

/* ---------- Página Sobre nós ---------- */

export const aboutContent = {
  who: "A SL Montagens & Serviços atua na Grande Florianópolis com montagem de móveis, instalação de iluminação LED e serviços elétricos relacionados. Cada serviço é feito com atenção às medidas, ao alinhamento e ao acabamento, porque acreditamos em precisão em cada detalhe.",
  mission:
    "Entregar montagens e instalações bem feitas, no prazo combinado, com cuidado com o seu ambiente e comunicação clara do orçamento à entrega.",
  commitment:
    "Qualidade e pontualidade são compromissos de cada serviço: combinamos o prazo, respeitamos o combinado e entregamos o ambiente organizado.",
  /* Deixe vazio ("") para esconder a seção "Nossa história". */
  history: "",
};

/* ---------- Serviços e preços ---------- */

export const serviceGroups: ServiceGroup[] = [
  {
    id: "moveis",
    title: "Montagem de móveis",
    description: "Montagem completa de móveis, do início ao acabamento.",
    icon: "furniture",
  },
  {
    id: "led",
    title: "Instalações de LED",
    description: "Iluminação e fitas LED para valorizar cada ambiente.",
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
    description: "Serviços adicionais, sempre sob consulta.",
    icon: "chat",
  },
];

/*
  Preços: para definir um valor, acrescente a linha "price" no serviço.
  Exemplos:
    price: { type: "fixed", value: 150 },                   -> R$ 150,00
    price: { type: "starting", value: 90, note: "Por peça" }, -> A partir de R$ 90,00
  Sem "price" (ou com type "consult"), aparece "Sob consulta".
*/
export const services: Service[] = [
  {
    id: "montagem-moveis",
    groupId: "moveis",
    name: "Montagem de móveis",
    description:
      "Montagem de móveis em geral, com atenção ao alinhamento, às medidas e ao acabamento.",
    published: true,
  },
  {
    id: "montagem-guarda-roupas",
    groupId: "moveis",
    name: "Montagem de guarda-roupas",
    description:
      "Guarda-roupas montados com portas, gavetas e prateleiras ajustadas.",
    published: true,
  },
  {
    id: "montagem-cozinhas",
    groupId: "moveis",
    name: "Montagem de cozinhas",
    description: "Armários e módulos de cozinha montados e nivelados.",
    published: true,
  },
  {
    id: "montagem-paineis-racks",
    groupId: "moveis",
    name: "Montagem de painéis e racks",
    description: "Painéis de TV e racks montados e fixados com segurança.",
    published: true,
  },
  {
    id: "montagem-camas-comodas",
    groupId: "moveis",
    name: "Montagem de camas e cômodas",
    description: "Camas, cômodas e criados-mudos montados com cuidado.",
    published: true,
  },
  {
    id: "iluminacao-led",
    groupId: "led",
    name: "Instalação de iluminação LED",
    description:
      "Instalação de iluminação LED para valorizar e organizar o ambiente.",
    published: true,
  },
  {
    id: "fitas-perfis-led",
    groupId: "led",
    name: "Instalação de fitas e perfis LED",
    description:
      "Fitas LED instaladas em perfis para um acabamento limpo e uniforme.",
    published: true,
  },
  {
    id: "instalacoes-eletricas",
    groupId: "eletrica",
    name: "Instalações elétricas",
    description:
      "Instalações elétricas relacionadas aos serviços de montagem e iluminação.",
    published: true,
  },
  {
    id: "outros-servicos",
    groupId: "outros",
    name: "Outros serviços",
    description:
      "Precisa de algo que não está na lista? Conte o que você precisa e avaliamos.",
    published: true,
  },
];

export const pricesNotice =
  "Os valores podem variar conforme as medidas, os materiais, a complexidade e o local do serviço. Peça um orçamento para receber o valor do seu caso.";

/* ---------- Contato ---------- */

export const contactContent = {
  /* Deixe vazio ("") para esconder. Ex.: "Segunda a sexta, das 8h às 18h" */
  hours: "",
};