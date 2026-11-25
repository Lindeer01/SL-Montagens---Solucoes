/*
  Cliente do Supabase para componentes do NAVEGADOR (arquivos com "use client").
  Usa so a chave publica (publishable). A seguranca vem das regras RLS do banco.
*/
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}