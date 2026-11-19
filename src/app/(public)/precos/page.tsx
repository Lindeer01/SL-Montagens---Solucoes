import type { Metadata } from "next";
import PageCta from "@/components/pages/PageCta";
import PageHeader from "@/components/pages/PageHeader";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { formatPrice } from "@/lib/format";
import { pricesNotice, serviceGroups, services } from "@/lib/content";
import { getWhatsAppLink } from "@/lib/whatsapp";
import "@/components/pages/pages.css";

export const metadata: Metadata = {
  title: "Preços | SL Montagens & Serviços",
  description:
    "Consulte os valores dos serviços de montagem, iluminação LED e instalações elétricas da SL Montagens & Serviços.",
};

export default function PrecosPage() {
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
        eyebrow="Preços"
        title="Valores dos serviços"
        subtitle="Transparência para você planejar o seu serviço."
      />

      <section className="sl-page-section">
        <Container>
          <div className="sl-callout">
            <p>{pricesNotice}</p>
          </div>
        </Container>
      </section>

      {groups.map((group, index) => (
        <section
          key={group.id}
          className={`sl-page-section ${index % 2 === 0 ? "sl-page-section--alt" : ""}`.trim()}
        >
          <Container>
            <div className="sl-page-head">
              <h2 className="sl-page-head__title">{group.title}</h2>
            </div>

            <ul className="sl-price-list">
              {group.items.map((service) => (
                <li key={service.id} className="sl-price-row">
                  <div className="sl-price-row__info">
                    <strong>{service.name}</strong>
                    <p className="sl-muted">{service.description}</p>
                    {service.price?.note && (
                      <span className="sl-price-row__note">
                        {service.price.note}
                      </span>
                    )}
                  </div>
                  <span className="sl-price-row__value">
                    {formatPrice(service.price)}
                  </span>
                  <Button
                    href={getWhatsAppLink(
                      `Olá! Gostaria de um orçamento para: ${service.name}.`,
                    )}
                    external
                    variant="secondary"
                  >
                    Orçamento
                  </Button>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}

      <PageCta />
    </main>
  );
}