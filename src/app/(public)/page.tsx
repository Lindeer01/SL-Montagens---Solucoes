import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import "./home.css";

/* Página de teste da Fase 3. Será substituída na Fase 5. */
export default function HomePage() {
  return (
    <main>
      <section className="home-section">
        <Container>
          <SectionTitle
            eyebrow="Teste de componentes"
            title="SL Montagens & Serviços"
            subtitle="Precisão em cada detalhe."
          />

          <div className="home-grid">
            <Card>
              <h3>Montagem de móveis</h3>
              <p className="home-text">
                Guarda-roupas, cozinhas, painéis, racks, camas e cômodas.
              </p>
            </Card>
            <Card>
              <h3>Iluminação LED</h3>
              <p className="home-text">
                Instalação de fitas, perfis e iluminação sob medida.
              </p>
            </Card>
            <Card>
              <h3>Serviços elétricos</h3>
              <p className="home-text">
                Instalações elétricas relacionadas aos serviços oferecidos.
              </p>
            </Card>
          </div>

          <div className="home-actions">
            <Button href="/servicos" size="lg">
              Ver serviços
            </Button>
            <Button href="/contato" variant="secondary" size="lg">
              Fale conosco
            </Button>
            <Button href="/sobre" variant="ghost" size="lg">
              Sobre nós
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}