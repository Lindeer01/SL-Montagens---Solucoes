import type { Metadata } from "next";
import PageCta from "@/components/pages/PageCta";
import PageHeader from "@/components/pages/PageHeader";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { aboutContent, differentials } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import "@/components/pages/pages.css";

export const metadata: Metadata = {
  title: "Sobre nós | SL Montagens & Serviços",
  description:
    "Conheça a SL Montagens & Serviços: montagem de móveis, iluminação LED e serviços elétricos na Grande Florianópolis.",
};

export default function SobrePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Sobre nós"
        title={`Quem é a ${siteConfig.name}`}
        subtitle={siteConfig.slogan}
      />

      <section className="sl-page-section">
        <Container>
          <div className="sl-about__grid">
            <Card>
              <h2 className="sl-about__title">Quem somos</h2>
              <p className="sl-muted">{aboutContent.who}</p>
            </Card>
            <Card>
              <h2 className="sl-about__title">Nossa missão</h2>
              <p className="sl-muted">{aboutContent.mission}</p>
            </Card>
          </div>

          {aboutContent.history && (
            <Card className="sl-about__history">
              <h2 className="sl-about__title">Nossa história</h2>
              <p className="sl-muted">{aboutContent.history}</p>
            </Card>
          )}
        </Container>
      </section>

      <section className="sl-page-section sl-page-section--alt">
        <Container>
          <div className="sl-page-head">
            <h2 className="sl-page-head__title">Nossos diferenciais</h2>
          </div>
          <div className="sl-page-diffs">
            {differentials.map((item) => (
              <div key={item.id} className="sl-page-diff">
                <span className="sl-page-icon">
                  <Icon name={item.icon} size={26} />
                </span>
                <h3 className="sl-page-diff__title">{item.title}</h3>
                <p className="sl-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="sl-page-section">
        <Container>
          <div className="sl-callout">
            <h2 className="sl-about__title">
              Compromisso com qualidade e pontualidade
            </h2>
            <p className="sl-muted">{aboutContent.commitment}</p>
          </div>
        </Container>
      </section>

      <PageCta />
    </main>
  );
}