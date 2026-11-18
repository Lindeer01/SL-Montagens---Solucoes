import { siteConfig } from "@/lib/site";

/* Monta o link que abre uma conversa no WhatsApp com mensagem pronta. */
export function getWhatsAppLink(
  message: string = siteConfig.whatsappMessage,
): string {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}