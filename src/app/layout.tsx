import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SL Montagens & Serviços",
  description:
    "Montagem de móveis, instalação de LED e serviços elétricos na Grande Florianópolis. Precisão em cada detalhe.",
  applicationName: "SL Montagens",
  // Nome que aparece embaixo do ícone na tela inicial do iPhone.
  appleWebApp: {
    capable: true,
    title: "SL Montagens",
    statusBarStyle: "black",
  },
};

// Cor da barra do navegador no celular (igual ao fundo da logo).
export const viewport: Viewport = {
  themeColor: "#111820",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable}`}>
      <body>{children}</body>
    </html>
  );
}