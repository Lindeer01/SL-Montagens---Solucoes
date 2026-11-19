import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function PageCta() {
  return (
    <section className="sl-page-section">
      <Container>
        <div className="sl-page-cta">
          <div>
            <h2 className="sl-page-cta__title">
              Pronto para pedir o seu orçamento?
            </h2>
            <p className="sl-page-cta__text">
              Conte o que você precisa pelo WhatsApp e responderemos o mais
              rápido possível.
            </p>
          </div>
          <Button href={getWhatsAppLink()} external size="lg">
            Pedir orçamento
          </Button>
        </div>
      </Container>
    </section>
  );
}