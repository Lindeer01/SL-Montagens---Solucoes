import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import "./layout.css";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="sl-shell">
      <a href="#conteudo" className="sl-skip">
        Pular para o conteúdo
      </a>
      <Header />
      <div id="conteudo" className="sl-content">
        {children}
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}