import { CONTACTO, COMUNIDADE_URL, redePorId } from './contactos';

// Notícias do site — fonte única.
//
// A página Notícias mostra todas; a página Blog e a home mostram as mais
// recentes; /noticias/:id abre o texto completo.
//
// ESP-13 (29 Set 2026): entraram os seis textos reais escritos pela equipa de
// Marketing (folha de recolha). Deixaram de ser textos de exemplo.
//
// COMO ESCREVER O `corpo`
//   Parágrafos separados por uma linha em branco.
//   "## " no início da linha  → subtítulo
//   "- " no início da linha   → item de lista
//   "> " no início da linha   → citação em destaque
//   Endereços de internet e e-mails viram ligações sozinhos.
//
// IMAGENS (ESP-18, 08 Nov 2026): cada notícia tem uma imagem provisória em
// SVG, desenhada com as cores da marca, enquanto o Leonel Macaia não entrega
// as definitivas. Ficheiros em public/noticia-*.svg, 1200x630.
// Quando as verdadeiras chegarem: guardar em public/noticia-nome.webp
// (1200x630, até 200 kB) e trocar o caminho do .svg pelo do .webp. Sem
// imagem, o cartão e a página voltam a mostrar a faixa com a cor da notícia.

// Blocos repetidos no fim das notícias, para não andarem copiados seis vezes.
//
// ESP-33: os endereços deixaram de estar escritos aqui e vêm de
// src/config/contactos.js, para não poderem divergir dos do rodapé. A lista
// é a mesma de sempre — Facebook e Instagram — e não a das quatro redes: as
// notícias são registo histórico e o texto publicado não se reescreve.
const CANAIS = `- Facebook: ${redePorId('facebook').url}
- Instagram: ${redePorId('instagram').url}
- Grupo de WhatsApp: ${COMUNIDADE_URL}
- WhatsApp de suporte: ${CONTACTO.telefoneLegivel}
- E-mail: ${CONTACTO.emailSuporte}`;

const SOBRE = `## Sobre a MUKANDA PREPA

A MUKANDA PREPA é uma plataforma digital angolana dedicada à preparação dos estudantes para os exames de acesso às universidades, com conteúdos, exercícios e aulas online pensados para a realidade do ensino em Angola.`;

export const NOTICIAS = [
  {
    titulo: 'Vem aí a app mobile MUKANDA PREPA',
    data: '25 Set 2026',
    cor: '#1742E7',
    imagem: '/noticia-app-mobile.svg',
    resumo: 'A MUKANDA PREPA está a dar o próximo grande passo: da app web para uma app mobile, com mais funcionalidades e toda a preparação para os exames de acesso na palma da mão.',
    corpo: `A preparação para os exames de acesso ao ensino superior em Angola está prestes a mudar. As equipas de desenvolvimento da MUKANDA PREPA estão a trabalhar na transformação da actual app web numa app mobile, criada para acompanhar os estudantes onde quer que estejam: em casa, a caminho da escola ou naquele intervalo entre aulas.

## O estudo cabe no bolso

Com a nova app, abrir o telemóvel vai passar a ser abrir a porta à universidade. Tudo o que os estudantes já conheciam da MUKANDA PREPA vai ganhar uma nova vida, mais rápida, mais prática e pensada de raiz para o ecrã do telemóvel.

## Mais conteúdos, mais formas de aprender

A app mobile chega com novas funcionalidades pensadas para quem quer entrar preparado:

- Maratonas sempre disponíveis: as maratonas de aulas já publicadas poderão ser revistas a qualquer momento, quantas vezes for preciso.
- Fichas de resumo das matérias: o essencial de cada tema, organizado para rever antes do exame.
- Novas maratonas de aulas online, que regressam na nova fase.

## E isto é só o começo

Nos bastidores, está a nascer mais um projecto: as aulas de reforço universitário, com mais disciplinas, para continuar ao lado dos estudantes depois de conquistarem a vaga. Os detalhes ainda estão guardados, mas uma coisa é certa: a MUKANDA PREPA não quer apenas ajudar a entrar na universidade, quer ajudar a vencer lá dentro.

## Quem já faz parte, continua

Os estudantes inscritos na fase anterior continuarão a ter acesso ao seu painel e aos conteúdos já disponibilizados.

> "Sabemos que o telemóvel é a principal ferramenta de estudo de muitos jovens angolanos. Por isso decidimos ir mais longe e levar a MUKANDA PREPA para onde os estudantes estão. O que vem aí vai mudar a forma como se preparam para os exames de acesso", afirma Henrique Catraio, CEO e fundador da MUKANDA PREPA.

## Fica atento: a contagem decrescente já começou

A data de lançamento será anunciada em primeira mão nos canais oficiais. Para seres dos primeiros a saber, segue a MUKANDA PREPA:

${CANAIS}

A universidade começa aqui. E, muito em breve, começa no teu telemóvel.

${SOBRE}`,
  },
  {
    titulo: 'A app web MUKANDA PREPA entra em manutenção',
    data: '16 Set 2026',
    cor: '#14141F',
    imagem: '/noticia-manutencao.svg',
    resumo: 'Para preparar a próxima fase, a app web fica temporariamente em manutenção. As maratonas e as aulas online retomam brevemente.',
    corpo: `A App Web MUKANDA PREPA, plataforma digital de preparação para os exames de acesso ao ensino superior em Angola, está em manutenção desde 16 de Setembro de 2026. A pausa é temporária e serve para preparar a próxima fase do projecto, com uma plataforma mais completa e ajustada às necessidades dos estudantes.

A grande novidade é a chegada da MUKANDA PREPA ao telemóvel, com uma app mobile pensada para facilitar o estudo em qualquer lugar. Na nova fase, os estudantes vão também poder rever as maratonas publicadas anteriormente e consultar fichas de resumo das matérias, entre outros conteúdos de apoio.

E há mais a caminho. A equipa está a desenvolver um novo projecto de aulas de reforço universitário, com mais disciplinas, para acompanhar os estudantes também depois da entrada na universidade. Mais detalhes serão partilhados em breve.

Enquanto durar a manutenção, não é possível aceder à app web, incluindo exercícios, simulados e área pessoal. As maratonas das aulas online também estão em pausa, mas retomam brevemente, e a data de regresso será anunciada nos canais oficiais da MUKANDA PREPA.

Os estudantes que se inscreveram na fase anterior, em que todas as inscrições foram gratuitas, continuarão a ter acesso ao seu painel e aos conteúdos já disponibilizados.

> "Esta pausa é um passo necessário para crescermos. Queremos voltar com uma plataforma ainda melhor para todos os que se preparam para os exames de acesso", afirma Henrique Catraio, CEO e fundador da MUKANDA PREPA.

Durante a manutenção, os estudantes podem acompanhar todas as novidades e esclarecer dúvidas através de:

${CANAIS}

A MUKANDA PREPA agradece a paciência e a confiança de todos os estudantes e convida-os a seguir as páginas oficiais para não perderem o regresso da plataforma e das maratonas.

${SOBRE}`,
  },
  {
    titulo: 'Fase gratuita 2026: obrigado a todos os estudantes',
    data: '16 Set 2026',
    cor: '#FB6D1D',
    imagem: '/noticia-fase-gratuita.svg',
    resumo: 'Entre 20 de Agosto e 15 de Setembro de 2026, as maratonas e as aulas online da MUKANDA PREPA foram totalmente gratuitas. Os números da fase estão na página inicial.',
    corpo: `Durante quase um mês, estudantes de todo o país abriram a app web da MUKANDA PREPA com o mesmo objectivo: conquistar uma vaga na universidade. Entre 20 de Agosto e 15 de Setembro de 2026, as maratonas e as aulas online foram oferecidas de forma totalmente gratuita, e a resposta superou as expectativas.

## Uma fase que ficou para a história do projecto

Foram semanas de aulas, maratonas, exercícios e muita dedicação. Cada inscrição, cada aula assistida e cada dúvida partilhada provou que os estudantes angolanos querem, e merecem, ferramentas de preparação à altura da sua ambição. Os números completos da fase estão disponíveis na página inicial da MUKANDA PREPA.

## O mérito é vosso

Esta fase só foi possível graças aos estudantes que acreditaram no projecto desde o primeiro dia, aos professores que deram o melhor de si em cada aula e a todos os que partilharam a MUKANDA PREPA com colegas, amigos e familiares. A todos, o nosso sincero obrigado.

> "Ver tantos jovens a estudar connosco, noite após noite, foi a maior prova de que estamos no caminho certo. Esta fase foi vossa, e o que vem a seguir também será", afirma Henrique Catraio, CEO e fundador da MUKANDA PREPA.

## Uma nova forma de ensinar

Para a equipa pedagógica, esta fase foi também um desafio. Passar da sala de aula tradicional para as maratonas e aulas online exigiu repensar métodos, ritmos e a própria forma de comunicar com os alunos.

> "No início, o desafio era manter a proximidade com os estudantes sem estarmos na mesma sala. Tivemos de adaptar a forma de explicar e tornar as aulas mais dinâmicas. Os alunos responderam com enorme vontade de aprender, e vamos levar tudo o que aprendemos para a próxima fase", afirma Wagner Cazanza, coordenador pedagógico da MUKANDA PREPA.

## O melhor ainda está para vir

A fase gratuita terminou, mas a história está longe de acabar. A MUKANDA PREPA está a preparar a próxima etapa, com a chegada de uma app mobile com mais funcionalidades. Os estudantes que participaram nesta fase continuarão a ter acesso ao seu painel e aos conteúdos já disponibilizados.

## Continua connosco

Para acompanhar todas as novidades em primeira mão:

${CANAIS}

Obrigado por terem feito parte desta fase. Nos vemos na próxima.

${SOBRE}`,
  },
  {
    titulo: 'MUKANDA PREPA lança a primeira Maratona Nacional',
    data: '20 Ago 2026',
    cor: '#1742E7',
    imagem: '/noticia-maratona-nacional.svg',
    resumo: 'A primeira maratona aberta a todos os estudantes acontece a 20 de Agosto, às 20h00, com inscrições abertas desde 17 de Agosto.',
    corpo: `Está marcado o arranque de um momento histórico na preparação para os exames de acesso em Angola. A MUKANDA PREPA lança a sua primeira Maratona Nacional, uma sessão de aulas online aberta a todos os estudantes do país, no dia 20 de Agosto de 2026, às 20h00. As inscrições estão abertas desde 17 de Agosto e são totalmente gratuitas.

## Uma maratona, um país inteiro a estudar

De Cabinda ao Cunene, qualquer estudante com acesso à internet pode participar. Basta inscrever-se na app web da MUKANDA PREPA e, à hora marcada, juntar-se a centenas de colegas numa noite dedicada à preparação para os exames de acesso ao ensino superior.

## O que esperar

Durante a maratona, os participantes vão rever as matérias mais exigidas nos exames de acesso, resolver exercícios em directo e esclarecer dúvidas com os professores em tempo real.

Queres saber em detalhe como tudo funciona? Consulta:

- Maratonas online: https://www.mukandaprepa.com/maratonas
- Aulas online: https://www.mukandaprepa.com/aulas-online

## Porque é que não podes faltar

A poucas semanas dos exames, cada hora de estudo conta. A Maratona Nacional é a oportunidade de estudar com método, testar conhecimentos e ganhar confiança ao lado de estudantes de todo o país, sem sair de casa e sem pagar nada.

> "Criámos a MUKANDA PREPA para que nenhum estudante angolano fique para trás na corrida à universidade. A Maratona Nacional é o primeiro grande passo para mostrar que é possível preparar-se com qualidade, a partir de qualquer lugar", afirma Henrique Catraio, CEO e fundador da MUKANDA PREPA.

## Como participar

- Acede à app web da MUKANDA PREPA: https://app.mukandaprepa.com/registo
- Faz a tua inscrição gratuita.
- Marca na agenda: 20 de Agosto, às 20h00.

## Segue-nos e partilha com os teus colegas

${CANAIS}

A corrida à universidade começa agora. Inscreve-te e junta-te à primeira Maratona Nacional da MUKANDA PREPA.

${SOBRE}`,
  },
  {
    titulo: 'Lançamento oficial da plataforma MUKANDA PREPA',
    data: '17 Ago 2026',
    cor: '#FB6D1D',
    imagem: '/noticia-lancamento.svg',
    resumo: 'O website entra oficialmente no ar a 17 de Agosto, ao meio-dia, com a abertura das inscrições para as maratonas.',
    corpo: `Chegou o dia. A MUKANDA PREPA, a nova plataforma digital angolana de preparação para os exames de acesso ao ensino superior, entra oficialmente no ar a 17 de Agosto de 2026, ao meio-dia. O lançamento marca também a abertura das inscrições para as maratonas de aulas online, totalmente gratuitas.

## Uma plataforma feita para os estudantes angolanos

A MUKANDA PREPA nasce com uma missão clara: dar a todos os estudantes do país acesso a uma preparação de qualidade para os exames de acesso às universidades, esteja onde estiver. Conteúdos, exercícios e aulas online foram pensados para a realidade do ensino em Angola e para as exigências dos exames.

## Inscrições abertas a partir do meio-dia

A partir do momento do lançamento, os estudantes podem inscrever-se gratuitamente nas maratonas através da app web. O primeiro grande encontro já tem data marcada: a Maratona Nacional, aberta a todos os estudantes, acontece a 20 de Agosto, às 20h00.

Para saber como tudo funciona:

- Maratonas online: https://www.mukandaprepa.com/maratonas
- Aulas online: https://www.mukandaprepa.com/aulas-online

> "Hoje damos o primeiro passo de um projecto que acredita no potencial de cada estudante angolano. Queremos que a preparação para a universidade deixe de depender de onde se vive ou de quanto se pode pagar. A partir de agora, a MUKANDA PREPA está aberta a todos", afirma Henrique Catraio, CEO e fundador da MUKANDA PREPA.

## Como começar

- Acede à app web da MUKANDA PREPA: https://app.mukandaprepa.com/registo
- Faz a tua inscrição gratuita.
- Marca na agenda a primeira Maratona Nacional: 20 de Agosto, às 20h00.

## Segue-nos e partilha com os teus colegas

${CANAIS}

O caminho para a universidade tem agora um novo ponto de partida. Bem-vindo à MUKANDA PREPA.

${SOBRE}`,
  },
  {
    titulo: 'Maratonas e Aulas Online 2026: 100% gratuitas',
    data: '17 Ago 2026',
    cor: '#14141F',
    imagem: '/noticia-100-gratuitas.svg',
    resumo: 'Nesta primeira fase, as maratonas e as aulas online MUKANDA PREPA 2026 são totalmente gratuitas para todos os estudantes.',
    corpo: `Preparar-se para os exames de acesso ao ensino superior nunca foi tão acessível. Na sua primeira fase, a MUKANDA PREPA abre as maratonas e as aulas online a todos os estudantes do país, sem qualquer custo. Entre 20 de Agosto e 15 de Setembro de 2026, basta uma inscrição para ter acesso a tudo.

## Sem custos, sem desculpas

Sabemos que, para muitas famílias, pagar explicações ou cursos preparatórios não é fácil. Por isso, a MUKANDA PREPA decidiu que a primeira fase seria 100% gratuita: nada de mensalidades, taxas de inscrição ou custos escondidos. O único investimento pedido aos estudantes é o seu tempo e a sua dedicação.

## O que está incluído

- Maratonas online: sessões intensivas para rever as matérias mais exigidas nos exames de acesso, resolver exercícios e esclarecer dúvidas em directo.
- Aulas online: aulas organizadas para acompanhar a preparação de forma contínua, a partir de casa.

Para saber em detalhe como funcionam:

- Maratonas online: https://www.mukandaprepa.com/maratonas
- Aulas online: https://www.mukandaprepa.com/aulas-online

> "A preparação para a universidade não pode ser um privilégio de poucos. Ao abrir gratuitamente as maratonas e as aulas online, queremos dar a cada estudante angolano as mesmas oportunidades de chegar bem preparado ao dia do exame", afirma Henrique Catraio, CEO e fundador da MUKANDA PREPA.

## Aproveita enquanto é tempo

A fase gratuita tem data para terminar. Quanto mais cedo te inscreveres, mais aulas e maratonas podes aproveitar antes dos exames.

## Como participar

- Acede à app web da MUKANDA PREPA: https://app.mukandaprepa.com/registo
- Faz a tua inscrição gratuita.
- Acompanha o calendário das maratonas e das aulas online.

## Segue-nos e partilha com os teus colegas

${CANAIS}

A tua vaga na universidade começa com uma decisão. Inscreve-te hoje, é grátis.

${SOBRE}`,
  },
];

// As três mais recentes, para o resumo da página Blog.
export const NOTICIAS_RECENTES = NOTICIAS.slice(0, 3);
