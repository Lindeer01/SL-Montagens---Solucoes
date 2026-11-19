import { siteConfig } from "@/lib/site";

/*
  Monta o link que abre uma conversa no WhatsApp com mensagem pronta.
  Sem o parâmetro "number", usa o primeiro contato da lista (o principal).
*/
export function getWhatsAppLink(
  message: string = siteConfig.whatsappMessage,
  number: string = siteConfig.whatsappContacts[0].number,
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}