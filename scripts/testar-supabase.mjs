/*
  Teste rapido de conexao com o Supabase.
  Uso: node --env-file=.env.local scripts/testar-supabase.mjs
*/
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  console.log("ERRO: faltam variaveis no .env.local (URL ou chave).");
  process.exit(1);
}

console.log("URL:", url);
console.log("Chave comeca com:", key.slice(0, 15) + "...");

try {
  const resposta = await fetch(`${url}/auth/v1/health`, {
    headers: { apikey: key },
  });
  console.log("Status:", resposta.status);
  console.log(await resposta.text());
  console.log(
    resposta.ok
      ? "OK: conexao com o Supabase funcionando."
      : "ERRO: o Supabase respondeu, mas recusou. Confira a chave.",
  );
} catch (erro) {
  console.log("ERRO: nao consegui falar com o Supabase.", erro.message);
}
process.exitCode = 0;