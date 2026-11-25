/*
  Testa o banco como um VISITANTE (so com a chave publica).
  Uso: node --env-file=.env.local scripts/testar-banco.mjs
*/
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  console.log("ERRO: faltam variaveis no .env.local (URL ou chave).");
  process.exit(1);
}

let falhas = 0;

async function testar(titulo, metodo, caminho, esperado, corpo) {
  let status = 0;
  let texto = "";
  try {
    const r = await fetch(`${url}/rest/v1/${caminho}`, {
      method: metodo,
      headers: {
        apikey: key,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: corpo ? JSON.stringify(corpo) : undefined,
    });
    status = r.status;
    texto = (await r.text()).slice(0, 110).replace(/\s+/g, " ");
  } catch (e) {
    texto = e.message;
  }
  const ok = esperado.includes(status);
  if (!ok) falhas++;
  console.log(`${ok ? "OK   " : "FALHA"}  ${titulo}\n       status ${status} (esperado ${esperado.join(" ou ")})  ${texto}`);
}

console.log("--- O visitante PODE ler o conteudo publico ---");
await testar("Ler servicos publicados", "GET", "services?select=name&is_published=eq.true", [200]);
await testar("Ler categorias de servicos", "GET", "service_categories?select=title", [200]);
await testar("Ler configuracoes da empresa", "GET", "site_settings?select=company_name", [200]);
await testar("Ler contatos de WhatsApp", "GET", "whatsapp_contacts?select=name", [200]);
await testar("Ler textos das paginas", "GET", "page_contents?select=key", [200]);

console.log("\n--- O visitante NAO pode ler nem alterar o que e privado ---");
await testar("Ler mensagens recebidas", "GET", "contact_messages?select=*", [401, 403]);
await testar("Ler lista de administradores", "GET", "admins?select=*", [401, 403]);
await testar("Cadastrar administrador", "POST", "admins", [401, 403], {
  user_id: "00000000-0000-0000-0000-000000000000",
  email: "intruso@example.com",
});
await testar("Alterar um servico", "PATCH", "services?slug=eq.montagem-moveis", [401, 403, 404], {
  name: "Alterado por visitante",
});
await testar("Apagar um servico", "DELETE", "services?slug=eq.montagem-moveis", [401, 403, 404]);

console.log(falhas === 0 ? "\nTUDO CERTO: o banco se comporta como esperado." : `\n${falhas} teste(s) com problema.`);
process.exitCode = falhas === 0 ? 0 : 1;