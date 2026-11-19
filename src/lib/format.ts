import type { ServicePrice } from "@/types/content";

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/* Transforma o preço cadastrado no texto exibido no site. */
export function formatPrice(price?: ServicePrice): string {
  if (!price || price.type === "consult" || price.value === undefined) {
    return "Sob consulta";
  }
  const value = brl.format(price.value);
  return price.type === "starting" ? `A partir de ${value}` : value;
}