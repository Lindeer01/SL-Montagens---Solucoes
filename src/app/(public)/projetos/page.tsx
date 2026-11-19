import type { Metadata } from "next";
import PageCta from "@/components/pages/PageCta";
import PageHeader from "@/components/pages/PageHeader";
import ProjectGallery from "@/components/pages/ProjectGallery";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { projects } from "@/lib/content";
import { getWhatsAppLink } from "@/lib/whatsapp";
import "@/components/pages/pages.css";

export const metadata: Metadata = {
  title: "Projetos | SL Montagens & Serviços",
  description:
    "Veja fotos de montagens de móveis, instalações de LED e serviços elétricos realizados pela SL Montagens & Serviços.",
};

export default function ProjetosPage() {
  const hasProjects = projects.length > 0;

  return (
    <main>
      <PageHeader
        eyebrow="Projetos"
        title="Trabalhos realizados"
        subtitle="Fotos de serviços que já entregamos."
      />

      <section className="sl-page-section">
        <Container>
          {hasProjects ? (
            <ProjectGallery projects={projects} />
          ) : (
            <div className="sl-empty">
              <h2 className="sl-page-head__title">Em breve por aqui</h2>
              <p className="sl-muted">
                Estamos organizando as fotos dos nossos trabalhos. Enquanto
                isso, conte o que você precisa e peça o seu orçamento.
              </p>
              <Button href={getWhatsAppLink()} external>
                Pedir orçamento
              </Button>
            </div>
          )}
        </Container>
      </section>

      {hasProjects && <PageCta />}
    </main>
  );
}