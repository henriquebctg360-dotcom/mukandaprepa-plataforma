// ESP-02 — propostas de hero em comparação no protótipo.
//
// A variante escolhida vem do endereço (?hero=b), para se poder partilhar um
// link directo para cada proposta; sem parâmetro, usa a última escolhida
// neste navegador, e na primeira visita a A.

export const VARIANTES_HERO = [
  { id: 'a', nome: 'A · Números em destaque' },
  { id: 'b', nome: 'B · Clássica com faixa de números' },
  { id: 'c', nome: 'C · Comunidade primeiro' },
];

const CHAVE = 'mukanda-prototipo-hero';
const valida = (id) => VARIANTES_HERO.some((v) => v.id === id);

export function lerVarianteHero(params) {
  const daUrl = params.get('hero');
  if (valida(daUrl)) return daUrl;
  try {
    const guardada = localStorage.getItem(CHAVE);
    if (valida(guardada)) return guardada;
  } catch { /* sem armazenamento */ }
  return 'a';
}

export function guardarVarianteHero(id) {
  try { localStorage.setItem(CHAVE, id); } catch { /* sem armazenamento */ }
}
