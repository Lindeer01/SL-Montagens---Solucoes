import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  // Sem depoimentos aprovados, a seção não aparece.
  if (testimonials.length === 0) return null;

  return (
    <section className="sl-section sl-section--alt">
      <Container>
        <div className="sl-section__head">
          <SectionTitle
            eyebrow="Depoimentos"
            title="O que nossos clientes dizem"
          />
        </div>

        <div className="sl-testimonials">
          {testimonials.map((item) => (
            <Card key={item.id} className="sl-testimonial">
              <blockquote className="sl-testimonial__text">
                “{item.text}”
              </blockquote>
              <p className="sl-testimonial__author">
                {item.name}
                {item.detail && (
                  <span className="sl-testimonial__detail">{item.detail}</span>
                )}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}