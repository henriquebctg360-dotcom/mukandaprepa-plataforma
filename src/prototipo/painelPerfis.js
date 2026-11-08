// ESP-05 — Perfis do painel de publicação e o que cada um pode fazer.
// Proposta para a equipa validar (ver /especificacoes).
//
// Fluxo de um conteúdo:  Rascunho → Em revisão → Publicado
//   - quem não pode publicar envia para revisão;
//   - quem pode publicar aprova (ou devolve a rascunho).

export const ESTADOS = {
  rascunho: { nome: 'Rascunho', cor: 'cinza' },
  revisao: { nome: 'Em revisão', cor: 'laranja' },
  publicado: { nome: 'Publicado', cor: 'verde' },
};

export const TIPOS = {
  noticia: { nome: 'Notícia', plural: 'Notícias', rota: '/noticias' },
  artigo: { nome: 'Artigo', plural: 'Artigos', rota: '/artigos' },
};

export const PERFIS = [
  {
    id: 'professor',
    nome: 'Professor',
    descricao: 'Escreve artigos e envia-os para revisão antes de serem publicados.',
    criar: ['artigo'],
    publicar: [],
    editarTodos: [],
    remover: false,
  },
  {
    id: 'marketing',
    nome: 'Marketing',
    descricao: 'Escreve e publica notícias. Escreve artigos, que seguem para revisão.',
    criar: ['noticia', 'artigo'],
    publicar: ['noticia'],
    editarTodos: ['noticia'],
    remover: false,
  },
  {
    id: 'gestor',
    nome: 'Gestor administrativo',
    descricao: 'Revê e publica notícias e artigos de toda a equipa.',
    criar: ['noticia', 'artigo'],
    publicar: ['noticia', 'artigo'],
    editarTodos: ['noticia', 'artigo'],
    remover: true,
  },
  {
    id: 'ceo',
    nome: 'CEO',
    descricao: 'Acesso total: escreve, revê, publica e retira qualquer conteúdo.',
    criar: ['noticia', 'artigo'],
    publicar: ['noticia', 'artigo'],
    editarTodos: ['noticia', 'artigo'],
    remover: true,
  },
];

export const perfilPorId = (id) => PERFIS.find((p) => p.id === id) || null;

export const podeCriar = (perfil, tipo) => Boolean(perfil?.criar.includes(tipo));
export const podePublicar = (perfil, tipo) => Boolean(perfil?.publicar.includes(tipo));
export const podeEditar = (perfil, item) =>
  Boolean(perfil && (perfil.editarTodos.includes(item.tipo) || item.autor?.perfil === perfil.id));
export const podeRemover = (perfil) => Boolean(perfil?.remover);

// Sessão do protótipo (sem palavra-passe): o perfil escolhido fica no navegador.
const CHAVE = 'mukanda-prototipo-painel-perfil';
export function lerSessao() {
  try { return perfilPorId(localStorage.getItem(CHAVE)); } catch { return null; }
}
export function iniciarSessao(id) {
  try { localStorage.setItem(CHAVE, id); } catch { /* sem armazenamento */ }
}
export function terminarSessao() {
  try { localStorage.removeItem(CHAVE); } catch { /* sem armazenamento */ }
}
