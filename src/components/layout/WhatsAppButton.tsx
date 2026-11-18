import { getWhatsAppLink } from "@/lib/whatsapp";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      className="sl-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir orçamento pelo WhatsApp"
    >
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
      <span className="sl-whatsapp__label">Fale no WhatsApp</span>
    </a>
  );
}