// Título e descrição de cada página — fonte única (ESP-22).
//
// Até aqui as doze páginas partilhavam o mesmo título e a mesma descrição:
// no Google apareciam todas como "MUKANDA PREPA — Preparação para o acesso
// à universidade", sem se distinguirem umas das outras.
//
// Regras que seguimos:
//   - o título diz o que a pessoa vai encontrar, e acaba em "· MUKANDA PREPA"
//     (a página inicial é a excepção: leva a marca à frente);
//   - a descrição tem entre 120 e 160 caracteres — acima disso o Google corta;
//   - nada de repetir a mesma frase em páginas diferentes.
//
// As páginas de notícia e de artigo não estão aqui: usam o título e o resumo
// do próprio conteúdo (ver src/pages/ConteudoDetalhe.jsx).

// Avisado por useMeta sempre que o título e a descrição de uma página ficam
// escritos (ESP-39). Quem precisa de saber o título certo — hoje só o
// Analytics — espera por isto em vez de adivinhar o momento.
//
// Era preciso porque as páginas são carregadas à parte: na primeira visita a
// uma delas, o <head> ainda tem o título da página anterior quando o resto da
// aplicação já reagiu à mudança de rota.
export const EVENTO_META = 'mukandaprepa:meta';

export const SITE_NOME = 'MUKANDA PREPA';
export const SITE_URL = 'https://www.mukandaprepa.com';

export const META_PADRAO = {
  titulo: 'MUKANDA PREPA — Preparação para o acesso à universidade',
  descricao:
    'Plataforma angolana de preparação para os exames de acesso ao ensino superior: maratonas de exercícios, aulas online e uma comunidade de estudantes.',
};

export const META_PAGINAS = {
  '/': META_PADRAO,

  '/sobre': {
    titulo: 'Sobre nós · MUKANDA PREPA',
    descricao:
      'Quem somos, o problema que nos fez nascer e como juntamos maratonas, aulas online e comunidade para preparar os estudantes angolanos.',
  },

  '/missao': {
    titulo: 'A Nossa Missão · MUKANDA PREPA',
    descricao:
      'A missão, os valores e a visão da MUKANDA PREPA: preparação de qualidade ao alcance de qualquer estudante angolano, viva onde viver.',
  },

  '/equipa': {
    titulo: 'A Nossa Equipa · MUKANDA PREPA',
    descricao:
      'As 17 pessoas que constroem a MUKANDA PREPA: fundadores, gestão e administração, suporte informático, marketing e corpo docente.',
  },

  '/maratonas': {
    titulo: 'Maratonas MUKANDA 2026 · MUKANDA PREPA',
    descricao:
      'Como funcionaram as maratonas da edição 2026: quinze questões de exames reais, 48 horas para responder e uma aula de correcção com professor.',
  },

  '/aulas-online': {
    titulo: 'Aulas Online 2026 · MUKANDA PREPA',
    descricao:
      'As aulas online da edição 2026: correcção e explicação de cada maratona, ao vivo, com os professores da MUKANDA PREPA.',
  },

  '/recursos': {
    titulo: 'Recursos gratuitos · MUKANDA PREPA',
    descricao:
      'Exames passados, materiais de estudo e fichas de apoio para a preparação do acesso ao ensino superior em Angola. Acesso gratuito.',
  },

  '/noticias': {
    titulo: 'Notícias · MUKANDA PREPA',
    descricao:
      'As novidades da MUKANDA PREPA: o balanço da edição 2026, a manutenção da app web e o que vem a seguir para os estudantes.',
  },

  '/artigos': {
    titulo: 'Artigos · MUKANDA PREPA',
    descricao:
      'Artigos dos professores da MUKANDA PREPA, por matéria e por nível, para estudar de graça para os exames de acesso.',
  },

  '/blog': {
    titulo: 'Blog · MUKANDA PREPA',
    descricao:
      'Notícias da MUKANDA PREPA e artigos dos professores, num só lugar, para acompanhares o projecto e estudares para o exame de acesso.',
  },

  '/contactos': {
    titulo: 'Contactos · MUKANDA PREPA',
    descricao:
      'Fala connosco pelo WhatsApp ou por e-mail, e entra na Comunidade MUKANDA para acompanhares as novidades em primeira mão.',
  },

  '/entrar-na-app': {
    titulo: 'A app está em manutenção · MUKANDA PREPA',
    descricao:
      'A app web da MUKANDA PREPA está em manutenção enquanto preparamos a próxima fase. As maratonas e as aulas online retomam brevemente.',
  },

};

export const META_NAO_ENCONTRADA = {
  titulo: 'Página não encontrada · MUKANDA PREPA',
  descricao: 'A página que procuras não existe ou mudou de endereço. Volta à página inicial da MUKANDA PREPA.',
};

// As páginas que entram no sitemap.xml.
export const PAGINAS_PUBLICAS = [
  '/', '/sobre', '/missao', '/equipa', '/maratonas', '/aulas-online',
  '/recursos', '/noticias', '/blog', '/contactos', '/entrar-na-app',
];
