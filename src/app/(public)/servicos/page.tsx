import type { Metadata } from "next";
import PageCta from "@/components/pages/PageCta";
import PageHeader from "@/components/pages/PageHeader";
import ServiceCard from "@/components/pages/ServiceCard";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { serviceGroups, services } from "@/lib/content";
import "@/components/pages/pages.css";

export const metadata: Metadata = {
  title: "Serviços | SL Montagens & Serviços",
  description:
    "Montagem de móveis, instalação de LED e serviços elétricos na Grande Florianópolis. Peça seu orçamento pelo WhatsApp.",
};

export default function ServicosPage() {
  const groups = serviceGroups
    .map((group) => ({
      ...group,
      items: services.filter(
        (service) => service.published && service.groupId === group.id,
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <main>
      <PageHeader
        eyebrow="Serviços"
        title="O que fazemos"
        subtitle="Montagem, iluminação e instalações para deixar o seu ambiente pronto, do jeito certo."
      />

      <Container>
        <nav className="sl-svc-nav" aria-label="Categorias de serviços">
          {groups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="sl-svc-nav__link"
            >
              {group.title}
            </a>
          ))}
        </nav>
      </Container>

      {groups.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          className={`sl-page-section ${index % 2 === 1 ? "sl-page-section--alt" : ""}`.trim()}
        >
          <Container>
            <div className="sl-page-head">
              <span className="sl-page-icon">
                <Icon name={group.icon} size={26} />
              </span>
              <div>
                <h2 className="sl-page-head__title">{group.title}</h2>
                <p className="sl-muted">{group.description}</p>
              </div>
            </div>

            <div className="sl-svc-grid">
              {group.items.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  categoryTitle={group.title}
                  icon={group.icon}
                />
              ))}
            </div>
          </Container>
        </section>
      ))}

      <PageCta />
    </main>
  );
}