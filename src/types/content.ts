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

export type Testimonial = {
  id: string;
  name: string;
  text: string;
  detail?: string; // ex.: "Cliente em Palhoça"
};