// Equipa MUKANDA PREPA — fonte única.
//
// A página Sobre e a home mostram a direcção; a página A Nossa Equipa mostra
// toda a gente. Ter os dados aqui evita que as páginas digam coisas
// diferentes sobre as mesmas pessoas.
//
// ESP-17 (08 Nov 2026): lista alinhada com os documentos oficiais —
// Lista-Membros-MukandaPrepa.xlsx (31/10/2026, ata 013) e
// Equipas-MukandaPrepa-Especificacoes.docx. São 17 membros activos.
//
// Mudou desde Setembro: a Kassia António e a Kassia Kai são a mesma pessoa
// (fica Kassia Kai); a Ester Diahoha saiu; o Leonel Macaia passou a estar
// também no Suporte Informático; as funções seguem a escrita dos documentos,
// excepto "Criador de Conteúdo" da Anilde, que a direcção mandou manter.
//
// Quem pertence a duas equipas aparece uma só vez, com as duas na função:
// o Leonel no Suporte Informático e o Wagner na Gestão e Administração.
//
// Há duas vagas por preencher — Designer de Maratonas (SI) e Professor(a) de
// Língua Portuguesa — que, por decisão por tomar, ainda não aparecem no site.
//
// FOTOGRAFIAS (ESP-20, 08 Nov 2026): chegaram as fotografias profissionais,
// recolhidas pela Gestão e Administração. Doze das dezassete pessoas já têm
// retrato. Ficheiros em public/equipa-nome-apelido.webp, quadrados 600x600,
// recortados a partir dos originais em
// DOCUMENTOS RECENTES › Grupo Geral › Membros › Fotos pro.
//
// As dezassete pessoas têm retrato. Quatro vieram em RAW da máquina (.CR2),
// deitadas, e foram rodadas; duas vieram dentro de PDF.
//
// A do Leonel Macaia é a preto e branco e vinha num grande plano muito
// fechado: foi alargada com o próprio fundo preto para o rosto respirar e
// ficar do tamanho dos outros.

// Fundadores e Directores. Cada um dirige uma das equipas.
export const DIRECCAO = [
  {
    nome: 'Henrique Catraio',
    cargo: 'CEO e Fundador · Director da equipa de Suporte Informático',
    foto: '/equipa-henrique-catraio.webp',
  },
  {
    nome: 'Walter Sampaio',
    cargo: 'Co-fundador · Director da equipa de Marketing e Publicidade',
    foto: '/equipa-walter-sampaio.webp',
  },
  {
    nome: 'Armando Baptista',
    cargo: 'Co-fundador · Director da equipa de Gestão e Administração',
    foto: '/equipa-armando-baptista.webp',
  },
];

export const EQUIPAS = [
  {
    titulo: 'Equipa de Gestão e Administração',
    membros: [
      { nome: 'Kassia Kai', cargo: 'Gestora Administrativa', foto: '/equipa-kassia-kai.webp' },
      { nome: 'Dorivaldo Morais', cargo: 'Gestor Administrativo', foto: '/equipa-dorivaldo-morais.webp' },
      { nome: 'Mariana Baptista', cargo: 'Gestora Comercial', foto: '/equipa-mariana-baptista.webp' },
      { nome: 'Wagner Cazanza', cargo: 'Gestor Pedagógico · coordena o Corpo Docente', foto: '/equipa-wagner-cazanza.webp' },
    ],
  },
  {
    titulo: 'Equipa de Suporte Informático',
    membros: [
      { nome: 'Fernanda Vilinga', cargo: 'Desenvolvedora de Software', foto: '/equipa-fernanda-vilinga.webp' },
      { nome: 'Jason Matias', cargo: 'Desenvolvedor de Software', foto: '/equipa-jason-matias.webp' },
      { nome: 'Leonel Macaia', cargo: 'Designer Web · também na equipa de Marketing', foto: '/equipa-leonel-macaia.webp' },
    ],
  },
  {
    titulo: 'Equipa de Marketing e Publicidade',
    membros: [
      { nome: 'Anilde Aristóteles', cargo: 'Criador de Conteúdo', foto: '/equipa-anilde-aristoteles.webp' },
      { nome: 'Leda Dias', cargo: 'Criadora de Conteúdos', foto: '/equipa-leda-dias.webp' },
      { nome: 'Sebastião Paulo', cargo: 'Designer Gráfico', foto: '/equipa-sebastiao-paulo.webp' },
      { nome: 'Arão António', cargo: 'Videomaker e Designer', foto: '/equipa-arao-antonio.webp' },
    ],
  },
];

// Corpo docente, coordenado pelo Wagner Cazanza.
export const DOCENTES = [
  { nome: 'Misael Cagiba', cargo: 'Professor de Matemática', foto: '/equipa-misael-cagiba.webp', disciplina: 'Matemática' },
  { nome: 'Roberto Costa', cargo: 'Professor de Física', foto: '/equipa-roberto-costa.webp', disciplina: 'Física' },
  { nome: 'Cornélio Catuca', cargo: 'Professor de Química', foto: '/equipa-cornelio-catuca.webp', disciplina: 'Química' },
];
