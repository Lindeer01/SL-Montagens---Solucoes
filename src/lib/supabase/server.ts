/*
  Cliente do Supabase para o SERVIDOR quando ha login envolvido
  (painel admin, Server Actions). Guarda a sessao do login em cookies.
*/
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Chamado de um Server Component: nao da para gravar cookies ali.
            // Sem problema, o proxy da Fase 10 renova a sessao.
          }
        },
      },
    },
  );
}