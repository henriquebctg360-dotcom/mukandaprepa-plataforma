// Números da fase gratuita 2026 — fonte única da hero (ESP-02).
//
// ┌──────────────────────────────────────────────────────────────────────┐
// │  ATENÇÃO: os valores abaixo são DE EXEMPLO. Enquanto                  │
// │  DADOS_DE_EXEMPLO for true, o site mostra a etiqueta "Valores de      │
// │  exemplo" junto aos números. Substituir pelos reais e pôr a false.    │
// └──────────────────────────────────────────────────────────────────────┘
//
// Onde encontrar os valores reais: painel de administração da app,
// Estatísticas globais (GET /api/admin/stats). A fase gratuita terminou a
// 15/09 e a app está em manutenção, por isso os números ficam fixos aqui —
// não há necessidade de o site consultar o servidor.

export const DADOS_DE_EXEMPLO = true;

export const PERIODO_FASE_GRATUITA = '20 Ago – 15 Set 2026';

export const ESTATISTICAS = [
  {
    chave: 'estudantes',
    valor: 1250,
    rotulo: 'estudantes inscritos',
    fonte: 'Admin › Estatísticas globais › Utilizadores',
  },
  {
    chave: 'maratonas',
    valor: 18,
    rotulo: 'maratonas realizadas',
    fonte: 'Admin › Estatísticas globais › Maratonas criadas',
  },
  {
    chave: 'participacoes',
    valor: 3400,
    rotulo: 'participações em maratonas',
    fonte: 'Admin › Estatísticas globais › Sessões',
  },
  {
    chave: 'aulas',
    valor: 18,
    rotulo: 'aulas de correcção ao vivo',
    fonte: 'Coordenação pedagógica (não é registado na app)',
  },
];

// Formato angolano, igual aos preços do site: 1.250, 3.400.
export const formatarNumero = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
