// Artigos do site — fonte única (página Artigos, página inicial e painel).

export const MATERIAS = ['Matemática', 'Física', 'Química', 'Biologia', 'Português', 'História'];
export const NIVEIS = ['Básico', 'Intermédio', 'Avançado'];

// Conteúdo provisório — aguardava protótipo (Briefing v1.0, secção 2.1) e
// ainda não há CMS ligado (Briefing v2.0, secção 07). Substituir por
// artigos reais assim que o CMS estiver configurado.
export const ARTIGOS = [
  { titulo: 'Como resolver equações do 2º grau sem erros', materia: 'Matemática', nivel: 'Básico', data: '02 Jul 2026' },
  { titulo: 'As leis de Newton explicadas com exemplos do dia-a-dia', materia: 'Física', nivel: 'Básico', data: '28 Jun 2026' },
  { titulo: 'Tabela periódica: truques para memorizar os elementos', materia: 'Química', nivel: 'Básico', data: '25 Jun 2026' },
  { titulo: 'Genética mendeliana: o que costuma cair no exame', materia: 'Biologia', nivel: 'Intermédio', data: '20 Jun 2026' },
  { titulo: 'Análise sintática: guia rápido para o exame de Português', materia: 'Português', nivel: 'Intermédio', data: '18 Jun 2026' },
  { titulo: 'Angola no período colonial: os pontos-chave', materia: 'História', nivel: 'Intermédio', data: '15 Jun 2026' },
  { titulo: 'Funções trigonométricas: do círculo ao gráfico', materia: 'Matemática', nivel: 'Avançado', data: '10 Jun 2026' },
  { titulo: 'Electromagnetismo: os erros mais comuns dos estudantes', materia: 'Física', nivel: 'Avançado', data: '05 Jun 2026' },
  { titulo: 'Estequiometria sem complicações', materia: 'Química', nivel: 'Intermédio', data: '01 Jun 2026' },
  { titulo: 'Sistema respiratório: resumo para a última semana de estudo', materia: 'Biologia', nivel: 'Básico', data: '28 Mai 2026' },
  { titulo: 'Figuras de estilo: como identificá-las rapidamente', materia: 'Português', nivel: 'Básico', data: '22 Mai 2026' },
  { titulo: 'Independências africanas: cronologia essencial', materia: 'História', nivel: 'Avançado', data: '18 Mai 2026' },
];

// Os três mais recentes, para a página inicial.
export const ARTIGOS_RECENTES = ARTIGOS.slice(0, 3);
