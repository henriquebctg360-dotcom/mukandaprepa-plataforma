// Registo das especificações do novo site — fonte única.
//
// Cada especificação aprovada entra aqui. A página /especificacoes lista-as
// para a equipa de desenvolvimento, e as notas espalhadas pelo protótipo
// (<NotaDev esp="ESP-01">) referem-se a estes identificadores.
//
// estado: 'implementada' | 'em-curso' | 'por-fazer'

export const ESPECIFICACOES = [
  {
    id: 'ESP-01',
    titulo: 'Botão “Entrar na app” e página de manutenção',
    data: '13 Set 2026',
    estado: 'implementada',
    pedido:
      'Substituir os botões Login e Inscrever-me da barra de navegação por um único botão “Entrar na app”. Ao clicar, o visitante vai para uma página que explica que a app web está em manutenção, que as maratonas e as aulas online retomam brevemente e que a MUKANDA PREPA está a passar de uma app web para uma app mobile com mais funcionalidades.',
    alteracoes: [
      'Barra de navegação: Login + Inscrever-me substituídos por um único botão “Entrar na app”, no computador e no telemóvel.',
      'Nova página /entrar-na-app com a mensagem de manutenção, o percurso app web → desenvolvimento → app mobile e ligações para as redes sociais.',
      'Todos os botões do site que levavam à app (hero, contador, planos, “Criar conta”) passam a levar a esta página, em vez de abrirem a app web num separador novo.',
    ],
    paginas: [
      { label: 'Página de manutenção', href: '/entrar-na-app' },
      { label: 'Página inicial (barra de navegação)', href: '/' },
    ],
    notasDev: [
      'O destino é uma rota interna do site (/entrar-na-app), não um link externo. Deixa de existir dependência do domínio da app na navegação.',
      'O endereço da página está num só sítio: src/config/appLinks.js (ROTA_ENTRAR_NA_APP). Quando a app mobile sair, muda-se ali para o link das lojas ou para uma página de download.',
      'Os textos dos restantes botões (ex.: “Inscrever-me agora gratuitamente”) ainda não foram revistos — ficam para uma especificação própria.',
    ],
    questoesEmAberto: [
      'Há uma data prevista de regresso das maratonas e aulas? Se sim, mostramos na página.',
      'Queremos um formulário “Avisa-me quando a app voltar” (email ou WhatsApp)?',
      'Quem aceder directamente ao domínio da app web deve ver esta mesma mensagem?',
      'As contas e resultados dos estudantes passam para a app mobile? Convém dizê-lo na página.',
    ],
  },
  {
    id: 'ESP-02',
    titulo: 'Hero: números da fase gratuita, WhatsApp e comunidade',
    data: '13 Set 2026',
    estado: 'implementada',
    decisao: 'As três propostas ficam no protótipo: a equipa de desenvolvimento escolhe qual segue para o site. Os números são de exemplo e a equipa coloca os reais.',
    pedido:
      'Redesenhar a hero com dois objectivos: (1) informar os visitantes dos dados estatísticos da fase gratuita; (2) deixar de pedir inscrição na app e, em vez disso, levar os estudantes a falar connosco no WhatsApp ou a entrar na comunidade.',
    variantes: [
      { id: 'a', nome: 'A · Números em destaque', desc: 'Os quatro números ocupam o lugar da imagem, em cartões grandes. A mensagem é o balanço da fase gratuita.' },
      { id: 'b', nome: 'B · Clássica com faixa de números', desc: 'Mantém o título e a imagem actuais; os números aparecem numa faixa escura por baixo. A mudança mais pequena.' },
      { id: 'c', nome: 'C · Comunidade primeiro', desc: 'Fundo escuro, o número de estudantes no próprio título e dois cartões de acção grandes: WhatsApp e MUKANDA Community.' },
    ],
    alteracoes: [
      'O botão “Inscrever-me agora gratuitamente” sai da hero. Entram “Falar no WhatsApp” (mensagem já escrita) e “Entrar na comunidade”.',
      'Quatro números da fase gratuita (20 Ago – 15 Set 2026): estudantes inscritos, maratonas realizadas, participações e aulas de correcção ao vivo, com contagem animada ao aparecerem no ecrã.',
      'Três propostas para comparar. Alterna-se na barra do protótipo (Hero A · B · C) ou pelo endereço: /?hero=a, /?hero=b, /?hero=c.',
    ],
    paginas: [
      { label: 'Proposta A', href: '/?hero=a' },
      { label: 'Proposta B', href: '/?hero=b' },
      { label: 'Proposta C', href: '/?hero=c' },
    ],
    notasDev: [
      'Os números vivem em src/config/estatisticas.js. Com DADOS_DE_EXEMPLO = true aparece a etiqueta “Valores de exemplo”; com os valores reais, pôr a false.',
      'Três dos quatro números existem no painel de administração da app (GET /api/admin/stats: users, marathonsCreated, sessions). O número de aulas não é registado na app.',
      'Como a fase gratuita terminou, os números são fixos no site — não é preciso chamar a API (que, de qualquer forma, só responde a administradores).',
      'MUKANDA Community = Comunidade do WhatsApp. O link de convite (https://chat.whatsapp.com/…) vai em src/config/contactos.js (COMUNIDADE_URL); vazio, o botão abre o WhatsApp a pedir a entrada.',
      'WhatsApp de contacto confirmado: +244 945 370 874 (o mesmo número geral do site).',
      'A contagem animada respeita prefers-reduced-motion (mostra logo o valor final).',
    ],
    questoesEmAberto: [
      'Equipa de desenvolvimento: escolher a proposta A, B ou C e retirar as outras duas.',
      'Equipa de desenvolvimento: colocar os números reais em src/config/estatisticas.js e pôr DADOS_DE_EXEMPLO a false.',
      'Equipa de desenvolvimento: colocar o link de convite da Comunidade do WhatsApp em COMUNIDADE_URL.',
    ],
  },
  {
    id: 'ESP-03',
    titulo: 'Página inicial como landing page',
    data: '13 Set 2026',
    estado: 'implementada',
    pedido:
      'Transformar a home numa landing page que ajude o estudante a conhecer as informações gerais e actuais do projecto. Sair: os três blocos (Maratonas Online, Aulas ao Vivo, Exames Passados), o contador da maratona, a pré-visualização de planos (a primeira fase foi totalmente gratuita) e o fecho “Começa hoje, é grátis! / Criar Conta”. Pedidas sugestões para as secções a seguir à hero.',
    decisao: 'Ordem aprovada pela direcção (14 Set 2026); reparos finos ficam com a equipa de desenvolvimento. Hero → Quem somos → Ponto de situação → Notícias → Artigos → Recursos gratuitos → Testemunhos → Parceiros → Perguntas frequentes → Comunidade.',
    alteracoes: [
      'Saíram da home: Pilares (3 blocos), contador da maratona, pré-visualização de planos, antigo “Sobre nós” e o fecho “Criar Conta”. Os componentes continuam no projecto; o contador continua na página Maratonas.',
      '1 · Quem somos: o que é a MUKANDA PREPA, três factos e as fotografias de fundadores e direcção, com links para Sobre e Missão.',
      '2 · Ponto de situação: fase gratuita concluída → app web em manutenção (agora) → app mobile (brevemente), com link para a página de manutenção.',
      '3 · Notícias: as três mais recentes, com três novidades actuais escritas como exemplo (manutenção, app mobile, fim da fase gratuita).',
      '4 · Artigos: os três mais recentes, com matéria e nível.',
      '5 · Recursos gratuitos: as quatro pastas do Google Drive — o que o estudante pode usar hoje, com a app em manutenção.',
      '6 · Testemunhos: três cartões de estudantes (exemplo; os reais precisam de autorização).',
      '7 · Parceiros: seis espaços para logótipos e convite “Fala connosco”.',
      '8 · Perguntas frequentes: sete perguntas sobre a situação actual, em acordeão.',
      '9 · Comunidade: fecho laranja com “Entrar na comunidade” e o WhatsApp da equipa.',
      'As páginas /noticias e /artigos, que estavam escondidas, voltaram a ter rota (a home liga para elas).',
    ],
    paginas: [
      { label: 'Página inicial', href: '/' },
      { label: 'Notícias', href: '/noticias' },
      { label: 'Artigos', href: '/artigos' },
    ],
    notasDev: [
      'Secções em src/components/home/SeccoesHome.jsx; a ordem está em src/pages/Homepage.jsx.',
      'Conteúdos em fonte única, partilhados com as páginas próprias: config/noticias.js, config/artigos.js (novo, saiu de Artigos.jsx), config/recursos.js (novo, saiu de Recursos.jsx), config/equipa.jsx.',
      'Notícias marcadas com exemplo: true mostram a etiqueta “Textos de exemplo”. Os artigos continuam a ser os provisórios de Junho/Julho, sem CMS.',
      'Fundo das secções alterna automaticamente (branco / cinza claro) com :nth-of-type.',
    ],
    questoesEmAberto: [
      'Recolher testemunhos reais (com autorização escrita) e os logótipos dos parceiros.',
      'Validar as respostas das perguntas frequentes, sobretudo a data de regresso das maratonas.',
    ],
  },
  {
    id: 'ESP-04',
    titulo: 'Navegação: sem Planos & Preços, com Notícias e Artigos',
    data: '14 Set 2026',
    estado: 'implementada',
    pedido:
      'Planos e Preços já não faz sentido (a primeira fase foi totalmente gratuita; quando houver planos e preços novos, o site é actualizado). Notícias e Artigos voltam à navegação.',
    alteracoes: [
      'Menu: saiu “Planos & Preços”. O submenu do Blog tem agora Aulas online, Maratonas MUKANDA, Notícias e Artigos.',
      'Rodapé: saiu Planos & Preços; entraram Notícias, Artigos e “Painel da equipa”.',
      'O endereço /planos redirecciona para a página inicial, para links antigos não darem erro. A página Planos continua no projecto.',
      'Aulas Online: os botões que iam para Planos saíram (a página foi depois refeita na ESP-08).',
      'Contactos e página 404 deixam de mencionar planos.',
    ],
    paginas: [
      { label: 'Contactos', href: '/contactos' },
    ],
    notasDev: [
      'Para repor os planos no futuro: voltar a ligar a rota /planos à página Planos (App.jsx) e rever FASE_GRATUITA em config/planos.js.',
    ],
    questoesEmAberto: [],
  },
  {
    id: 'ESP-05',
    titulo: 'Painel de publicação de notícias e artigos',
    data: '14 Set 2026',
    estado: 'implementada',
    pedido:
      'Professores, gestores administrativos, marketing e CEO escrevem e publicam notícias e artigos. Queremos um painel para publicar sem mexer no código.',
    decisao: 'O painel fica ILUSTRATIVO: sem contas reais, só para simular e apresentar à equipa (14 Set 2026). As questões em aberto vão ser discutidas pela direcção com a equipa.',
    alteracoes: [
      'Novo painel em /painel (link “Painel da equipa” no rodapé): entrada por perfil, lista de notícias e artigos, editor com pré-visualização.',
      'Perfis propostos: Professor escreve artigos e envia para revisão; Marketing escreve e publica notícias e envia artigos para revisão; Gestor administrativo e CEO revêem, publicam e removem tudo.',
      'Fluxo: Rascunho → Em revisão → Publicado. Quem pode publicar vê o aviso “à espera da tua revisão” e aprova com um clique.',
      'O que é publicado aparece logo na página inicial, em /noticias e /artigos. Cada notícia e artigo tem agora página própria (/noticias/…, /artigos/…).',
      '“Brevemente” no painel: perguntas frequentes, testemunhos, parceiros e recursos.',
    ],
    paginas: [
      { label: 'Painel', href: '/painel' },
      { label: 'Notícias no site', href: '/noticias' },
    ],
    notasDev: [
      'Protótipo: src/prototipo/conteudos.js guarda no localStorage e junta aos conteúdos de config/noticias.js e config/artigos.js. “Repor conteúdos do protótipo” (barra lateral do painel) volta ao original.',
      'Permissões num só sítio: src/prototipo/painelPerfis.js (criar, publicar, editar todos, remover).',
      'Recomendação para a versão real: aproveitar o backend que já existe (Node/Express + Firebase em api.mukandaprepa.com), que já tem contas e perfis (admin, professor). Faltam: colecções “noticias” e “artigos”, perfis marketing/gestor/ceo, rotas protegidas por perfil e uma rota pública só com o que está publicado.',
      'Alternativa: um CMS pronto (ex.: Strapi, Directus, Sanity). Mais rápido de montar, mas cria um segundo sistema de contas ao lado da app.',
      'O site em cPanel é estático: com a versão real, as páginas lêem as notícias da API ao abrir (ou reconstrói-se o site a cada publicação).',
      'Editor real: texto formatado (negrito, listas, links), imagem de capa com redimensionamento, e registo de quem publicou e quando.',
    ],
    questoesEmAberto: [
      'As permissões propostas para cada perfil estão certas? (ex.: o Marketing publica notícias sem revisão?)',
      'Os professores escrevem só artigos das suas disciplinas?',
      'Contas do painel: as mesmas da app MUKANDA ou contas separadas?',
      'Backend próprio (recomendado) ou CMS pronto?',
    ],
  },
  {
    id: 'ESP-06',
    titulo: 'Página Sobre: sai o fecho “Criar Conta Grátis”',
    data: '14 Set 2026',
    estado: 'implementada',
    pedido: 'Na página Sobre está tudo bem; retirar apenas a secção “Queres fazer parte desta comunidade? — Criar Conta Grátis”.',
    alteracoes: [
      'Saiu a secção laranja do fundo da página Sobre. O resto da página fica igual.',
      'Com as notas ligadas, uma nota azul marca o sítio onde estava a secção.',
    ],
    paginas: [{ label: 'Sobre', href: '/sobre' }],
    notasDev: ['Os estilos .sobre-cta-final continuam em Sobre.css e podem ser apagados na versão final.'],
    questoesEmAberto: [],
  },
  {
    id: 'ESP-07',
    titulo: 'Blog com notícias e artigos',
    data: '14 Set 2026',
    estado: 'implementada',
    pedido: 'Na página do Blog, colocar as notícias e os artigos.',
    alteracoes: [
      'Filtro no topo: Tudo · Notícias · Artigos, com o número de publicações de cada tipo.',
      'Notícias: a mais recente em destaque grande, as seguintes em lista ao lado.',
      'Artigos: grelha com matéria, nível e data; link para /artigos, onde se filtra por matéria.',
      'No fim, “A edição 2026”: ligações para os balanços das Maratonas e das Aulas Online.',
      'Tudo vem do painel de publicação (ESP-05): o que for publicado lá aparece no Blog.',
    ],
    paginas: [{ label: 'Blog', href: '/blog' }],
    notasDev: ['Com o filtro “Notícias” ou “Artigos” activo, a lista mostra todas as publicações desse tipo (sem limite).'],
    questoesEmAberto: [],
  },
  {
    id: 'ESP-08',
    titulo: 'Maratonas e Aulas Online: balanço da edição 2026',
    data: '14 Set 2026',
    estado: 'implementada',
    pedido: 'As páginas Maratonas Online e Aulas Online passam a servir apenas para descrever o que foi realizado durante a MUKANDA PREPA 2026.',
    alteracoes: [
      'Selo verde “Edição 2026 concluída · 20 Ago – 15 Set 2026” e títulos “Maratonas MUKANDA 2026” / “Aulas Online MUKANDA 2026”.',
      'Todos os textos passam ao passado (“funcionou”, “realizou-se”, “explicou”).',
      'Maratonas: saíram “Inscrever-me numa Maratona” e o contador; o calendário mostra as três semanas como “Realizada”.',
      'Aulas Online: saiu “Começar gratuitamente”; nova lista das disciplinas cobertas.',
      'Nas duas: faixa escura com os números da edição (mesma fonte da hero, valores de exemplo) e fecho “vão voltar” com comunidade e WhatsApp.',
    ],
    paginas: [
      { label: 'Maratonas', href: '/maratonas' },
      { label: 'Aulas Online', href: '/aulas-online' },
    ],
    notasDev: [
      'Peças partilhadas em src/components/Edicao2026.jsx (selo, números, fecho).',
      'O componente MaratonaCountdown e config/maratona.js deixaram de ser usados em todo o site; ficam no projecto.',
    ],
    questoesEmAberto: [
      'Há fotografias ou gravações das aulas de 2026 que possamos mostrar nestas páginas?',
    ],
  },
  {
    id: 'ESP-09',
    titulo: 'A Nossa Missão: contexto da fase actual (Recursos sem alterações)',
    data: '14 Set 2026',
    estado: 'implementada',
    pedido: 'Na página A Nossa Missão, o texto está bem: apenas contextualizar a fase em que o projecto está. A página Recursos está bem e fica como está.',
    decisao: 'Mantido o texto original da missão. Uma primeira versão com a página inteira refeita (a partir dos documentos do projecto) foi rejeitada e desfeita.',
    alteracoes: [
      'Novo bloco “Onde estamos agora” depois do texto: edição 2026 concluída, app web em manutenção, app mobile a caminho, com link para a página da nova app.',
      'O 3.º parágrafo passa ao passado e indica as datas da fase gratuita (20 Ago – 15 Set 2026).',
      'Compromisso “Gratuito”: “Maratonas e aulas online 2026 foram sem custos”.',
      'Recursos: validada sem alterações.',
    ],
    paginas: [
      { label: 'A Nossa Missão', href: '/missao' },
      { label: 'Recursos', href: '/recursos' },
    ],
    notasDev: [],
    questoesEmAberto: [],
  },
  {
    id: 'ESP-10',
    titulo: 'Revisão geral de botões e textos',
    data: '14 Set 2026',
    estado: 'implementada',
    pedido: 'Verificar se ainda há botões ou páginas por actualizar e aplicar os cinco pontos encontrados.',
    alteracoes: [
      'Contactos: o formulário deixa de enviar mensagens reais no protótipo — simula o envio (ENVIO_SIMULADO em Contactos.jsx).',
      'Sobre: “com uma biblioteca de exames passados a caminho” passa a “e exames passados disponíveis em Recursos”, com link.',
      'Menu Blog, rodapé e página 404: “Maratonas 2026” e “Aulas Online 2026”, porque as páginas são agora o balanço da edição.',
      'Entrar na app: novo botão “Entrar na comunidade”; “Voltar ao site” passa a link simples.',
      'Descrição do site para motores de busca (index.html): sai “100% gratuitas em 2026”, entra “Acompanha as novidades e a nova app mobile”.',
    ],
    paginas: [
      { label: 'Contactos', href: '/contactos' },
      { label: 'Sobre', href: '/sobre' },
      { label: 'Entrar na app', href: '/entrar-na-app' },
    ],
    notasDev: [
      'Na versão final: pôr ENVIO_SIMULADO = false em src/pages/Contactos.jsx para o formulário voltar a enviar para o backend.',
      'Protótipo publicado no Vercel com o cabeçalho X-Robots-Tag: noindex (vercel.json), para não ser indexado pelo Google com dados de exemplo. RETIRAR na versão final.',
      'Componentes e páginas que já não aparecem no site e podem ser apagados na versão final: CtaFinal, MaratonaCountdown (+ config/maratona.js), PlanosPreview, Pilares, SobreResumo, e as páginas Planos, Equipa e IdentidadeVisual.',
    ],
    questoesEmAberto: [],
  },
];
