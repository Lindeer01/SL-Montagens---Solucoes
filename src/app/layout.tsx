import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SL Montagens & Serviços",
  description:
    "Montagem de móveis, instalação de LED e serviços elétricos na Grande Florianópolis. Precisão em cada detalhe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}