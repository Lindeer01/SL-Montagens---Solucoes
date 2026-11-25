/*
  Cliente do Supabase para ler o conteudo PUBLICO do site (servicos, projetos,
  precos...). Nao usa cookies nem login, entao as paginas continuam rapidas.
  O que ele consegue ler e decidido pelas regras RLS do banco.
*/
import { createClient } from "@supabase/supabase-js";

export function createPublicClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    },
  );
}