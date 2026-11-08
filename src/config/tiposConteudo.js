// Os dois tipos de conteúdo do site, e onde cada um vive.
//
// ESP-21 (08 Nov 2026): estava em src/prototipo/painelPerfis.js, que saiu com
// o painel de publicação. Fica aqui porque a página de notícia e de artigo
// precisa dele para saber o título e a rota de retorno.
export const TIPOS = {
  noticia: { nome: 'Notícia', plural: 'Notícias', rota: '/noticias' },
  artigo: { nome: 'Artigo', plural: 'Artigos', rota: '/artigos' },
};
