import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import SectionTitle from "@/components/ui/SectionTitle";
import { differentials } from "@/lib/content";

export default function Differentials() {
  return (
    <section className="sl-section sl-section--alt">
      <Container>
        <div className="sl-section__head">
          <SectionTitle
            eyebrow="Diferenciais"
            title="Por que escolher a SL Montagens"
            subtitle="Cuidado em cada etapa, do primeiro contato à entrega."
          />
        </div>

        <div className="sl-diffs">
          {differentials.map((item) => (
            <div key={item.id} className="sl-diff">
              <span className="sl-icon-box">
                <Icon name={item.icon} size={26} />
              </span>
              <h3 className="sl-diff__title">{item.title}</h3>
              <p className="sl-diff__text">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}