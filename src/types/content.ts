export type IconName =
  | "furniture"
  | "led"
  | "electric"
  | "precision"
  | "clock"
  | "quality"
  | "chat"
  | "arrow";

export type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  items: string[];
};

export type Differential = {
  id: string;
  title: string;
  text: string;
  icon: IconName;
};

export type FeaturedProject = {
  id: string;
  title: string;
  category: string;
  image: string; // caminho da imagem, ex.: "/images/projetos/guarda-roupa.jpg"
  alt: string;
};

export type Project = FeaturedProject & {
  description?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  text: string;
  detail?: string; // ex.: "Cliente em Palhoca"
};

export type PriceType = "fixed" | "starting" | "consult";

export type ServicePrice = {
  type: PriceType; // fixed = preco fixo, starting = a partir de, consult = sob consulta
  value?: number; // em reais, ex.: 150 ou 149.9
  note?: string; // observacao exibida na pagina de precos
};

export type ServiceGroup = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
};

export type Service = {
  id: string;
  groupId: string;
  name: string;
  description: string;
  details?: string[]; // informacoes complementares (se vazio, usa o padrao)
  image?: string;
  imageAlt?: string;
  price?: ServicePrice;
  published: boolean;
};

/* Bloco de texto da pagina Sobre. provisional = true mostra o selo "Texto provisorio". */
export type AboutBlock = {
  text: string;
  provisional: boolean;
};

export type AboutValue = {
  id: string;
  title: string;
  text: string;
  icon: IconName;
};

export type AboutImage = {
  src: string;
  alt: string;
};

export type SocialLink = {
  id: string;
  name: string;
  url: string; // endereco completo, ex.: "https://facebook.com/suapagina"
};

/* Dados do formulario de contato (preparado para salvar no Supabase depois). */
export type ContactMessage = {
  name: string;
  phone: string;
  service: string;
  message: string;
  contact: string; // numero do WhatsApp que vai receber a mensagem
};