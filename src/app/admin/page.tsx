import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel Administrativo | SL Montagens & Serviços",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main>
      <h1>Painel Administrativo</h1>
    </main>
  );
}