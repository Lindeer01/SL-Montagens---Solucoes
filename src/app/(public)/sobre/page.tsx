import type { Metadata } from "next";
import Image from "next/image";
import PageCta from "@/components/pages/PageCta";
import PageHeader from "@/components/pages/PageHeader";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { ProvisionalBadge, ProvisionalBox } from "@/components/ui/Provisional";
import { aboutContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import type { AboutBlock } from "@/types/content";
import "@/components/pages/pages.css";

export const metadata: Metadata = {
  title: "Sobre nós | SL Montagens & Serviços",
  description:
    "Conheça a SL Montagens & Serviços: montagem de móveis, iluminação LED e serviços elétricos na Grande Florianópolis.",
};

function AboutCard({ title, block }: { title: string; block: AboutBlock }) {
  return (
    <Card>
      <h2 className="sl-about__title">{title}</h2>
      {block.provisional && <ProvisionalBadge />}
      <p className="sl-muted" style={{ marginTop: "0.75rem" }}>
        {block.text}
      </p>
    </Card>
  );
}

export default function SobrePage() {
  const { images } = aboutContent;

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
            <AboutCard title="Quem somos" block={aboutContent.who} />
            <AboutCard title="Nossa história" block={aboutContent.history} />
            <AboutCard title="Nossa missão" block={aboutContent.mission} />
          </div>
        </Container>
      </section>

      <section className="sl-page-section sl-page-section--alt">
        <Container>
          <div className="sl-page-head">
            <h2 className="sl-page-head__title">Nossa empresa em imagens</h2>
          </div>
          <div className="sl-about__images">
            {images.length > 0 ? (
              images.map((image) => (
                <div key={image.src} className="sl-about__image">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))
            ) : (
              <>
                <ProvisionalBox label="Foto da empresa" ratio="16 / 10" />
                <ProvisionalBox
                  label="Foto de um trabalho realizado"
                  ratio="16 / 10"
                />
              </>
            )}
          </div>
        </Container>
      </section>

      <section className="sl-page-section">
        <Container>
          <div className="sl-page-head">
            <h2 className="sl-page-head__title">Valores e diferenciais</h2>
            {aboutContent.valuesProvisional && <ProvisionalBadge />}
          </div>
          <div className="sl-page-diffs">
            {aboutContent.values.map((item) => (
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

      <section className="sl-page-section sl-page-section--alt">
        <Container>
          <div className="sl-callout">
            <h2 className="sl-about__title">
              Compromisso com qualidade e pontualidade
            </h2>
            {aboutContent.commitment.provisional && <ProvisionalBadge />}
            <p className="sl-muted" style={{ marginTop: "0.75rem" }}>
              {aboutContent.commitment.text}
            </p>
          </div>
        </Container>
      </section>

      <section className="sl-page-section">
        <Container>
          <div className="sl-callout">
            <h2 className="sl-about__title">Região de atendimento</h2>
            <p className="sl-muted" style={{ marginTop: "0.75rem" }}>
              Atendemos {siteConfig.region}.
            </p>
          </div>
        </Container>
      </section>

      <PageCta />
    </main>
  );
}