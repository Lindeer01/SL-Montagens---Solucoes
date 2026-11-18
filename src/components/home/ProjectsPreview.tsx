import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { featuredProjects } from "@/lib/content";

export default function ProjectsPreview() {
  // Sem projetos cadastrados, a seção não aparece.
  if (featuredProjects.length === 0) return null;

  return (
    <section className="sl-section">
      <Container>
        <div className="sl-section__head">
          <SectionTitle
            eyebrow="Projetos"
            title="Trabalhos realizados"
            subtitle="Alguns dos serviços que já entregamos."
          />
        </div>

        <div className="sl-projects">
          {featuredProjects.map((project) => (
            <figure key={project.id} className="sl-project">
              <div className="sl-project__media">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="sl-project__image"
                />
              </div>
              <figcaption className="sl-project__caption">
                <span className="sl-project__category">{project.category}</span>
                <strong>{project.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="sl-section__footer">
          <Button href="/projetos" variant="secondary">
            Ver todos os projetos
          </Button>
        </div>
      </Container>
    </section>
  );
}