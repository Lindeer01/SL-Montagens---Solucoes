import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import "./Footer.css";

export default function Footer() {
  const { instagram, phone, email, address } = siteConfig;

  return (
    <footer className="sl-footer">
      <Container>
        <div className="sl-footer__grid">
          <div className="sl-footer__brand">
            <Image
              src="/images/logo/sl-logo-horizontal.png"
              alt={siteConfig.name}
              width={1200}
              height={274}
              className="sl-footer__logo"
            />
            <p className="sl-footer__description">{siteConfig.description}</p>
            <p className="sl-footer__slogan">{siteConfig.slogan}</p>
          </div>

          <nav aria-label="Rodapé">
            <h3 className="sl-footer__heading">Navegação</h3>
            <ul className="sl-footer__list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="sl-footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="sl-footer__heading">Contato</h3>
            <ul className="sl-footer__list">
              <li>
                <a
                  href={getWhatsAppLink()}
                  className="sl-footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </li>
              {instagram && (
                <li>
                  <a
                    href={`https://instagram.com/${instagram}`}
                    className="sl-footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram @{instagram}
                  </a>
                </li>
              )}
              {phone && (
                <li>
                  <a
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="sl-footer__link"
                  >
                    {phone}
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a href={`mailto:${email}`} className="sl-footer__link">
                    {email}
                  </a>
                </li>
              )}
              {address && <li className="sl-footer__text">{address}</li>}
              <li className="sl-footer__text">
                Atendemos: {siteConfig.region}
              </li>
            </ul>
          </div>
        </div>

        <div className="sl-footer__bottom">
          <p>© {siteConfig.name}. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}