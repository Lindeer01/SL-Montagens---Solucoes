import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function CtaSection() {
  return (
    <section className="sl-section">
      <Container>
        <div className="sl-cta">
          <div>
            <h2 className="sl-cta__title">
              Vamos tirar o seu projeto do papel?
            </h2>
            <p className="sl-cta__text">
              Conte o que você precisa pelo WhatsApp e peça seu orçamento.
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