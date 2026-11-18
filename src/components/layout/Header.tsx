"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import "./Header.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Com o menu aberto: Esc fecha, a página de trás não rola
  // e o menu fecha sozinho se a janela virar tela de computador.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string): boolean =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sl-header">
      <Container className="sl-header__inner">
        <Link
          href="/"
          className="sl-header__logo"
          aria-label={`${siteConfig.name} – página inicial`}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo/sl-logo-horizontal.png"
            alt={siteConfig.name}
            width={1200}
            height={274}
            priority
            className="sl-header__logo-image"
          />
        </Link>

        <button
          type="button"
          className="sl-header__toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sl-header__bar" />
          <span className="sl-header__bar" />
          <span className="sl-header__bar" />
        </button>

        <nav
          id="menu-principal"
          aria-label="Principal"
          className={`sl-header__nav ${open ? "sl-header__nav--open" : ""}`.trim()}
        >
          <ul className="sl-header__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`sl-header__link ${isActive(link.href) ? "sl-header__link--active" : ""}`.trim()}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button href={getWhatsAppLink()} external>
            Pedir orçamento
          </Button>
        </nav>
      </Container>
    </header>
  );
}