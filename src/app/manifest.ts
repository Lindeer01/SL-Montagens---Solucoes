import type { MetadataRoute } from "next";

/*
  Manifesto do site: define o nome, as cores e os icones usados quando
  alguem salva o site na tela inicial do celular (principalmente Android).
*/
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SL Montagens & Serviços",
    short_name: "SL Montagens",
    description:
      "Montagem de móveis, instalação de LED e serviços elétricos na Grande Florianópolis.",
    start_url: "/",
    display: "standalone",
    background_color: "#111820",
    theme_color: "#111820",
    lang: "pt-BR",
    icons: [
      {
        src: "/imagensicon/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/imagensicon/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/imagensicon/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}