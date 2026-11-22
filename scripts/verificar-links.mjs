/*
  Verifica os links das paginas publicas.
  Uso (com o servidor rodando): node scripts/verificar-links.mjs
*/
const base = process.argv[2] ?? "http://localhost:3000";
const paginas = ["/", "/sobre", "/servicos", "/projetos", "/precos", "/contato"];

let falhas = 0;
const jaTestados = new Map();

function relatar(ok, pagina, href, detalhe) {
  if (!ok) falhas++;
  console.log(`${ok ? "OK   " : "FALHA"}  ${pagina.padEnd(10)} ${href}  ${detalhe}`);
}

async function status(caminho) {
  if (!jaTestados.has(caminho)) {
    try {
      const r = await fetch(base + caminho, { redirect: "follow" });
      jaTestados.set(caminho, r.status);
    } catch {
      jaTestados.set(caminho, 0);
    }
  }
  return jaTestados.get(caminho);
}

for (const pagina of paginas) {
  let html = "";
  try {
    const r = await fetch(base + pagina);
    html = await r.text();
    relatar(r.status === 200, pagina, "(a propria pagina)", `status ${r.status}`);
  } catch {
    relatar(false, pagina, "(a propria pagina)", "nao abriu - o servidor esta rodando?");
    continue;
  }

  const hrefs = [...html.matchAll(/<a\s[^>]*href="([^"]+)"/g)].map((m) =>
    m[1].replace(/&amp;/g, "&"),
  );

  for (const href of new Set(hrefs)) {
    if (href.startsWith("#")) {
      const existe = html.includes(`id="${href.slice(1)}"`);
      relatar(existe, pagina, href, existe ? "ancora existe" : "ancora NAO existe");
    } else if (href.startsWith("/")) {
      const s = await status(href.split("#")[0]);
      relatar(s === 200, pagina, href, `status ${s}`);
    } else if (href.startsWith("https://wa.me/")) {
      const numero = href.slice("https://wa.me/".length).split("?")[0];
      const ok = /^\d{12,13}$/.test(numero);
      relatar(ok, pagina, href.slice(0, 40) + "...", ok ? "numero com 12-13 digitos" : "numero invalido: " + numero);
    } else if (href.startsWith("tel:") || href.startsWith("mailto:")) {
      relatar(href.length > 7, pagina, href, "formato ok");
    } else if (href.startsWith("https://")) {
      relatar(true, pagina, href, "link externo (nao testado)");
    } else {
      relatar(false, pagina, href, "tipo de link desconhecido");
    }
  }
}

console.log(falhas === 0 ? "\nTUDO CERTO: nenhum link quebrado." : `\n${falhas} problema(s) encontrado(s).`);
process.exit(falhas === 0 ? 0 : 1);