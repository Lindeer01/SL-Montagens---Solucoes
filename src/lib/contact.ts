import { getWhatsAppLink } from "@/lib/whatsapp";
import type { ContactMessage } from "@/types/content";

export type ContactResult = {
  ok: boolean;
  error?: string;
};

/*
  Envio do formulario de contato.

  HOJE: abre o WhatsApp com a mensagem pronta.
  FUTURO (fase do Supabase): salvar a mensagem na tabela de mensagens de
  contato e, depois, abrir o WhatsApp. A tela do formulario nao precisa
  mudar, so esta funcao.

  Atencao: o navegador so permite abrir uma nova aba logo apos o clique.
  Quando acrescentarmos o salvamento no banco, o WhatsApp deve ser aberto
  antes do "await" ou por um botao de confirmacao.
*/
export async function sendContactMessage(
  data: ContactMessage,
): Promise<ContactResult> {
  try {
    const lines = [
      `Olá! Meu nome é ${data.name.trim()}.`,
      `Serviço: ${data.service}`,
      "",
      data.message.trim(),
    ];
    if (data.phone.trim()) {
      lines.push("", `Meu telefone: ${data.phone.trim()}`);
    }

    window.open(
      getWhatsAppLink(lines.join("\n"), data.contact),
      "_blank",
      "noopener,noreferrer",
    );
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Não foi possível abrir o WhatsApp. Tente pelo botão de WhatsApp.",
    };
  }
}