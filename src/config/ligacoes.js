// Para onde cada página manda a seguir (ESP-43).
//
// Fonte única das ligações do bloco "Continua por aqui", no fim das páginas.
// Estão aqui e não espalhadas pelas páginas por duas razões: vê-se de uma vez
// se alguma página ficou sem saída, e mudar um destino não obriga a abrir
// cinco ficheiros.
//
// Regras que seguimos ao escolher:
//   - duas ou três por página, nunca mais. Uma lista de dez não é uma
//     escolha, é um menu — e quem chega ao fim de uma página já tem menu;
//   - só páginas que continuam o assunto. Quem acabou de ler as Maratonas
//     quer saber das Aulas Online, não da Equipa;
//   - nunca a própria página, e nunca /artigos enquanto a secção estiver
//     escondida (ARTIGOS_VISIVEIS, na ESP-19).

export const LIGACOES = {
  '/maratonas': [
    {
      para: '/aulas-online',
      nome: 'Aulas Online 2026',
      resumo: 'A correcção de cada maratona, ao vivo, com um professor.',
    },
    {
      para: '/recursos',
      nome: 'Recursos gratuitos',
      resumo: 'Exames passados e material de estudo, sem conta nem registo.',
    },
    {
      para: '/noticias',
      nome: 'Notícias',
      resumo: 'O balanço da edição 2026 e o que vem a seguir.',
    },
  ],

  '/aulas-online': [
    {
      para: '/maratonas',
      nome: 'Maratonas MUKANDA 2026',
      resumo: 'Quinze questões de exames reais e 48 horas para responder.',
    },
    {
      para: '/recursos',
      nome: 'Recursos gratuitos',
      resumo: 'Exames passados e material de estudo, sem conta nem registo.',
    },
    {
      para: '/equipa',
      nome: 'Os professores',
      resumo: 'Quem dá as aulas e quem constrói a MUKANDA PREPA.',
    },
  ],

  '/recursos': [
    {
      para: '/maratonas',
      nome: 'Maratonas MUKANDA 2026',
      resumo: 'Treinar com questões de exames de acesso reais.',
    },
    {
      para: '/aulas-online',
      nome: 'Aulas Online 2026',
      resumo: 'Ver a correcção explicada por um professor.',
    },
    {
      para: '/contactos',
      nome: 'Falar connosco',
      resumo: 'Pedir um material que não esteja aqui.',
    },
  ],

  '/noticias': [
    {
      para: '/maratonas',
      nome: 'Maratonas MUKANDA 2026',
      resumo: 'Como funcionaram, e os números da edição.',
    },
    {
      para: '/sobre',
      nome: 'Sobre nós',
      resumo: 'O problema que nos fez nascer e o que estamos a construir.',
    },
    {
      para: '/entrar-na-app',
      nome: 'A app',
      resumo: 'Em que ponto está a app web e o que vem a seguir.',
    },
  ],

  '/equipa': [
    {
      para: '/sobre',
      nome: 'Sobre nós',
      resumo: 'O problema que nos fez nascer e o que estamos a construir.',
    },
    {
      para: '/missao',
      nome: 'A nossa missão',
      resumo: 'Os valores e a visão que guiam o trabalho desta equipa.',
    },
  ],

  '/missao': [
    {
      para: '/sobre',
      nome: 'Sobre nós',
      resumo: 'Como juntamos maratonas, aulas e comunidade.',
    },
    {
      para: '/equipa',
      nome: 'A nossa equipa',
      resumo: 'As 17 pessoas que fazem isto acontecer, em Luanda.',
    },
    {
      para: '/maratonas',
      nome: 'Maratonas MUKANDA 2026',
      resumo: 'A missão posta em prática, na edição deste ano.',
    },
  ],

  '/contactos': [
    {
      para: '/sobre',
      nome: 'Sobre nós',
      resumo: 'Quem somos, antes de falares connosco.',
    },
    {
      para: '/recursos',
      nome: 'Recursos gratuitos',
      resumo: 'Talvez o que procuras já esteja aqui.',
    },
  ],
};

// As páginas de notícia e de artigo não têm caminho fixo — são
// /noticias/<nome> e /artigos/<nome> — e são precisamente as que o Google
// mais usa para deixar lá gente: quem procura "maratona nacional" cai numa
// notícia, não na página inicial. Sem isto, essa pessoa lê a notícia e não
// tem para onde ir a não ser o menu.
const POR_PREFIXO = [
  ['/noticias/', [
    {
      para: '/maratonas',
      nome: 'Maratonas MUKANDA 2026',
      resumo: 'Quinze questões de exames reais e 48 horas para responder.',
    },
    {
      para: '/recursos',
      nome: 'Recursos gratuitos',
      resumo: 'Exames passados e material de estudo, sem conta nem registo.',
    },
    {
      para: '/noticias',
      nome: 'Todas as notícias',
      resumo: 'O que mais se passou na MUKANDA PREPA.',
    },
  ]],
  ['/artigos/', [
    {
      para: '/artigos',
      nome: 'Todos os artigos',
      resumo: 'Por matéria e por nível, para estudar de graça.',
    },
    {
      para: '/recursos',
      nome: 'Recursos gratuitos',
      resumo: 'Exames passados e fichas de apoio.',
    },
    {
      para: '/maratonas',
      nome: 'Maratonas MUKANDA 2026',
      resumo: 'Pôr à prova o que acabaste de ler.',
    },
  ]],
];

export const ligacoesDe = (caminho) => {
  if (LIGACOES[caminho]) return LIGACOES[caminho];
  const prefixo = POR_PREFIXO.find(([p]) => caminho.startsWith(p));
  return prefixo ? prefixo[1] : [];
};
