// ESP-05 — Conteúdos geridos pelo painel de publicação (versão protótipo).
//
// No protótipo não há servidor: as notícias e artigos criados ou editados no
// painel ficam guardados no navegador (localStorage) e juntam-se aos que
// estão em src/config/noticias.js e src/config/artigos.js. Assim o fluxo
// completo — escrever, rever, publicar, ver no site — pode ser experimentado.
//
// Na versão real, este ficheiro é substituído por chamadas à API
// (ver /especificacoes, ESP-05).
import { NOTICIAS } from '../config/noticias';
import { ARTIGOS } from '../config/artigos';

const CHAVE = 'mukanda-prototipo-conteudos';
export const EVENTO = 'mukanda-conteudos';

const MESES = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export const dataDeHoje = () => {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, '0')} ${MESES[d.getMonth()]} ${d.getFullYear()}`;
};

export const slug = (texto) =>
  String(texto)
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    .slice(0, 70);

const BASE = [
  ...NOTICIAS.map((n) => ({
    id: `noticia-${slug(n.titulo)}`,
    tipo: 'noticia',
    titulo: n.titulo,
    resumo: n.resumo,
    corpo: n.resumo,
    cor: n.cor,
    data: n.data,
    estado: 'publicado',
    autor: { nome: 'Equipa MUKANDA PREPA', perfil: 'marketing' },
    exemplo: Boolean(n.exemplo),
  })),
  ...ARTIGOS.map((a) => ({
    id: `artigo-${slug(a.titulo)}`,
    tipo: 'artigo',
    titulo: a.titulo,
    resumo: `Artigo de ${a.materia}, nível ${a.nivel.toLowerCase()}.`,
    corpo: '',
    materia: a.materia,
    nivel: a.nivel,
    data: a.data,
    estado: 'publicado',
    autor: { nome: 'Corpo docente', perfil: 'professor' },
    exemplo: true,
  })),
];

function lerGuardados(raw) {
  try {
    const dados = JSON.parse(raw || '{}');
    return { itens: dados.itens || [], removidos: dados.removidos || [] };
  } catch {
    return { itens: [], removidos: [] };
  }
}

function lerRaw() {
  try { return localStorage.getItem(CHAVE); } catch { return null; }
}

function gravar(dados) {
  try { localStorage.setItem(CHAVE, JSON.stringify(dados)); } catch { /* sem armazenamento */ }
  window.dispatchEvent(new Event(EVENTO));
}

// Junta os conteúdos de base com os do painel. Os novos aparecem primeiro;
// os de base editados no painel mantêm o lugar.
function combinar(raw) {
  const { itens, removidos } = lerGuardados(raw);
  const porId = new Map(itens.map((i) => [i.id, i]));
  const idsBase = new Set(BASE.map((b) => b.id));
  const novos = itens
    .filter((i) => !idsBase.has(i.id))
    .sort((a, b) => (b.criadoEm || 0) - (a.criadoEm || 0));
  const base = BASE
    .filter((b) => !removidos.includes(b.id))
    .map((b) => porId.get(b.id) || b);
  return [...novos, ...base];
}

let cacheRaw;
let cache = [];

export function lerConteudos() {
  const raw = lerRaw();
  if (raw !== cacheRaw) {
    cacheRaw = raw;
    cache = combinar(raw);
  }
  return cache;
}

export function guardarConteudo(item) {
  const dados = lerGuardados(lerRaw());
  const agora = Date.now();
  const completo = { ...item, atualizadoEm: agora, criadoEm: item.criadoEm || agora };
  const i = dados.itens.findIndex((x) => x.id === completo.id);
  if (i >= 0) dados.itens[i] = completo; else dados.itens.push(completo);
  gravar(dados);
  return completo;
}

export function removerConteudo(id) {
  const dados = lerGuardados(lerRaw());
  dados.itens = dados.itens.filter((x) => x.id !== id);
  if (BASE.some((b) => b.id === id) && !dados.removidos.includes(id)) dados.removidos.push(id);
  gravar(dados);
}

// Volta ao conteúdo original do protótipo (apaga só o que foi feito no painel).
export function reporConteudos() {
  try { localStorage.removeItem(CHAVE); } catch { /* sem armazenamento */ }
  window.dispatchEvent(new Event(EVENTO));
}

export const novoId = (tipo, titulo) => `${tipo}-${slug(titulo) || 'sem-titulo'}-${Date.now().toString(36)}`;
