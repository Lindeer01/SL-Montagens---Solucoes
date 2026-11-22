import type { Metadata } from "next";
import ContactForm from "@/components/pages/ContactForm";
import PageHeader from "@/components/pages/PageHeader";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { contactContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import "@/components/pages/pages.css";

export const metadata: Metadata = {
  title: "Contato | SL Montagens & Serviços",
  description:
    "Fale com a SL Montagens & Serviços pelo WhatsApp e peça seu orçamento. Atendemos a Grande Florianópolis - SC.",
};

export default function ContatoPage() {
  const { instagram, phone, email, address, region, whatsappContacts } =
    siteConfig;
  const { hours } = contactContent;

  // Redes sociais: o Instagram vem do site.ts; as demais, do content.ts.
  const socials = [
    ...(instagram
      ? [
          {
            id: "instagram",
            name: "Instagram",
            url: `https://instagram.com/${instagram}`,
          },
        ]
      : []),
    ...contactContent.socials.filter((item) => item.url !== ""),
  ];

  return (
    <main>
      <PageHeader
        eyebrow="Contato"
        title="Fale com a gente"
        subtitle="O jeito mais rápido de pedir um orçamento é pelo WhatsApp."
      />

      <section className="sl-page-section">
        <Container>
          <div className="sl-contact">
            <div>
              <h2 className="sl-page-head__title">Canais de atendimento</h2>

              <ul className="sl-contact__list">
                <li className="sl-contact__item">
                  <span className="sl-contact__label">WhatsApp</span>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
                  >
                    {whatsappContacts.map((contact) => (
                      <Button
                        key={contact.number}
                        href={getWhatsAppLink(undefined, contact.number)}
                        external
                      >
                        {whatsappContacts.length > 1
                          ? `Chamar ${contact.name}`
                          : "Chamar no WhatsApp"}
                      </Button>
                    ))}
                  </div>
                </li>

                {phone && (
                  <li className="sl-contact__item">
                    <span className="sl-contact__label">Telefone</span>
                    <a
                      href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                      className="sl-contact__link"
                    >
                      {phone}
                    </a>
                  </li>
                )}

                {email && (
                  <li className="sl-contact__item">
                    <span className="sl-contact__label">E-mail</span>
                    <a href={`mailto:${email}`} className="sl-contact__link">
                      {email}
                    </a>
                  </li>
                )}

                {address && (
                  <li className="sl-contact__item">
                    <span className="sl-contact__label">Endereço</span>
                    <span>{address}</span>
                  </li>
                )}

                <li className="sl-contact__item">
                  <span className="sl-contact__label">
                    Região de atendimento
                  </span>
                  <span>{region}</span>
                </li>

                {hours && (
                  <li className="sl-contact__item">
                    <span className="sl-contact__label">Horários</span>
                    <span>{hours}</span>
                  </li>
                )}

                {socials.length > 0 && (
                  <li className="sl-contact__item">
                    <span className="sl-contact__label">Redes sociais</span>
                    <ul className="sl-contact__socials">
                      {socials.map((item) => (
                        <li key={item.id}>
                          <a
                            href={item.url}
                            className="sl-contact__link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
              </ul>
            </div>

            <Card>
              <h2 className="sl-page-head__title">Envie uma mensagem</h2>
              <p className="sl-muted" style={{ marginBlock: "0.75rem 1.5rem" }}>
                Preencha os campos e abriremos o WhatsApp com a sua mensagem
                pronta.
              </p>
              <ContactForm />
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}