// Título e descrição de cada página — fonte única (ESP-22).
//
// Até aqui as doze páginas partilhavam o mesmo título e a mesma descrição:
// no Google apareciam todas como "MUKANDA PREPA — Preparação para o acesso
// à universidade", sem se distinguirem umas das outras.
//
// Regras que seguimos:
//   - o título começa pelo que a pessoa escreveu na pesquisa e acaba em
//     "· MUKANDA PREPA" (ESP-42). Antes começava pela marca, e isso só nos
//     encontra a quem já nos conhece: quem procura escreve "exame de acesso
//     à universidade", não "MUKANDA PREPA";
//   - Angola ou Luanda entram onde são verdade e fazem falta — na página
//     inicial, no Sobre, na Equipa e nos Contactos. Não em todas: repetir o
//     país em treze títulos é enchimento, e o Google já sabe onde estamos
//     pelos dados estruturados do index.html;
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
  titulo: 'Exame de acesso à universidade em Angola · MUKANDA PREPA',
  descricao: 'Preparação para o exame de acesso ao ensino superior em Angola: maratonas com questões de exames reais, aulas online e uma comunidade de estudantes.',
};

export const META_PAGINAS = {
  '/': META_PADRAO,

  '/sobre': {
    titulo: 'Sobre a MUKANDA PREPA · Preparação em Angola',
    descricao: 'Quem somos, o problema que nos fez nascer e como juntamos maratonas, aulas online e comunidade para preparar os estudantes angolanos para o exame de acesso.',
  },

  '/missao': {
    titulo: 'A nossa missão · MUKANDA PREPA',
    descricao: 'Preparação de qualidade para o exame de acesso ao alcance de qualquer estudante angolano, viva onde viver. A missão, os valores e a visão da MUKANDA PREPA.',
  },

  '/equipa': {
    titulo: 'A nossa equipa · MUKANDA PREPA, Luanda',
    descricao: 'As 17 pessoas que constroem a MUKANDA PREPA em Luanda: fundadores, gestão, suporte informático, marketing e o corpo docente que prepara os estudantes.',
  },

  '/maratonas': {
    titulo: 'Maratonas de exercícios de exames · MUKANDA PREPA',
    descricao: 'Quinze questões de exames reais, 48 horas para responder e uma aula de correcção com professor: as maratonas da edição 2026, em Angola.',
  },

  '/aulas-online': {
    titulo: 'Aulas online de correcção de exames · MUKANDA PREPA',
    descricao: 'Correcção e explicação de cada maratona, ao vivo, com os professores da MUKANDA PREPA. As aulas online da edição 2026 para o exame de acesso em Angola.',
  },

  '/recursos': {
    titulo: 'Exames passados e materiais de estudo · MUKANDA PREPA',
    descricao: 'Exames de acesso passados, materiais de estudo e fichas de apoio para a preparação ao ensino superior em Angola. Acesso gratuito, sem conta.',
  },

  '/noticias': {
    titulo: 'Notícias · MUKANDA PREPA',
    descricao: 'As novidades da MUKANDA PREPA: o balanço da edição 2026, a manutenção da app web e o que vem a seguir para os estudantes angolanos.',
  },

  '/artigos': {
    titulo: 'Artigos de estudo para o exame de acesso · MUKANDA PREPA',
    descricao: 'Artigos dos professores da MUKANDA PREPA, por matéria e por nível, para estudar de graça para o exame de acesso à universidade em Angola.',
  },

  '/blog': {
    titulo: 'Blog · MUKANDA PREPA',
    descricao: 'Notícias da MUKANDA PREPA e artigos dos professores, num só lugar, para acompanhares o projecto e estudares para o exame de acesso.',
  },

  '/contactos': {
    titulo: 'Contactos · MUKANDA PREPA, Luanda, Angola',
    descricao: 'Fala connosco pelo WhatsApp ou por e-mail, e entra na Comunidade MUKANDA. Estamos em Luanda e respondemos todos os dias.',
  },

  '/entrar-na-app': {
    titulo: 'A app está em manutenção · MUKANDA PREPA',
    descricao: 'A app web da MUKANDA PREPA está em manutenção enquanto preparamos a próxima fase. As maratonas e as aulas online retomam brevemente.',
  },

};

export const META_NAO_ENCONTRADA = {
  titulo: 'Página não encontrada · MUKANDA PREPA',
  descricao: 'A página que procuras não existe ou mudou de endereço. Volta à página inicial da MUKANDA PREPA e continua a preparar o exame de acesso.',
};

// As páginas que entram no sitemap.xml.
export const PAGINAS_PUBLICAS = [
  '/', '/sobre', '/missao', '/equipa', '/maratonas', '/aulas-online',
  '/recursos', '/noticias', '/blog', '/contactos', '/entrar-na-app',
];
