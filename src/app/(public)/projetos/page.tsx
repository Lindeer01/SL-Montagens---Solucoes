import type { Metadata } from "next";
import PageCta from "@/components/pages/PageCta";
import PageHeader from "@/components/pages/PageHeader";
import ProjectGallery from "@/components/pages/ProjectGallery";
import Container from "@/components/ui/Container";
import { ProvisionalBox } from "@/components/ui/Provisional";
import { projects } from "@/lib/content";
import "@/components/pages/pages.css";

export const metadata: Metadata = {
  title: "Projetos | SL Montagens & Serviços",
  description:
    "Veja fotos de montagens de móveis, instalações de LED e serviços elétricos realizados pela SL Montagens & Serviços.",
};

/* Categorias dos espacos reservados (as mesmas dos servicos oferecidos). */
const placeholderCategories = [
  "Montagem de móveis",
  "Instalações de LED",
  "Serviços elétricos",
  "Montagem de móveis",
  "Instalações de LED",
  "Serviços elétricos",
];

export default function ProjetosPage() {
  const hasProjects = projects.length > 0;

  return (
    <main>
      <PageHeader
        eyebrow="Projetos"
        title="Trabalhos realizados"
        subtitle="Fotos dos serviços realizados pela empresa."
      />

      <section className="sl-page-section">
        <Container>
          {hasProjects ? (
            <ProjectGallery projects={projects} />
          ) : (
            <>
              <div className="sl-callout" style={{ marginBottom: "2rem" }}>
                <p>
                  <strong>Conteúdo provisório.</strong> Os espaços abaixo são
                  reservas: as fotos reais dos trabalhos serão adicionadas assim
                  que forem fornecidas.
                </p>
              </div>

              <div className="sl-gallery__grid">
                {placeholderCategories.map((category, index) => (
                  <article key={index} className="sl-proj-ph">
                    <ProvisionalBox label="Foto do projeto" />
                    <div className="sl-proj-ph__body">
                      <span className="sl-svc__category">{category}</span>
                      <strong>Título do projeto {index + 1}</strong>
                      <p className="sl-muted">
                        Descrição provisória do projeto.
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      <PageCta />
    </main>
  );
}