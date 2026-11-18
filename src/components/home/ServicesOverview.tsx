import Link from "next/link";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import SectionTitle from "@/components/ui/SectionTitle";
import { serviceCategories } from "@/lib/content";

export default function ServicesOverview() {
  return (
    <section className="sl-section" aria-labelledby="titulo-servicos">
      <Container>
        <div className="sl-section__head">
          <SectionTitle
            eyebrow="Serviços"
            title="O que fazemos"
            subtitle="Montagem, iluminação e instalações para deixar o seu ambiente pronto, do jeito certo."
          />
        </div>

        <div className="sl-services">
          {serviceCategories.map((service) => (
            <Card key={service.id} className="sl-service">
              <span className="sl-icon-box">
                <Icon name={service.icon} size={26} />
              </span>
              <h3 className="sl-service__title">{service.title}</h3>
              <p className="sl-service__text">{service.description}</p>
              <ul className="sl-service__list">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href="/servicos" className="sl-service__link">
                Ver detalhes
                <Icon name="arrow" size={18} />
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}