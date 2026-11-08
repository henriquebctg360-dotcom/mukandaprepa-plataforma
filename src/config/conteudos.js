// Notícias e artigos, prontos a mostrar — fonte única das listas e das
// páginas de detalhe.
//
// ESP-26: substitui o antigo src/prototipo/conteudos.js, que juntava o que
// estava no código com o que fosse criado no painel de publicação. O painel
// foi cancelado (ESP-21): os conteúdos vivem só nos ficheiros de
// configuração e são publicados com o código.
//
// Para acrescentar uma notícia ou um artigo: editar src/config/noticias.js
// ou src/config/artigos.js. O endereço de cada página é gerado a partir do
// título, por isso não é preciso inventar nenhum.

import { NOTICIAS } from './noticias';
import { ARTIGOS } from './artigos';

// "Vem aí a app mobile" → "vem-ai-a-app-mobile"
export const slug = (texto) =>
  String(texto)
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    .slice(0, 70);

export const CONTEUDOS = [
  ...NOTICIAS.map((n) => ({
    id: `noticia-${slug(n.titulo)}`,
    tipo: 'noticia',
    titulo: n.titulo,
    resumo: n.resumo,
    corpo: n.corpo || n.resumo,
    cor: n.cor,
    imagem: n.imagem || null,
    data: n.data,
    autor: { nome: n.autor || 'Equipa MUKANDA PREPA' },
  })),
  ...ARTIGOS.map((a) => ({
    id: `artigo-${slug(a.titulo)}`,
    tipo: 'artigo',
    titulo: a.titulo,
    resumo: a.resumo || `Artigo de ${a.materia}, nível ${a.nivel.toLowerCase()}.`,
    corpo: a.corpo || '',
    materia: a.materia,
    nivel: a.nivel,
    data: a.data,
    autor: { nome: a.autor || 'Corpo docente' },
  })),
];

export const publicados = (tipo) => CONTEUDOS.filter((c) => c.tipo === tipo);

export const porId = (tipo, id) =>
  CONTEUDOS.find((c) => c.tipo === tipo && c.id === id);
