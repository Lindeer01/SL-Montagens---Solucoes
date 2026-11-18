import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { heroContent } from "@/lib/content";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="sl-hero">
      <Container className="sl-hero__inner">
        <div className="sl-hero__content">
          <span className="sl-hero__eyebrow">{heroContent.eyebrow}</span>
          <h1 className="sl-hero__title">
            {heroContent.titleStart}
            <span className="sl-hero__highlight">
              {heroContent.titleHighlight}
            </span>
          </h1>
          <p className="sl-hero__text">{heroContent.text}</p>

          <div className="sl-hero__actions">
            <Button href={getWhatsAppLink()} external size="lg">
              Pedir orçamento
            </Button>
            <Button href="/servicos" variant="secondary" size="lg">
              Ver serviços
            </Button>
          </div>

          <ul className="sl-hero__tags">
            {heroContent.tags.map((tag) => (
              <li key={tag} className="sl-hero__tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="sl-hero__visual" aria-hidden="true">
          <Image
            src="/images/logo/sl-logo-symbol.png"
            alt=""
            width={400}
            height={370}
            priority
            className="sl-hero__symbol"
          />
        </div>
      </Container>
    </section>
  );
}