/*
  Conteúdo da página inicial.
  Por enquanto fica neste arquivo. Na fase do Supabase, estes dados
  passam a vir do banco e o painel admin poderá editá-los.
*/

import { siteConfig } from "@/lib/site";
import type {
  Differential,
  FeaturedProject,
  ServiceCategory,
  Testimonial,
} from "@/types/content";

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

/* Enquanto estas listas estiverem vazias, as seções ficam escondidas. */
export const featuredProjects: FeaturedProject[] = [];

export const testimonials: Testimonial[] = [];