"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import "./WhatsAppButton.css";

function ChatIcon() {
  return (
    <svg
      className="sl-whatsapp__icon"
      viewBox="0 0 24 24"
      width="26"
      height="26"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 2C6.5 2 2 6.1 2 11.2c0 2.1.8 4 2.1 5.6L3 22l5.4-1.6c1.1.4 2.3.6 3.6.6 5.5 0 10-4.1 10-9.2S17.5 2 12 2z"
      />
      <circle cx="8" cy="11.2" r="1.2" fill="#25d366" />
      <circle cx="12" cy="11.2" r="1.2" fill="#25d366" />
      <circle cx="16" cy="11.2" r="1.2" fill="#25d366" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const contacts = siteConfig.whatsappContacts;
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Com a caixinha aberta: Esc ou um clique fora fecham.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  // Só um contato: o botão abre direto a conversa.
  if (contacts.length <= 1) {
    return (
      <div className="sl-whatsapp-wrap">
        <a
          href={getWhatsAppLink()}
          className="sl-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir orçamento pelo WhatsApp"
        >
          <ChatIcon />
          <span className="sl-whatsapp__label">Fale no WhatsApp</span>
        </a>
      </div>
    );
  }

  // Dois ou mais contatos: o cliente escolhe com quem falar.
  return (
    <div className="sl-whatsapp-wrap" ref={wrapRef}>
      {open && (
        <ul id="menu-whatsapp" className="sl-whatsapp__menu">
          {contacts.map((contact) => (
            <li key={contact.number}>
              <a
                href={getWhatsAppLink(undefined, contact.number)}
                className="sl-whatsapp__option"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Falar com {contact.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        className="sl-whatsapp"
        aria-expanded={open}
        aria-controls="menu-whatsapp"
        aria-label="Escolher com quem falar no WhatsApp"
        onClick={() => setOpen((value) => !value)}
      >
        <ChatIcon />
        <span className="sl-whatsapp__label">Fale no WhatsApp</span>
      </button>
    </div>
  );
}