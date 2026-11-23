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

  /*
    TROCAR: contatos de WhatsApp.
    "number": 55 + DDD + número, só dígitos (ex.: 5548999991234).
    "name": o nome que aparece para o cliente (ex.: "Samuel").
    O PRIMEIRO da lista é o principal: ele recebe os pedidos dos botões
    "Pedir orçamento" do site. Para trocar o principal, inverta a ordem.
    Estes números são placeholders e abrem conversas com números falsos.
  */
  whatsappContacts: [
    { name: "Sandro", number: "5548999086541" },
    { name: "Lucas", number: "5547992321041" },
  ],
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