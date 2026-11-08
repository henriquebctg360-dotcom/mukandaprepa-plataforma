// Números da edição MUKANDA PREPA 2026 — fonte única da hero (ESP-02) e das
// páginas Maratonas e Aulas Online (ESP-08).
//
// ESP-16 (08 Nov 2026): deixaram de ser valores de exemplo. Estes são os
// números oficiais da edição 2026, tirados da Apresentação Oficial do projeto
// (Novembro de 2026), secção "MUKANDA PREPA 2026 em números".
//
// Quem actualizar isto: confirmar sempre na Apresentação Oficial mais recente,
// em DOCUMENTOS RECENTES › Apresentação do Projeto. A fase gratuita terminou
// a 15/09/2026, por isso os números estão fechados e não mudam.

export const DADOS_DE_EXEMPLO = false;

export const PERIODO_FASE_GRATUITA = '20 Ago – 15 Set 2026';

// Os quatro números da hero.
export const ESTATISTICAS = [
  {
    chave: 'estudantes',
    valor: 166,
    rotulo: 'estudantes registados',
    fonte: 'Apresentação Oficial (Nov 2026) — "166 contas registadas"',
  },
  {
    chave: 'maratonas',
    valor: 22,
    rotulo: 'maratonas criadas',
    fonte: 'Apresentação Oficial (Nov 2026)',
  },
  {
    chave: 'participacoes',
    valor: 103,
    rotulo: 'sessões de maratona concluídas',
    fonte: 'Apresentação Oficial (Nov 2026)',
  },
  {
    chave: 'aulas',
    valor: 15,
    rotulo: 'aulas online de correcção',
    fonte: 'Apresentação Oficial (Nov 2026)',
  },
];

// Números que não cabem na hero, usados nas páginas da edição.
export const ESTATISTICAS_EXTRA = [
  {
    chave: 'conclusao',
    valor: 100,
    sufixo: '%',
    rotulo: 'taxa de conclusão das sessões',
    fonte: 'Apresentação Oficial (Nov 2026)',
  },
  {
    chave: 'professores',
    valor: 7,
    rotulo: 'professores participantes',
    fonte: 'Apresentação Oficial (Nov 2026)',
  },
];

export const TODAS_ESTATISTICAS = [...ESTATISTICAS, ...ESTATISTICAS_EXTRA];

// Formato angolano, com ponto nos milhares: 1.250, 3.400.
export const formatarNumero = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
