/*
  Dados da empresa.
  Por enquanto ficam neste arquivo. Quando conectarmos o Supabase,
  estes valores passam a vir do banco e o painel admin poderá editá-los.
*/

export const siteConfig = {
  name: "SL Montagens & Serviços",
  shortName: "SL Montagens",
  slogan: "Precisão em cada detalhe.",
  description:
    "Montagem de móveis, instalação de iluminação LED e serviços elétricos relacionados na Grande Florianópolis.",
  region: "Grande Florianópolis – SC",

  // TROCAR: número do WhatsApp com 55 + DDD + número, só dígitos (ex.: 5548999999999).
  // Este valor é um placeholder e abre uma conversa com um número falso.
  whatsapp: "5548900000000",
  whatsappMessage:
    "Olá! Vim pelo site da SL Montagens & Serviços e gostaria de solicitar um orçamento.",

  // Deixe vazio ("") o que ainda não foi informado: o rodapé esconde esses itens.
  instagram: "", // só o usuário, sem @ (ex.: "slmontagens")
  phone: "", // como deve aparecer (ex.: "(48) 99999-9999")
  email: "",
  address: "",
};

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre nós" },
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/precos", label: "Preços" },
  { href: "/contato", label: "Contato" },
];