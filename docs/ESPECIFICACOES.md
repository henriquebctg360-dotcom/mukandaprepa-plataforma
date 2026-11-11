# Especificações da nova versão do site

Registo de todas as alterações pedidas pela direcção para a nova versão do site, da primeira à última.

- **Site navegável:** https://mukandaprepa-prototipo.vercel.app

Até à ESP-25 este documento era gerado a partir de `src/prototipo/especificacoes.js`, e o protótipo mostrava as explicações em cima do próprio ecrã, em marcadores azuis numerados. **A ESP-26 retirou essa camada**: o site passou a ser o site, e este ficheiro passou a ser o único registo. Daqui para a frente escreve-se à mão.

## Índice

- [ESP-01 — Botão “Entrar na app” e página de manutenção](#esp-01)
- [ESP-02 — Hero: números da fase gratuita, WhatsApp e comunidade](#esp-02)
- [ESP-03 — Página inicial como landing page](#esp-03)
- [ESP-04 — Navegação: sem Planos & Preços, com Notícias e Artigos](#esp-04)
- [ESP-05 — Painel de publicação de notícias e artigos](#esp-05)
- [ESP-06 — Página Sobre: sai o fecho “Criar Conta Grátis”](#esp-06)
- [ESP-07 — Blog com notícias e artigos](#esp-07)
- [ESP-08 — Maratonas e Aulas Online: balanço da edição 2026](#esp-08)
- [ESP-09 — A Nossa Missão: contexto da fase actual (Recursos sem alterações)](#esp-09)
- [ESP-10 — Revisão geral de botões e textos](#esp-10)
- [ESP-11 — A Nossa Equipa: fotografia, nome e função](#esp-11)
- [ESP-12 — Testemunhos reais dos estudantes](#esp-12)
- [ESP-13 — Notícias reais, com texto completo](#esp-13)
- [ESP-14 — Secção dos parceiros retirada](#esp-14)
- [ESP-15 — Artigo-modelo: estrutura dos artigos](#esp-15)
- [ESP-16 — Números reais da edição 2026](#esp-16)
- [ESP-17 — Equipa alinhada com a lista oficial](#esp-17)
- [ESP-18 — Imagens provisórias para as notícias](#esp-18)
- [ESP-19 — Artigos escondidos até os professores escreverem](#esp-19)
- [ESP-20 — Fotografias da equipa](#esp-20)
- [ESP-21 — Limpeza antes do lançamento](#esp-21)
- [ESP-22 — Título e descrição próprios para cada página](#esp-22)
- [ESP-23 — Imagem e texto de partilha](#esp-23)
- [ESP-24 — Velocidade: fontes, código e imagens](#esp-24)
- [ESP-25 — Acessibilidade](#esp-25)
- [ESP-26 — Fim do protótipo: o site passa a ser o site](#esp-26)
- [ESP-27 — Logotipo da barra e ícone do separador](#esp-27)
- [ESP-28 — Publicação automática no cPanel a partir do `main`](#esp-28)
- [ESP-29 — HTTPS e endereço fixo com www](#esp-29)
- [ESP-30 — A página inicial ao contrário: certa no telemóvel, errada no computador](#esp-30)
- [ESP-31 — Um ficheiro que falta deixa de devolver o index.html](#esp-31)
- [ESP-32 — Inscrição no Google Search Console](#esp-32)
- [ESP-33 — Redes sociais à vista, e numa fonte única](#esp-33)
- [ESP-34 — O menu de telemóvel e duas incoerências do rodapé](#esp-34)

---

<a id="esp-01"></a>
## ESP-01 — Botão “Entrar na app” e página de manutenção

**Estado:** Implementada no protótipo · **Data:** 13 Set 2026

### Pedido

Substituir os botões Login e Inscrever-me da barra de navegação por um único botão “Entrar na app”. Ao clicar, o visitante vai para uma página que explica que a app web está em manutenção, que as maratonas e as aulas online retomam brevemente e que a MUKANDA PREPA está a passar de uma app web para uma app mobile com mais funcionalidades.

### O que muda

- Barra de navegação: Login + Inscrever-me substituídos por um único botão “Entrar na app”, no computador e no telemóvel.
- Nova página /entrar-na-app com a mensagem de manutenção, o percurso app web → desenvolvimento → app mobile e ligações para as redes sociais.
- Todos os botões do site que levavam à app (hero, contador, planos, “Criar conta”) passam a levar a esta página, em vez de abrirem a app web num separador novo.

### Notas técnicas

- O destino é uma rota interna do site (/entrar-na-app), não um link externo. Deixa de existir dependência do domínio da app na navegação.
- O endereço da página está num só sítio: src/config/appLinks.js (ROTA_ENTRAR_NA_APP). Quando a app mobile sair, muda-se ali para o link das lojas ou para uma página de download.
- Os textos dos restantes botões (ex.: “Inscrever-me agora gratuitamente”) ainda não foram revistos — ficam para uma especificação própria.

### Questões em aberto

- Há uma data prevista de regresso das maratonas e aulas? Se sim, mostramos na página.
- Queremos um formulário “Avisa-me quando a app voltar” (email ou WhatsApp)?
- Quem aceder directamente ao domínio da app web deve ver esta mesma mensagem?
- As contas e resultados dos estudantes passam para a app mobile? Convém dizê-lo na página.

### Ver no protótipo

- [Página de manutenção](https://mukandaprepa-prototipo.vercel.app/entrar-na-app)
- [Página inicial (barra de navegação)](https://mukandaprepa-prototipo.vercel.app/)

---

<a id="esp-02"></a>
## ESP-02 — Hero: números da fase gratuita, WhatsApp e comunidade

**Estado:** Implementada no protótipo · **Data:** 13 Set 2026

### Pedido

Redesenhar a hero com dois objectivos: (1) informar os visitantes dos dados estatísticos da fase gratuita; (2) deixar de pedir inscrição na app e, em vez disso, levar os estudantes a falar connosco no WhatsApp ou a entrar na comunidade.

### Decisão

As três propostas ficam no protótipo: a equipa de desenvolvimento escolhe qual segue para o site. Os números são de exemplo e a equipa coloca os reais.

### O que muda

- O botão “Inscrever-me agora gratuitamente” sai da hero. Entram “Falar no WhatsApp” (mensagem já escrita) e “Entrar na comunidade”.
- Quatro números da fase gratuita (20 Ago – 15 Set 2026): estudantes inscritos, maratonas realizadas, participações e aulas de correcção ao vivo, com contagem animada ao aparecerem no ecrã.
- Três propostas para comparar. Alterna-se na barra do protótipo (Hero A · B · C) ou pelo endereço: /?hero=a, /?hero=b, /?hero=c.

### Notas técnicas

- Os números vivem em src/config/estatisticas.js. Com DADOS_DE_EXEMPLO = true aparece a etiqueta “Valores de exemplo”; com os valores reais, pôr a false.
- Três dos quatro números existem no painel de administração da app (GET /api/admin/stats: users, marathonsCreated, sessions). O número de aulas não é registado na app.
- Como a fase gratuita terminou, os números são fixos no site — não é preciso chamar a API (que, de qualquer forma, só responde a administradores).
- MUKANDA Community = Comunidade do WhatsApp. O link de convite (https://chat.whatsapp.com/…) vai em src/config/contactos.js (COMUNIDADE_URL); vazio, o botão abre o WhatsApp a pedir a entrada.
- WhatsApp de contacto confirmado: +244 945 370 874 (o mesmo número geral do site).
- A contagem animada respeita prefers-reduced-motion (mostra logo o valor final).

### Questões em aberto

- Equipa de desenvolvimento: escolher a proposta A, B ou C e retirar as outras duas.
- Equipa de desenvolvimento: colocar os números reais em src/config/estatisticas.js e pôr DADOS_DE_EXEMPLO a false.
- Equipa de desenvolvimento: colocar o link de convite da Comunidade do WhatsApp em COMUNIDADE_URL.

### Ver no protótipo

- [Proposta A](https://mukandaprepa-prototipo.vercel.app/?hero=a)
- [Proposta B](https://mukandaprepa-prototipo.vercel.app/?hero=b)
- [Proposta C](https://mukandaprepa-prototipo.vercel.app/?hero=c)

---

<a id="esp-03"></a>
## ESP-03 — Página inicial como landing page

**Estado:** Implementada no protótipo · **Data:** 13 Set 2026

### Pedido

Transformar a home numa landing page que ajude o estudante a conhecer as informações gerais e actuais do projecto. Sair: os três blocos (Maratonas Online, Aulas ao Vivo, Exames Passados), o contador da maratona, a pré-visualização de planos (a primeira fase foi totalmente gratuita) e o fecho “Começa hoje, é grátis! / Criar Conta”. Pedidas sugestões para as secções a seguir à hero.

### Decisão

Ordem aprovada pela direcção (14 Set 2026); reparos finos ficam com a equipa de desenvolvimento. Hero → Quem somos → Ponto de situação → Notícias → Artigos → Recursos gratuitos → Testemunhos → Parceiros → Perguntas frequentes → Comunidade.

### O que muda

- Saíram da home: Pilares (3 blocos), contador da maratona, pré-visualização de planos, antigo “Sobre nós” e o fecho “Criar Conta”. Os componentes continuam no projecto; o contador continua na página Maratonas.
- 1 · Quem somos: o que é a MUKANDA PREPA, três factos e as fotografias de fundadores e direcção, com links para Sobre e Missão.
- 2 · Ponto de situação: fase gratuita concluída → app web em manutenção (agora) → app mobile (brevemente), com link para a página de manutenção.
- 3 · Notícias: as três mais recentes, com três novidades actuais escritas como exemplo (manutenção, app mobile, fim da fase gratuita).
- 4 · Artigos: os três mais recentes, com matéria e nível.
- 5 · Recursos gratuitos: as quatro pastas do Google Drive — o que o estudante pode usar hoje, com a app em manutenção.
- 6 · Testemunhos: cartões de estudantes — passaram a ser os reais em ESP-12.
- 7 · Parceiros: retirada em ESP-14 — ainda não há parcerias fechadas.
- 8 · Perguntas frequentes: sete perguntas sobre a situação actual, em acordeão.
- 9 · Comunidade: fecho laranja com “Entrar na comunidade” e o WhatsApp da equipa.
- As páginas /noticias e /artigos, que estavam escondidas, voltaram a ter rota (a home liga para elas).

### Notas técnicas

- Secções em src/components/home/SeccoesHome.jsx; a ordem está em src/pages/Homepage.jsx.
- Conteúdos em fonte única, partilhados com as páginas próprias: config/noticias.js, config/artigos.js (novo, saiu de Artigos.jsx), config/recursos.js (novo, saiu de Recursos.jsx), config/equipa.jsx.
- Notícias marcadas com exemplo: true mostram a etiqueta “Textos de exemplo”. Os artigos continuam a ser os provisórios de Junho/Julho, sem CMS.
- Fundo das secções alterna automaticamente (branco / cinza claro) com :nth-of-type.

### Questões em aberto

- Validar as respostas das perguntas frequentes, sobretudo a data de regresso das maratonas.

### Ver no protótipo

- [Página inicial](https://mukandaprepa-prototipo.vercel.app/)
- [Notícias](https://mukandaprepa-prototipo.vercel.app/noticias)
- [Artigos](https://mukandaprepa-prototipo.vercel.app/artigos)

---

<a id="esp-04"></a>
## ESP-04 — Navegação: sem Planos & Preços, com Notícias e Artigos

**Estado:** Implementada no protótipo · **Data:** 14 Set 2026

### Pedido

Planos e Preços já não faz sentido (a primeira fase foi totalmente gratuita; quando houver planos e preços novos, o site é actualizado). Notícias e Artigos voltam à navegação.

### O que muda

- Menu: saiu “Planos & Preços”. O submenu do Blog tem agora Aulas online, Maratonas MUKANDA, Notícias e Artigos.
- Rodapé: saiu Planos & Preços; entraram Notícias, Artigos e “Painel da equipa”.
- O endereço /planos redirecciona para a página inicial, para links antigos não darem erro. A página Planos continua no projecto.
- Aulas Online: os botões que iam para Planos saíram (a página foi depois refeita na ESP-08).
- Contactos e página 404 deixam de mencionar planos.

### Notas técnicas

- Para repor os planos no futuro: voltar a ligar a rota /planos à página Planos (App.jsx) e rever FASE_GRATUITA em config/planos.js.

### Ver no protótipo

- [Contactos](https://mukandaprepa-prototipo.vercel.app/contactos)

---

<a id="esp-05"></a>
## ESP-05 — Painel de publicação de notícias e artigos

**Estado:** Implementada no protótipo · **Data:** 14 Set 2026

### Pedido

Professores, gestores administrativos, marketing e CEO escrevem e publicam notícias e artigos. Queremos um painel para publicar sem mexer no código.

### Decisão

O painel fica ILUSTRATIVO: sem contas reais, só para simular e apresentar à equipa (14 Set 2026). As questões em aberto vão ser discutidas pela direcção com a equipa.

### O que muda

- Novo painel em /painel (link “Painel da equipa” no rodapé): entrada por perfil, lista de notícias e artigos, editor com pré-visualização.
- Perfis propostos: Professor escreve artigos e envia para revisão; Marketing escreve e publica notícias e envia artigos para revisão; Gestor administrativo e CEO revêem, publicam e removem tudo.
- Fluxo: Rascunho → Em revisão → Publicado. Quem pode publicar vê o aviso “à espera da tua revisão” e aprova com um clique.
- O que é publicado aparece logo na página inicial, em /noticias e /artigos. Cada notícia e artigo tem agora página própria (/noticias/…, /artigos/…).
- “Brevemente” no painel: perguntas frequentes, testemunhos, parceiros e recursos.

### Notas técnicas

- Protótipo: src/prototipo/conteudos.js guarda no localStorage e junta aos conteúdos de config/noticias.js e config/artigos.js. “Repor conteúdos do protótipo” (barra lateral do painel) volta ao original.
- Permissões num só sítio: src/prototipo/painelPerfis.js (criar, publicar, editar todos, remover).
- Recomendação para a versão real: aproveitar o backend que já existe (Node/Express + Firebase em api.mukandaprepa.com), que já tem contas e perfis (admin, professor). Faltam: colecções “noticias” e “artigos”, perfis marketing/gestor/ceo, rotas protegidas por perfil e uma rota pública só com o que está publicado.
- Alternativa: um CMS pronto (ex.: Strapi, Directus, Sanity). Mais rápido de montar, mas cria um segundo sistema de contas ao lado da app.
- O site em cPanel é estático: com a versão real, as páginas lêem as notícias da API ao abrir (ou reconstrói-se o site a cada publicação).
- Editor real: texto formatado (negrito, listas, links), imagem de capa com redimensionamento, e registo de quem publicou e quando.

### Questões em aberto

- As permissões propostas para cada perfil estão certas? (ex.: o Marketing publica notícias sem revisão?)
- Os professores escrevem só artigos das suas disciplinas?
- Contas do painel: as mesmas da app MUKANDA ou contas separadas?
- Backend próprio (recomendado) ou CMS pronto?

### Ver no protótipo

- [Painel](https://mukandaprepa-prototipo.vercel.app/painel)
- [Notícias no site](https://mukandaprepa-prototipo.vercel.app/noticias)

---

<a id="esp-06"></a>
## ESP-06 — Página Sobre: sai o fecho “Criar Conta Grátis”

**Estado:** Implementada no protótipo · **Data:** 14 Set 2026

### Pedido

Na página Sobre está tudo bem; retirar apenas a secção “Queres fazer parte desta comunidade? — Criar Conta Grátis”.

### O que muda

- Saiu a secção laranja do fundo da página Sobre. O resto da página fica igual.
- Com as notas ligadas, uma nota azul marca o sítio onde estava a secção.

### Notas técnicas

- Os estilos .sobre-cta-final continuam em Sobre.css e podem ser apagados na versão final.

### Ver no protótipo

- [Sobre](https://mukandaprepa-prototipo.vercel.app/sobre)

---

<a id="esp-07"></a>
## ESP-07 — Blog com notícias e artigos

**Estado:** Implementada no protótipo · **Data:** 14 Set 2026

### Pedido

Na página do Blog, colocar as notícias e os artigos.

### O que muda

- Filtro no topo: Tudo · Notícias · Artigos, com o número de publicações de cada tipo.
- Notícias: a mais recente em destaque grande, as seguintes em lista ao lado.
- Artigos: grelha com matéria, nível e data; link para /artigos, onde se filtra por matéria.
- No fim, “A edição 2026”: ligações para os balanços das Maratonas e das Aulas Online.
- Tudo vem do painel de publicação (ESP-05): o que for publicado lá aparece no Blog.

### Notas técnicas

- Com o filtro “Notícias” ou “Artigos” activo, a lista mostra todas as publicações desse tipo (sem limite).

### Ver no protótipo

- [Blog](https://mukandaprepa-prototipo.vercel.app/blog)

---

<a id="esp-08"></a>
## ESP-08 — Maratonas e Aulas Online: balanço da edição 2026

**Estado:** Implementada no protótipo · **Data:** 14 Set 2026

### Pedido

As páginas Maratonas Online e Aulas Online passam a servir apenas para descrever o que foi realizado durante a MUKANDA PREPA 2026.

### O que muda

- Selo verde “Edição 2026 concluída · 20 Ago – 15 Set 2026” e títulos “Maratonas MUKANDA 2026” / “Aulas Online MUKANDA 2026”.
- Todos os textos passam ao passado (“funcionou”, “realizou-se”, “explicou”).
- Maratonas: saíram “Inscrever-me numa Maratona” e o contador; o calendário mostra as três semanas como “Realizada”.
- Aulas Online: saiu “Começar gratuitamente”; nova lista das disciplinas cobertas.
- Nas duas: faixa escura com os números da edição (mesma fonte da hero, valores de exemplo) e fecho “vão voltar” com comunidade e WhatsApp.

### Notas técnicas

- Peças partilhadas em src/components/Edicao2026.jsx (selo, números, fecho).
- O componente MaratonaCountdown e config/maratona.js deixaram de ser usados em todo o site; ficam no projecto.

### Questões em aberto

- Há fotografias ou gravações das aulas de 2026 que possamos mostrar nestas páginas?

### Ver no protótipo

- [Maratonas](https://mukandaprepa-prototipo.vercel.app/maratonas)
- [Aulas Online](https://mukandaprepa-prototipo.vercel.app/aulas-online)

---

<a id="esp-09"></a>
## ESP-09 — A Nossa Missão: contexto da fase actual (Recursos sem alterações)

**Estado:** Implementada no protótipo · **Data:** 14 Set 2026

### Pedido

Na página A Nossa Missão, o texto está bem: apenas contextualizar a fase em que o projecto está. A página Recursos está bem e fica como está.

### Decisão

Mantido o texto original da missão. Uma primeira versão com a página inteira refeita (a partir dos documentos do projecto) foi rejeitada e desfeita.

### O que muda

- Novo bloco “Onde estamos agora” depois do texto: edição 2026 concluída, app web em manutenção, app mobile a caminho, com link para a página da nova app.
- O 3.º parágrafo passa ao passado e indica as datas da fase gratuita (20 Ago – 15 Set 2026).
- Compromisso “Gratuito”: “Maratonas e aulas online 2026 foram sem custos”.
- Recursos: validada sem alterações.

### Ver no protótipo

- [A Nossa Missão](https://mukandaprepa-prototipo.vercel.app/missao)
- [Recursos](https://mukandaprepa-prototipo.vercel.app/recursos)

---

<a id="esp-10"></a>
## ESP-10 — Revisão geral de botões e textos

**Estado:** Implementada no protótipo · **Data:** 14 Set 2026

### Pedido

Verificar se ainda há botões ou páginas por actualizar e aplicar os cinco pontos encontrados.

### O que muda

- Contactos: o formulário deixa de enviar mensagens reais no protótipo — simula o envio (ENVIO_SIMULADO em Contactos.jsx).
- Sobre: “com uma biblioteca de exames passados a caminho” passa a “e exames passados disponíveis em Recursos”, com link.
- Menu Blog, rodapé e página 404: “Maratonas 2026” e “Aulas Online 2026”, porque as páginas são agora o balanço da edição.
- Entrar na app: novo botão “Entrar na comunidade”; “Voltar ao site” passa a link simples.
- Descrição do site para motores de busca (index.html): sai “100% gratuitas em 2026”, entra “Acompanha as novidades e a nova app mobile”.

### Notas técnicas

- Na versão final: pôr ENVIO_SIMULADO = false em src/pages/Contactos.jsx para o formulário voltar a enviar para o backend.
- Protótipo publicado no Vercel com o cabeçalho X-Robots-Tag: noindex (vercel.json), para não ser indexado pelo Google com dados de exemplo. RETIRAR na versão final.
- Componentes e páginas que já não aparecem no site e podem ser apagados na versão final: CtaFinal, MaratonaCountdown (+ config/maratona.js), PlanosPreview, Pilares, SobreResumo, e as páginas Planos, Equipa e IdentidadeVisual.

### Ver no protótipo

- [Contactos](https://mukandaprepa-prototipo.vercel.app/contactos)
- [Sobre](https://mukandaprepa-prototipo.vercel.app/sobre)
- [Entrar na app](https://mukandaprepa-prototipo.vercel.app/entrar-na-app)

---

<a id="esp-11"></a>
## ESP-11 — A Nossa Equipa: fotografia, nome e função

**Estado:** Implementada no protótipo · **Data:** 29 Set 2026

### Pedido

Repor a página da equipa, com fotografia, nome e função de cada elemento.

### Decisão

Lista fornecida pela direcção na folha de recolha (29 Set 2026): 19 pessoas, incluindo o corpo docente com nomes — antes era só por disciplina. Fundadores e directores passaram a ser um grupo só, porque são as mesmas três pessoas, cada uma a dirigir uma equipa.

### O que muda

- Página /equipa reposta, com link no rodapé e na página Sobre.
- Cinco grupos: Fundadores e Directores (3), Gestão e Administração (5), Suporte Informático (2), Marketing e Publicidade (5) e Corpo Docente (4 professores, com disciplina).
- Fundadores e Directores: Henrique Catraio (CEO e Fundador, director de Suporte Informático), Walter Sampaio (Co-fundador, director de Marketing e Publicidade) e Armando Baptista (Co-fundador, director de Gestão e Administração).
- Cada pessoa tem cartão com fotografia; quem ainda não tem foto aparece com as iniciais num círculo tracejado.
- Sem o Tadeu Epalanga (decisão da direcção, 23 Set 2026) e sem o Waldemar D’Orey (confirmado pela direcção a 29 Set 2026).
- A home e a página Sobre passaram a mostrar o mesmo grupo único de fundadores e directores.

### Notas técnicas

- Dados em src/config/equipa.jsx (DIRECCAO, EQUIPAS, DOCENTES). FUNDADORES e DIRECTORES foram fundidas em DIRECCAO; DISCIPLINAS deixou de ser usada.
- Fotografias: public/equipa-nome-apelido.webp, quadradas 600x600. Basta acrescentar `foto:` à pessoa.

### Questões em aberto

- Faltam 16 fotografias (só os três fundadores e directores têm).
- Confirmar: o Jason Matias foi posto em Suporte Informático (na folha vinha em Marketing, mas é programador).

### Ver no protótipo

- [A Nossa Equipa](https://mukandaprepa-prototipo.vercel.app/equipa)
- [Sobre](https://mukandaprepa-prototipo.vercel.app/sobre)

---

<a id="esp-12"></a>
## ESP-12 — Testemunhos reais dos estudantes

**Estado:** Implementada no protótipo · **Data:** 29 Set 2026

### Pedido

Substituir os testemunhos de exemplo da página inicial pelos depoimentos reais recolhidos junto dos estudantes.

### Decisão

Quatro depoimentos entregues pela direcção na folha de recolha (29 Set 2026), todos com autorização escrita do estudante para o nome e o texto. As fotografias ficam para depois.

### O que muda

- Secção “O que dizem os estudantes” passa a mostrar os quatro depoimentos reais, com nome, província e área.
- Saiu a etiqueta amarela “Testemunhos de exemplo”.
- Grelha de três passou a duas colunas, porque os textos reais são mais longos do que os de exemplo.
- Sem fotografia, o cartão mostra a inicial do estudante; o cartão já aceita `foto:` quando as fotografias chegarem.
- Decisão da direcção (29 Set 2026): ficam os quatro depoimentos na página inicial, incluindo os dois que trazem uma crítica (“devem melhorar o som”, “a dinâmica da correcção deve ser melhorada”). A escrita foi uniformizada com a do resto do site; as ideias e as críticas ficaram intactas.

### Notas técnicas

- Dados em src/config/depoimentos.js (DEPOIMENTOS). Acrescentar um depoimento é copiar um bloco — não é preciso mexer no código da página.
- Os textos são os dos estudantes. Por decisão da direcção (29 Set 2026) seguem a grafia e a escrita da marca do resto do site (“correcção”, “MUKANDA PREPA”, “aulas online”); o sentido e as críticas ficam intactos.
- Só entram depoimentos com autorização escrita — a coluna existe na folha de recolha e deve continuar a ser verificada.

### Questões em aberto

- Confirmar o nome “Miguane Lando Soares” (na folha vinha “Miguane lando Soares”).
- Decisão da direcção (29 Set 2026): os depoimentos não levam fotografia. A inicial de cada estudante é a versão final, não um lugar à espera de foto.

### Ver no protótipo

- [Página inicial (Testemunhos)](https://mukandaprepa-prototipo.vercel.app/)

---

<a id="esp-13"></a>
## ESP-13 — Notícias reais, com texto completo

**Estado:** Implementada no protótipo · **Data:** 29 Set 2026

### Pedido

Actualizar as notícias do site com os textos reais. As imagens vão ser concebidas pelo designer Leonel Macaia.

### Decisão

Seis notícias entregues pela direcção na folha de recolha (29 Set 2026), com título, data, resumo e texto completo. Deixam de ser textos de exemplo.

### O que muda

- As seis notícias passam a ter texto completo: /noticias/:id deixa de dizer que o texto ainda não foi escrito.
- Saiu a etiqueta amarela “Textos de exemplo” da página inicial.
- Ordem por data, da mais recente para a mais antiga: app mobile (25 Set), manutenção da app web (16 Set), fim da fase gratuita (16 Set), Maratona Nacional (20 Ago), lançamento oficial (17 Ago) e fase 100% gratuita (17 Ago).
- A página de cada notícia passou a mostrar subtítulos, listas e citações em destaque, e transforma endereços e e-mails em ligações.
- Os cartões da página Notícias ficaram com espaço para a imagem; sem imagem mostram a cor da notícia com a marca “Imagem por criar”.
- Decisões da direcção a 29 Set 2026: a marca passou a estar escrita “MUKANDA PREPA” também dentro dos textos; a grafia foi passada para a do resto do site (“projecto”, “actual”, “directo”, “objectivo”); as seis notícias ficam publicadas; e as notícias de Agosto mantêm os convites para a app web, como registo histórico.

### Notas técnicas

- Dados em src/config/noticias.js (NOTICIAS). Os blocos repetidos — canais oficiais e “Sobre a MUKANDA PREPA” — estão em duas constantes, para não andarem copiados seis vezes.
- Formatação do texto: “## ” subtítulo, “- ” lista, “> ” citação, linha em branco entre parágrafos. Feita por src/components/TextoRico.jsx, que serve também para os artigos.
- Imagens: public/noticia-nome.webp, 1200x630, e trocar `imagem: null` pelo caminho. Entram no cartão da página Notícias e no topo da notícia.
- As notícias de Agosto ligam para https://app.mukandaprepa.com/registo, que está em manutenção (ver ESP-01). Por decisão da direcção (29 Set 2026) ficam como estão: são o registo histórico do que foi anunciado na altura.
- Grafia do site: “projecto”, “actual”, “directo”, “objectivo” — sem o Acordo Ortográfico. Quem escrever notícias novas deve seguir a mesma grafia.

### Questões em aberto

- Faltam as seis imagens (Leonel Macaia).
- Os artigos continuam por preencher: a folha só tem a linha de exemplo.

### Ver no protótipo

- [Notícias](https://mukandaprepa-prototipo.vercel.app/noticias)
- [Notícia completa (exemplo)](https://mukandaprepa-prototipo.vercel.app/noticias/noticia-vem-ai-a-app-mobile-mukanda-prepa)
- [Blog](https://mukandaprepa-prototipo.vercel.app/blog)

---

<a id="esp-14"></a>
## ESP-14 — Secção dos parceiros retirada

**Estado:** Implementada no protótipo · **Data:** 29 Set 2026

### Pedido

Tirar a secção dos parceiros da página inicial — a MUKANDA PREPA ainda não tem parceiros.

### Decisão

Decisão da direcção (29 Set 2026). A secção mostrava seis espaços tracejados à espera de logótipos que não existem, e isso não ajuda quem visita o site.

### O que muda

- Saiu a secção “Quem caminha connosco” da página inicial, entre os testemunhos e as perguntas frequentes.
- Saiu também o convite “A tua instituição quer apoiar a MUKANDA PREPA?”.
- A ordem da página inicial passa a ser: hero → quem somos → ponto de situação → notícias → artigos → recursos → testemunhos → perguntas frequentes → comunidade.
- A aba “Parceiros” da folha de recolha deixa de ser precisa.

### Notas técnicas

- A secção foi retirada de src/pages/Homepage.jsx; o componente ParceirosHome e os estilos .home-parceiros__* saíram de src/components/home/.
- Quando houver parcerias fechadas, a secção volta ao mesmo lugar: grelha de logótipos (SVG ou PNG com fundo transparente) e convite para a página Contactos.

### Ver no protótipo

- [Página inicial](https://mukandaprepa-prototipo.vercel.app/)

---

<a id="esp-15"></a>
## ESP-15 — Artigo-modelo: estrutura dos artigos

**Estado:** Implementada no protótipo · **Data:** 09 Out 2026

### Pedido

Os professores pediram uma estrutura — um modelo de artigo publicado, para seguirem quando escreverem os seus.

### Decisão

A direcção estudou sites de referência (Mundo Educação, Brasil Escola) e fixou uma estrutura de cinco partes. O primeiro artigo real do site, “Como resolver a equação do 1.º grau”, é escrito nesse molde e serve de modelo.

### O que muda

- Estrutura fixada: 1) título e resumo de duas linhas; 2) um exemplo concreto do dia-a-dia, que põe toda a gente no mesmo ponto de partida; 3) as definições, apoiadas nesse mesmo exemplo; 4) as propriedades e regras a saber antes de resolver; 5) o passo a passo, com exemplos resolvidos, erros mais comuns e exercícios.
- Exercícios do fim (09 Out 2026): escolha múltipla — duas equações e um problema, quatro opções cada, sem a resposta certa. As opções erradas são os enganos típicos (sinal trocado, esquecer de dividir, não multiplicar tudo dentro dos parênteses). As respostas discutem-se na aula de correcção.
- Artigo “Como resolver a equação do 1.º grau” publicado, com texto completo — o primeiro artigo real do site.
- Os outros doze artigos continuam a ser só títulos, marcados como exemplo, à espera do texto dos professores.
- A página de artigo passou a mostrar passos numerados em círculos laranja, além dos subtítulos, listas e caixas de destaque que já tinha.
- Cada artigo passa a ter resumo, texto e autor próprios, em vez da frase automática “Artigo de Matemática, nível básico”.

### Notas técnicas

- Texto em src/config/artigos.js (constante MODELO). Os campos novos são resumo, corpo, autor e exemplo.
- Marcas de formatação, tratadas por src/components/TextoRico.jsx: “## ” subtítulo, “- ” lista, “1. ” passos numerados, “> ” caixa de destaque. As mesmas marcas servem para as notícias.
- Fórmulas escritas em texto simples (3x + 500 = 2000, x ÷ 3). Se mais tarde forem precisas fórmulas a sério — fracções, raízes, expoentes —, é preciso uma biblioteca de matemática (KaTeX ou MathJax); fica para decidir.

### Questões em aberto

- Quem assina o artigo-modelo? Está como “Equipa Pedagógica MUKANDA PREPA”. Se for o Misael Cagiba a rever e assinar, troca-se o nome.
- Os doze títulos de exemplo incluem Biologia e História, mas não há professores dessas disciplinas na lista da equipa.
- Falta decidir se os artigos levam imagem ou esquema. Hoje não levam.

### Ver no protótipo

- [Artigo-modelo](https://mukandaprepa-prototipo.vercel.app/artigos/artigo-como-resolver-a-equacao-do-1-grau)
- [Artigos](https://mukandaprepa-prototipo.vercel.app/artigos)

---

<a id="esp-16"></a>
## ESP-16 — Números reais da edição 2026

**Estado:** Implementada no protótipo · **Data:** 08 Nov 2026

### Pedido

Substituir os números de exemplo da página inicial pelos números reais da edição 2026.

### Decisão

Os números oficiais estão na Apresentação Oficial do projeto (Novembro de 2026), secção “MUKANDA PREPA 2026 em números”. A fase gratuita terminou a 15/09, por isso estão fechados e não voltam a mudar.

### O que muda

- Hero: 166 estudantes registados · 22 maratonas criadas · 103 sessões de maratona concluídas · 15 aulas online de correcção.
- Saiu a etiqueta amarela “Valores de exemplo” da hero e das páginas Maratonas e Aulas Online.
- Dois números novos, que não cabiam na hero: 100% de taxa de conclusão das sessões e 7 professores participantes.
- Maratonas mostra agora maratonas, sessões, taxa de conclusão e estudantes; Aulas Online mostra aulas, professores e estudantes.
- Os números antigos eram muito maiores do que os reais (1.250 estudantes, 3.400 participações). Passam a 166 e 103.

### Notas técnicas

- Dados em src/config/estatisticas.js. DADOS_DE_EXEMPLO passou a false — é esse interruptor que mostra ou esconde a etiqueta amarela em todo o site.
- ESTATISTICAS são os quatro números da hero; ESTATISTICAS_EXTRA os que só aparecem nas páginas da edição; TODAS_ESTATISTICAS junta os dois. O campo `sufixo` serve para a percentagem.
- A ordem dos números em cada página é agora a ordem das `chaves` que a página pede.

### Questões em aberto

- A notícia de 20 de Agosto diz “juntar-se a centenas de colegas”. Com 166 contas registadas, a frase exagera. Corrigir o texto histórico ou deixar como foi publicado?
- A “Visão 2030” da página A Nossa Missão foi escrita antes da visão oficial (“ser a plataforma número 1 em Angola e nos países de língua portuguesa”). Alinhar as duas?

### Ver no protótipo

- [Página inicial](https://mukandaprepa-prototipo.vercel.app/)
- [Maratonas 2026](https://mukandaprepa-prototipo.vercel.app/maratonas)
- [Aulas Online 2026](https://mukandaprepa-prototipo.vercel.app/aulas-online)

---

<a id="esp-17"></a>
## ESP-17 — Equipa alinhada com a lista oficial

**Estado:** Implementada no protótipo · **Data:** 08 Nov 2026

### Pedido

Actualizar a página da equipa pela lista de membros oficial.

### Decisão

Lista de Membros de 31/10/2026 (ata 013) e Especificações das Equipas (Novembro de 2026): 17 membros activos. A direcção confirmou que a Kassia António e a Kassia Kai são a mesma pessoa, e que a Anilde Aristóteles mantém “Criador de Conteúdo”.

### O que muda

- Passam a ser 17 pessoas, em vez de 19.
- Kassia António e Kassia Kai eram a mesma pessoa: fica só Kassia Kai, Gestora Administrativa.
- Ester Diahoha saiu e deixa de aparecer no Corpo Docente.
- Leonel Macaia mudou do Marketing para o Suporte Informático, como Designer Web, com a nota de que também está no Marketing.
- Wagner Cazanza passa a “Gestor Pedagógico · coordena o Corpo Docente”.
- Fernanda Vilinga e Jason Matias passam a “Desenvolvedora/Desenvolvedor de Software”; Sebastião Paulo a “Designer Gráfico”; Arão António a “Videomaker e Designer”.
- Anilde Aristóteles mantém “Criador de Conteúdo”, por decisão da direcção, embora os documentos oficiais escrevam “Criadora”.

### Notas técnicas

- Dados em src/config/equipa.jsx (DIRECCAO, EQUIPAS, DOCENTES). Substitui a ESP-11.
- Quem está em duas equipas aparece uma só vez, com as duas na função — evita a mesma cara duas vezes na página.
- Fonte oficial: DOCUMENTOS RECENTES › Grupo Geral › Membros › Lista-Membros-MukandaPrepa.xlsx e Apresentação do Projeto › Equipas-MukandaPrepa-Especificacoes.docx.

### Questões em aberto

- As duas vagas — Designer de Maratonas e Professor(a) de Língua Portuguesa — devem aparecer no site, junto ao “Queres trabalhar connosco?”, ou ficam fora?
- Faltam 14 fotografias. A lista oficial diz que 13 destas pessoas já deram fotografia e autorização de imagem, mas os ficheiros não estão na pasta do projecto.
- O documento das fotografias foi entregue à Kassia António; a tarefa é da Gestora Comercial, Mariana Baptista. Reemitir?
- O documento dos artigos manda a Ester Diahoha escrever três artigos de Língua Portuguesa. Ela saiu — refazer o documento.

### Ver no protótipo

- [A Nossa Equipa](https://mukandaprepa-prototipo.vercel.app/equipa)
- [Sobre](https://mukandaprepa-prototipo.vercel.app/sobre)

---

<a id="esp-18"></a>
## ESP-18 — Imagens provisórias para as notícias

**Estado:** Implementada no protótipo · **Data:** 08 Nov 2026

### Pedido

Enquanto o designer não entrega as seis imagens, criar uma figura simples para cada notícia e pô-la no protótipo.

### Decisão

Imagens provisórias. Refeitas a 08/11/2026 aproveitando elementos das propostas que o designer apresentou e que a equipa SI não validou. Saem assim que o Leonel Macaia entregar as definitivas.

### O que muda

- As seis notícias passam a ter imagem no cartão e no topo da página.
- Saiu a marca “Imagem por criar” dos cartões.
- Elementos aproveitados das propostas do designer: barra azul de categoria no topo com megafone, logótipo oficial, pincelada atrás do título, confetti, selo redondo “100% grátis”, cartões de data com calendário, assinatura “Mais conhecimento, mais conquistas!”, lista com vistos, chips das disciplinas e faixa laranja em baixo.
- Cada imagem tem a sua categoria no topo: App mobile, App web, Fase gratuita, Maratona Nacional, Lançamento, Maratonas e Aulas.
- Cores da marca: laranja, azul, azul-marinho e amarelo de realce.

### Notas técnicas

- Ficheiros em public/noticia-*.svg, 1200x630 — o mesmo formato das definitivas, que serve também para a partilha no WhatsApp e no Facebook.
- São SVG, 24 a 37 kB cada (o logótipo vai lá dentro em PNG), e não desfocam em nenhum ecrã. Dentro de uma imagem o navegador não carrega as fontes da marca, por isso os títulos usam textLength para caberem sempre na pincelada, seja qual for a letra do sistema.
- Para trocar pelas definitivas: mudar o caminho em src/config/noticias.js e apagar o .svg correspondente.

### Questões em aberto

- São um remendo até o Leonel Macaia entregar as seis imagens definitivas.

### Ver no protótipo

- [Notícias](https://mukandaprepa-prototipo.vercel.app/noticias)
- [Notícia completa (exemplo)](https://mukandaprepa-prototipo.vercel.app/noticias/noticia-vem-ai-a-app-mobile-mukanda-prepa)

---

<a id="esp-19"></a>
## ESP-19 — Artigos escondidos até os professores escreverem

**Estado:** Implementada no protótipo · **Data:** 08 Nov 2026

### Pedido

Esconder os artigos: os professores ainda não os escreveram e não adianta publicar.

### Decisão

Os doze títulos de exemplo saem do site. A página /artigos continua a funcionar por link directo, com o artigo-modelo, porque é o endereço que o corpo docente recebeu no seu documento.

### O que muda

- Saiu a entrada “Artigos” do menu Blog e do rodapé.
- Saiu a secção dos artigos da página inicial.
- Saiu o separador “Artigos” do Blog e a contagem deixa de os somar.
- Saíram os doze títulos de exemplo. Fica só o artigo-modelo, acessível por link directo.

### Notas técnicas

- Interruptor único: ARTIGOS_VISIVEIS em src/config/artigos.js. A false esconde o menu, o rodapé, a secção da home e o separador do Blog.
- Quando os artigos chegarem: acrescentá-los a ARTIGOS e pôr ARTIGOS_VISIVEIS a true. Não é preciso mexer em mais nada.

### Questões em aberto

- Os artigos voltam quando o corpo docente entregar. A estrutura está fixada na ESP-15.

### Ver no protótipo

- [Artigo-modelo (link directo)](https://mukandaprepa-prototipo.vercel.app/artigos/artigo-como-resolver-a-equacao-do-1-grau)
- [Página inicial](https://mukandaprepa-prototipo.vercel.app/)
- [Blog](https://mukandaprepa-prototipo.vercel.app/blog)

---

<a id="esp-20"></a>
## ESP-20 — Fotografias da equipa

**Estado:** Implementada no protótipo · **Data:** 08 Nov 2026

### Pedido

Pôr no site as fotografias profissionais da equipa, entregues pela Gestão e Administração.

### Decisão

Doze das dezassete pessoas já têm retrato. Faltam cinco: Mariana Baptista, Leonel Macaia, Misael Cagiba, Roberto Costa e Cornélio Catuca.

### O que muda

- A página da equipa passa de três para dezassete fotografias — toda a gente tem rosto.
- As fotografias dos três fundadores e directores foram substituídas pelas do conjunto profissional, para toda a gente ter o mesmo estilo.
- A home e a página Sobre mostram as novas fotografias dos fundadores e directores.

### Notas técnicas

- Originais em DOCUMENTOS RECENTES › Grupo Geral Mukanda Prepa › Membros › Fotos pro. Duas vieram dentro de PDF (Kassia Kai e Walter Sampaio) e quatro em RAW da máquina (.CR2), deitadas: foram extraídas e rodadas.
- No site: recorte quadrado a partir do original, 600x600, WebP a 86% — entre 15 e 42 kB cada. Caminho em public/equipa-nome-apelido.webp.
- O recorte é feito mais acima do centro, para não cortar a cabeça. Algumas precisaram de enquadramento próprio (Fernanda Vilinga, Leda Dias, Armando Baptista), por aparecerem mais afastadas na fotografia.
- Só uma fotografia foi tratada: a do Roberto Costa, que estava escura. Levou um acerto automático de níveis e um ligeiro aumento de brilho. As restantes estão como vieram.
- A do Leonel Macaia vinha num grande plano muito fechado, com a cabeça a tocar nos limites. Foi alargada com o próprio fundo preto (tela de 1080 px) para o rosto ficar do tamanho dos outros.
- Saiu public/equipa-tadeu-epalanga.webp, que já não era usado.

### Questões em aberto

- A fotografia do Leonel Macaia é a preto e branco, ao contrário das outras dezasseis, que são a cores. Destoa na página. Manter ou pedir outra?
- A fotografia do Leonel Macaia tem a marca de água “ZOLA STUDIO” no canto superior. O enquadramento de rosto e ombros deixa-a de fora, mas convém confirmar se há alguma obrigação de crédito ao estúdio.
- A fotografia da Fernanda Vilinga é de um evento e destoa das outras. A direcção decidiu mantê-la por agora e pedir-lhe outra mais tarde.
- As fotografias dos três professores foram tiradas num escritório, com flash e parede azul, e destoam das de estúdio. Mantidas; a direcção decide se vale a pena repetir.
- A Leda Dias tem agora duas fotografias na pasta — a antiga, de interior, e uma nova em RAW, da mesma sessão dos professores. Ficou a antiga, que está melhor. Confirmar.

### Ver no protótipo

- [A Nossa Equipa](https://mukandaprepa-prototipo.vercel.app/equipa)
- [Sobre](https://mukandaprepa-prototipo.vercel.app/sobre)

---

<a id="esp-21"></a>
## ESP-21 — Limpeza antes do lançamento

**Estado:** Implementada no protótipo · **Data:** 08 Nov 2026

### Pedido

Executar as decisões que estavam tomadas mas por fazer, e tirar do site o que já não serve.

### Decisão

Decisões da direcção: o site é informativo e sem backend; o formulário de contacto passa a botões de WhatsApp e e-mail (08 Nov 2026).

### O que muda

- Saiu o botão “Entrar na app” da barra de navegação, no computador e no telemóvel. A app está em manutenção e o site não deve mandar ninguém para uma porta fechada.
- A página /entrar-na-app mantém-se, e continua a ser alcançada pelo “Ponto de situação” da página inicial e pela página A Nossa Missão, para quem quiser saber mais.
- Saiu o painel de publicação: o link “Painel da equipa” do rodapé, as rotas /painel e /painel/entrar, e os quatro ecrãs.
- O formulário de contacto deu lugar a dois botões — “Falar no WhatsApp”, com a mensagem já preenchida, e “Enviar e-mail”, para a caixa de apoio ao estudante — mais o convite para a Comunidade.
- O link da MUKANDA Community estava vazio: todos os botões “Entrar na comunidade” abriam uma conversa com a equipa. Passou a ter o endereço oficial.
- Saíram seis ficheiros de public/ que nenhuma página usava.

### Notas técnicas

- O site deixou de depender de api.mukandaprepa.com: src/config/api.js foi apagado e não há mais nada a chamar o backend. Sem backend não há CORS para configurar nem caixa de entrada a vigiar.
- As mensagens e assuntos já preenchidos estão em src/config/contactos.js (MENSAGEM_WHATSAPP_CONTACTO, ASSUNTO_EMAIL_CONTACTO, emailCom).
- TIPOS mudou de src/prototipo/painelPerfis.js, que saiu com o painel, para src/config/tiposConteudo.js — a página de notícia precisa dele.
- O build desceu de 388 kB para 372 kB de JavaScript e de 74 kB para 63 kB de CSS.

### Questões em aberto

- Quando a app mobile sair, entra na barra um botão novo com as ligações às lojas. O sítio está marcado no Navbar.

### Ver no protótipo

- [Contactos](https://mukandaprepa-prototipo.vercel.app/contactos)
- [Página inicial](https://mukandaprepa-prototipo.vercel.app/)

---

<a id="esp-22"></a>
## ESP-22 — Título e descrição próprios para cada página

**Estado:** Implementada no protótipo · **Data:** 08 Nov 2026

### Pedido

Preparar o site para ser encontrado no Google: cada página com o seu título e a sua descrição, mais o sitemap e o robots.

### Decisão

As doze páginas partilhavam o mesmo título e a mesma descrição — no Google apareciam todas iguais, sem se distinguirem.

### O que muda

- Cada página passa a ter título e descrição próprios: “Sobre nós · MUKANDA PREPA”, “A Nossa Equipa · MUKANDA PREPA”, e assim por diante.
- As páginas de notícia e de artigo tiram o título e a descrição do próprio conteúdo — quem publicar uma notícia nova não tem de escrever mais nada.
- A página “não encontrada” também tem texto próprio.
- Novo sitemap.xml com 17 endereços: as 11 páginas públicas e as 6 notícias.
- Novo robots.txt, que aponta para o sitemap e esconde a página /especificacoes, que é de trabalho.
- Cada página passa a declarar o seu endereço canónico, e as etiquetas de partilha (og: e twitter:) acompanham o título e a descrição.

### Notas técnicas

- Textos em src/config/seo.js — um sítio só. Descrições entre 120 e 160 caracteres, que é o que o Google mostra.
- src/components/useMeta.js escreve no <head>; src/components/MetaPagina.jsx está montado no MainLayout e trata das páginas de texto fixo. A página de notícia chama o useMeta directamente.
- O sitemap foi gerado a partir de PAGINAS_PUBLICAS e da lista de notícias. Quando houver notícias ou páginas novas, é preciso gerá-lo outra vez — vale a pena passar isso para um script do build.
- O robots.txt permite indexar tudo. No protótipo isso não tem efeito: o Vercel envia um cabeçalho X-Robots-Tag: noindex, que manda sobre o ficheiro. Esse cabeçalho está em vercel.json e NÃO pode ir para o site real.

### Questões em aberto

- O Google executa JavaScript e lê estes títulos; o WhatsApp e o Facebook não. Para eles vale sempre o que está no index.html, por isso todas as partilhas mostram o mesmo texto. Ter pré-visualização diferente por página obriga a gerar um ficheiro HTML por endereço no build — decisão por tomar.
- Falta inscrever o site no Google Search Console e submeter o sitemap. Só se faz com o domínio real.

### Ver no protótipo

- [Sobre](https://mukandaprepa-prototipo.vercel.app/sobre)
- [A Nossa Equipa](https://mukandaprepa-prototipo.vercel.app/equipa)
- [Notícia completa (exemplo)](https://mukandaprepa-prototipo.vercel.app/noticias/noticia-vem-ai-a-app-mobile-mukanda-prepa)

---

<a id="esp-23"></a>
## ESP-23 — Imagem e texto de partilha

**Estado:** Implementada no protótipo · **Data:** 08 Nov 2026

### Pedido

Fazer com que o link do site, partilhado no WhatsApp ou no Facebook, apareça com imagem e título em vez de só o endereço.

### Decisão

Imagem feita com as cores e o logótipo da marca, até haver uma do designer. Para um projecto que vive do WhatsApp, partilhar um link sem imagem é desperdiçar a partilha.

### O que muda

- Nova imagem de partilha, 1200 × 630: logótipo, “Preparação para o acesso à universidade”, o slogan e o endereço do site.
- O index.html passa a declarar og:title, og:description, og:image, og:url, og:site_name, og:locale e og:type, mais as equivalentes do Twitter/X.
- A descrição do site foi reescrita: a antiga falava da app mobile, que já não é o próximo passo do projecto.
- Cada página declara também o seu endereço canónico.

### Notas técnicas

- Ficheiro em public/og-mukandaprepa.png, 50 kB. Desenhado em Arial porque a Montserrat não está instalada na máquina — quando o Leonel Macaia fizer uma, substitui-se o ficheiro e não é preciso mexer no código.
- O endereço da imagem é absoluto e aponta para https://www.mukandaprepa.com. É obrigatório: os pré-visualizadores não resolvem caminhos relativos. Enquanto a imagem não estiver no domínio real, a partilha do link do protótipo não mostra imagem.
- O WhatsApp e o Facebook não executam JavaScript, por isso lêem sempre o que está no index.html. O título por página (ESP-22) serve ao Google, não às partilhas.
- Testar com o depurador de partilhas do Facebook e enviando o link para um grupo de WhatsApp — o WhatsApp guarda em cache, por isso convém testar com o link limpo.

### Questões em aberto

- Para ter imagem e texto diferentes por página nas partilhas seria preciso gerar um ficheiro HTML por endereço no build. Fica por decidir (mesma questão da ESP-22).
- A imagem é provisória: vale a pena pedir uma ao Leonel Macaia, com o mesmo formato 1200 × 630.

### Ver no protótipo

- [Página inicial](https://mukandaprepa-prototipo.vercel.app/)

---

<a id="esp-24"></a>
## ESP-24 — Velocidade: fontes, código e imagens

**Estado:** Implementada no protótipo · **Data:** 08 Nov 2026

### Pedido

Deixar o site rápido para quem o abre no telemóvel, com dados móveis.

### Decisão

Três frentes: tirar a dependência do Google para as fontes, dividir o código por página e dar ao telemóvel imagens do tamanho do telemóvel.

### O que muda

- As fontes Montserrat e Poppins passaram a estar no próprio site. Antes vinham do Google por @import dentro do CSS — a pior forma: o navegador só as descobria depois de ler a folha de estilos, e ainda tinha de resolver dois domínios novos. O site deixou de fazer qualquer pedido a servidores de terceiros.
- As duas fontes do primeiro ecrã são pedidas logo no início, para o texto não trocar de letra à frente de quem está a ler.
- Cada página passou a ser um ficheiro próprio. Quem abre os Contactos deixou de descarregar também o código da Equipa, das Notícias e de tudo o resto. O ficheiro principal desceu de 383 kB para 246 kB, e o CSS de 64 kB para 27 kB.
- As três imagens pesadas passaram a ter três tamanhos. Num telemóvel, a ilustração das Maratonas desceu de 119 kB para 19 kB.
- O logótipo passou a declarar as medidas, para a barra de navegação não saltar enquanto a imagem carrega.

### Notas técnicas

- Fontes em public/fontes/ (5 ficheiros woff2, 92 kB, só o subconjunto latino) e declaradas em src/fontes.css. Foram geradas a partir do CSS do Google; licença SIL Open Font License.
- Divisão do código com React.lazy em src/App.jsx. A página inicial e a de erro ficam de fora: a primeira é quase sempre a porta de entrada, a segunda tem de estar sempre pronta. O ecrã de espera é a classe .a-esperar, com 70vh, para o rodapé não saltar.
- Imagens: srcSet com 470/700/940 nas ilustrações e 650/980/1300 na hero. A hero mantém fetchPriority="high" por ser a primeira coisa que se vê; as outras passaram a loading="lazy".
- Falta ligar a compressão (gzip) e a validade da cache no cPanel — isso é configuração do servidor, não do código.

### Questões em aberto

- O registo das especificações são 94 kB que ainda viajam em todas as páginas, porque a barra do protótipo mostra a contagem. Desaparece quando a camada do protótipo sair.
- Falta medir com o PageSpeed Insights antes e depois, no domínio real, e guardar os dois resultados.

### Ver no protótipo

- [Página inicial](https://mukandaprepa-prototipo.vercel.app/)
- [Maratonas 2026](https://mukandaprepa-prototipo.vercel.app/maratonas)

---

<a id="esp-25"></a>
## ESP-25 — Acessibilidade

**Estado:** Implementada no protótipo · **Data:** 08 Nov 2026

### Pedido

Deixar o site utilizável por quem navega com o teclado, por quem não suporta movimento no ecrã e por quem tem dificuldade em ler texto de baixo contraste.

### Decisão

Corrigido tudo o que não obriga a mexer na identidade visual. O que obriga ficou em aberto, com a medição feita.

### O que muda

- Novo atalho “Saltar para o conteúdo”, o primeiro elemento da página. Só aparece quando recebe o foco pelo teclado, e leva directamente ao conteúdo sem passar por toda a navegação.
- Foco visível: um anel azul à volta do que está seleccionado. Antes não havia nenhum — quem navegava por teclado não fazia ideia de onde estava. Sobre fundos escuros ou laranja o anel é branco, para se ver.
- O anel só aparece na navegação por teclado, por isso não incomoda quem usa o rato.
- Quem pede ao sistema para reduzir o movimento deixa de ter animações e transições em todo o site. Os números da página inicial já respeitavam esse pedido; faltava o resto.
- O laranja do texto sobre fundo claro passou a ser um tom mais escuro: o da marca dá 2,87:1 de contraste, abaixo do mínimo de 4,5:1, e o novo dá 4,59:1. É o mesmo laranja, só mais fechado. Mudaram 54 regras de estilo.

### Notas técnicas

- Estilos no fim de src/index.css. O token novo é --color-orange-texto (#C94E08) e usa-se SÓ em texto sobre fundo claro; os fundos, botões e desenhos continuam com --color-orange, que não se toca.
- O <main> tem id="conteudo" e tabIndex={-1}, para o atalho poder levar o foco para lá. O contorno dele está desligado, senão aparecia uma caixa à volta da página inteira.
- O contraste foi medido no próprio navegador, elemento a elemento, comparando a cor do texto com o fundo que lhe calha por baixo — não a olho.

### Questões em aberto

- Falta uma decisão da direcção: o texto branco sobre o laranja da marca (botões principais e a etiqueta “Agora”) dá 2,87:1, e o mínimo é 4,5:1. Usar o laranja mais escuro (#C94E08) também como fundo desses botões resolve todos os casos de uma vez e dá 4,59:1 — mas muda o aspecto de todos os botões principais do site. É uma decisão de identidade visual, não minha.
- Falta testar com um leitor de ecrã e num telemóvel real, com dados móveis.

### Ver no protótipo

- [Página inicial](https://mukandaprepa-prototipo.vercel.app/)
- [Contactos](https://mukandaprepa-prototipo.vercel.app/contactos)

---

<a id="esp-26"></a>
## ESP-26 — Fim do protótipo: o site passa a ser o site

**Estado:** Implementada · **Data:** 08 Nov 2026

### Pedido

Retirar a camada do protótipo, depois de a direcção rever e aprovar o site.

### Decisão

O protótipo cumpriu o que tinha a cumprir: mostrar as ideias, deixá-las discutir e registar cada decisão. Com o site aprovado, as notas deixam de fazer sentido em cima do ecrã — e passam a viver neste documento.

### O que muda

- Saem os marcadores azuis numerados, as notas para programadores e a barra "Protótipo" do canto inferior esquerdo.
- Sai a página `/especificacoes`. O registo das 26 passa a ser este ficheiro.
- Sai a pasta `src/prototipo/` inteira: as notas, o registo das especificações e o armazém de conteúdos do painel cancelado.
- Os conteúdos passam a vir de `src/config/conteudos.js`, que lê as notícias e os artigos dos ficheiros de configuração. Antes juntava-os com o que fosse criado no painel, que já não existe.
- **A hero ficou numa só.** Havia três propostas em comparação (`?hero=a|b|c`); fica a dos números da edição 2026, que é a que a direcção reviu e aprovou. As outras duas estão no histórico do git, no ramo `prototipo`, até ao commit da ESP-25.
- Saem cinco componentes e duas páginas que já não estavam ligados a nada: `CtaFinal`, `MaratonaCountdown`, `Pilares`, `PlanosPreview`, `SobreResumo`, e as páginas `Planos` e `IdentidadeVisual`.
- Saem as regras de estilo das duas heros que não ficaram.
- Sai a etiqueta amarela de "valores de exemplo", que já não tinha nada para assinalar.

### Notas técnicas

- O JavaScript que o visitante descarrega na primeira visita desceu de 340 kB para 284 kB (de 110 kB para 91 kB comprimidos), e o CSS principal de 27 kB para 21 kB.
- O `README.md` passou a ter a lista do que é preciso fazer antes de publicar, e o mapa de onde vivem os conteúdos. Com as notas fora do ecrã, é lá que um programador novo se orienta.
- O `sitemap.xml` é escrito à mão: quando houver páginas ou notícias novas, é preciso acrescentá-las.

### Questões em aberto

- **A validar antes de publicar:** as respostas das perguntas frequentes nunca foram confirmadas pela direcção. Tinham uma etiqueta "Respostas a validar" que saiu com a camada do protótipo, por isso agora aparecem como se estivessem fechadas.
- O `vercel.json` mantém o cabeçalho que manda não indexar. É do endereço de pré-visualização; o cPanel não lê este ficheiro. Está explicado no README.
- Continuam por decidir: o contraste do branco sobre o laranja da marca (ESP-25), a pré-visualização por página no WhatsApp (ESP-22 e ESP-23), as imagens definitivas do designer (ESP-18 e ESP-23), quem assina o artigo-modelo (ESP-15) e a fotografia do Leonel Macaia (ESP-20).

---

<a id="esp-27"></a>
## ESP-27 — Logotipo da barra e ícone do separador

**Estado:** Implementada · **Data:** 08 Nov 2026

### Pedido

Da direcção, a olhar para o site num computador: *"Um parece com um tamanho pequeno e outro está sem fundo."*

### Decisão

Dois problemas diferentes, com a mesma origem: os ficheiros do logotipo foram usados como vieram do designer, sem os preparar para o sítio onde iam aparecer.

### O que muda

- **O logotipo da barra.** O ficheiro original tinha a marca ao centro e 58% de espaço vazio à volta. A barra reservava-lhe uma altura, o espaço vazio comia-a, e a marca ficava pequena. Passou a ser usada a marca aparada, sem margem — ocupa agora a altura toda que a barra lhe dá.
- **O ícone do separador.** Era a marca sobre fundo transparente. Ao lado do Gmail, do Drive ou do Facebook, que têm todos um quadrado de cor, parecia fino e apagado. Passou a ser a marca branca sobre um quadrado laranja de cantos arredondados, nos tamanhos 32, 192 e 512, mais o de 180 que o iPhone usa quando alguém guarda o site no ecrã inicial.

### Notas técnicas

- Os ícones são gerados a partir do logotipo oficial da pasta `DOCUMENTOS RECENTES/LOGOTIPO`, não desenhados de novo.
- O ícone de Apple não leva cantos arredondados: o sistema arredonda-os sozinho, e arredondá-los duas vezes deixa uma orla.

---

<a id="esp-28"></a>
## ESP-28 — Publicação automática no cPanel a partir do `main`

**Estado:** Implementada · **Data:** 08 a 10 Nov 2026

### Pedido

Da direcção: *"Carregar ficheiros zips não foi para mim uma boa ideia e nem para engenheira Fernanda. Foi extremamente trabalhoso. Eu quero utilizar a `main` do repositório directamente."*

### Decisão

Quem compila passa a ser o GitHub. Sempre que alguma coisa entra no ramo `main`, o GitHub instala, compila e envia só a pasta `dist/` — os ficheiros prontos — para dentro do `public_html`. Ninguém volta a abrir o gestor de ficheiros do cPanel.

O painel deste alojamento não tem Terminal, por isso não há maneira de correr o `npm run build` no servidor; e não oferece contas de FTP, só SSH com chave. As duas limitações decidiram o desenho: compila-se fora, envia-se por SFTP com chave.

### O que muda

- Novo ficheiro `.github/workflows/publicar.yml`, com nove passos e um limite de 15 minutos.
- A chave privada vive num *secret* do GitHub e em mais lado nenhum. O servidor, o utilizador, a porta e a pasta são *variables*, à vista no painel.
- O envio é um espelho **sem apagar**. Dentro do `public_html` estão as pastas `api.mukandaprepa.com` e `app.mukandaprepa.com`, criadas pelo cPanel: um espelho que apagasse o que não reconhece levava-as à frente.
- A publicação pára com erro se faltar o `index.html` ou o `.htaccess` em `dist/`.

### Notas técnicas

Três coisas correram mal pelo caminho, e as três deixaram defesa escrita no ficheiro:

- **O envio ficou pendurado 12 minutos.** O `ssh` estava à espera de uma palavra-passe que ninguém ia escrever. Passou a levar `BatchMode=yes` e `ConnectTimeout=20`: em vez de esperar para sempre, falha em segundos e diz porquê. Há agora um passo só para testar a ligação, antes de enviar seja o que for.
- **A chave não era aceite e não se percebia porquê.** O passo da chave passou a dizer o que o OpenSSH respondeu, quantas linhas tem o *secret* e como começa — sem nunca mostrar a chave.
- **A chave tinha palavra-passe sem ninguém a ter escrito.** O gestor de palavras-passe do navegador preencheu sozinho o campo da *passphrase* no formulário do cPanel. Foi gerada outra, com os campos vazios, e autorizada.

### Questões em aberto

- As cópias de segurança automáticas estão desligadas pelo administrador do servidor. Antes de uma mudança grande, convém descarregar uma cópia em *Backup → Download a Home Directory Backup*.

---

<a id="esp-29"></a>
## ESP-29 — HTTPS e endereço fixo com www

**Estado:** Implementada · **Data:** 11 Nov 2026

### Pedido

Da direcção, logo depois da primeira publicação: *"O site apresenta problemas de conexão não segura?"*

### Decisão

O certificado sempre esteve bom — AutoSSL válido até Janeiro de 2027, com e sem www. O que faltava era mandar quem chega por `http://` passar para `https://`. No telemóvel, que abria já em `https`, aparecia o cadeado; no computador, não.

### O que muda

- Quem chega por `http://` é reencaminhado para `https://`, com código 301.
- Quem chega sem `www` é reencaminhado para `www.mukandaprepa.com`. Um endereço só, para o Google não contar o site duas vezes.

### Notas técnicas

As duas regras estão limitadas ao domínio principal de propósito. O Apache lê este mesmo `.htaccess` quando serve `api.mukandaprepa.com` e `app.mukandaprepa.com`, cujas pastas vivem dentro do `public_html` — sem esse cuidado, os dois subdomínios eram atirados para o site institucional.

---

<a id="esp-30"></a>
## ESP-30 — A página inicial ao contrário: certa no telemóvel, errada no computador

**Estado:** Implementada · **Data:** 11 Nov 2026

### Pedido

Da direcção, depois de o site estar no ar: *"A home está estranha (apenas no PC), porque no telefone funcionou bem."* E, mais tarde, a desfazer a primeira suspeita: *"Não mudou mesmo depois de limpar a cache."*

### Decisão

O defeito era nosso e vinha da ESP-26. Foi reposto o ficheiro original e a limpeza refeita como deve ser.

### O que muda

- `src/components/hero/HeroVariantes.css` passa a ter 178 linhas, 32 chavetas abertas e 32 fechadas, só com `hero-v` (partilhado) e `hero-a` (a proposta escolhida).
- A página inicial volta a desenhar-se como foi aprovada em ecrãs largos: a hero em duas colunas, os factos em grelha, os cartões lado a lado.

### Notas técnicas

Vale a pena ficar registado, porque a lição é mais larga do que o erro.

Quando a ESP-26 retirou as duas propostas de hero que não ficaram, a remoção foi feita com uma expressão regular. Uma expressão regular não sabe que um `@media` abre uma chaveta à volta de outras: levou o conteúdo e deixou **duas chavetas por fechar**. No ficheiro de CSS único que o Vite gera, tudo o que vinha a seguir ficou preso dentro de `(max-width: 1023px)` e `(max-width: 560px)` — ou seja, só se aplicava em ecrãs estreitos. Daí o sintoma ao contrário: o telemóvel acertava, o computador não.

O defeito foi encontrado a percorrer as regras de estilo no próprio navegador e a perguntar dentro de que `@media` estava cada uma. A contagem de chavetas confirmou-o em segundos, e nenhum dos outros ficheiros de CSS estava desequilibrado.

A remoção foi refeita com um programa que conta chavetas, entra dentro dos `@media` e limpa **selector a selector** em vez de deitar fora a regra inteira — era isso que faltava para `.hero-a__inner, .hero-c__inner` perder só a segunda metade.

Antes disto houve duas explicações erradas da minha parte — a cache do navegador e a compressão — e as duas foram desmentidas por quem estava a ver o site.

---

<a id="esp-31"></a>
## ESP-31 — Um ficheiro que falta deixa de devolver o index.html

**Estado:** Implementada · **Data:** 11 Nov 2026

### Pedido

Nenhum: foi apanhado ao publicar a correcção da ESP-30.

### Decisão

Durante a publicação, o `index.html` novo chegou ao servidor **antes** dos ficheiros da pasta `assets/`. Nesse intervalo de cerca de um minuto, quem abriu o site pediu o JavaScript novo, caiu na regra das rotas do React e recebeu o `index.html` — com código 200 e com a cache de um ano que damos aos ficheiros versionados.

O navegador guardou HTML debaixo do endereço do JavaScript. E, como o nome de um ficheiro versionado só muda quando o conteúdo muda, nem recarregar a página resolvia: ficaria assim durante um ano.

### O que muda

Duas correcções, uma para a causa e outra para a consequência:

- **A publicação envia o `index.html` em último lugar**, sozinho, depois de tudo o que ele nomeia já lá estar. O intervalo deixa de existir.
- **Um ficheiro que não existe devolve 404** em vez do `index.html`. Um 404 não se guarda em cache, por isso o navegador volta a pedir assim que o ficheiro chegar. As rotas do React continuam a ir ao `index.html` — só os pedidos de ficheiros e das pastas `assets/` e `fontes/` é que passam a dar 404.

### Notas técnicas

Verificado no site publicado: ficheiro que falta devolve 404, ficheiro que existe devolve 200 com o tipo certo, `/equipa` continua a abrir, e o `sitemap.xml`, o `robots.txt` e as fontes não foram afectados.

### Questões em aberto

- Quem tenha aberto o site naquele minuto precisa de um **Ctrl+Shift+R**, uma vez. Não há maneira de resolver isso do lado do servidor: o endereço do ficheiro é o mesmo e o navegador nem chega a perguntar.

---

<a id="esp-32"></a>
## ESP-32 — Inscrição no Google Search Console

**Estado:** Implementada · **Data:** 11 Nov 2026

### Pedido

Da direcção: *"Inscreve no Google Search Console e submete o sitemap."*

### Decisão

Sem isto, o Google descobre o site mais cedo ou mais tarde, mas às cegas e ao seu ritmo. Com a inscrição feita, dizemos-lhe quais são as páginas, ficamos a saber o que ele indexou e o que não conseguiu, e recebemos aviso por e-mail quando alguma coisa corre mal.

Foi escolhida a propriedade de **prefixo de URL**, `https://www.mukandaprepa.com/`, e não a de domínio. A de domínio obriga a mexer no DNS e arrastaria atrás os subdomínios `app.` e `api.`, que não são para indexar. O endereço leva `www` porque é esse o canónico desde a ESP-29.

### O que muda

- Novo ficheiro `public/googled0d18e1fd63ac327.html`, de uma linha, na raiz do site. É por ele que o Google confirma que o site é nosso. **Não se apaga:** se desaparecer, o Google deixa de reconhecer a propriedade.
- O `sitemap.xml`, com as 17 páginas, foi submetido.

### Notas técnicas

A primeira tentativa de verificação falhou com *"o conteúdo do ficheiro de validação é incorrecto"*, e a mensagem enganava: o ficheiro não estava sequer no servidor. Um pedido terminado em `.html` que não existisse caía na regra das rotas do React e recebia o `index.html` com código 200 — o Google leu isso e queixou-se do conteúdo em vez de dizer que não encontrava nada.

Ficou corrigido na mesma linha da ESP-31: um `.html` que não existe passa a dar 404, como já davam o `js`, o `css` e os restantes.

Confirmado no site publicado que o ficheiro responde 200 com o conteúdo exacto ao verificador do Search Console e ao Googlebot, e que o `sitemap.xml` lhes chega como `application/xml`.

### Questões em aberto

- Todas as páginas são servidas a partir do mesmo `index.html`, com o título e a descrição escritos pelo JavaScript depois de a página abrir. O Google executa JavaScript, por isso lê-os — mas quem não executa (a pré-visualização do WhatsApp, por exemplo) vê sempre o mesmo. É a mesma questão já levantada nas ESP-22 e ESP-23: resolvê-la obriga a gerar um HTML por rota na compilação.
- Falta medir no PageSpeed Insights e guardar o resultado.

---

<a id="esp-33"></a>
## ESP-33 — Redes sociais à vista, e numa fonte única

**Estado:** Implementada · **Data:** 11 Nov 2026

### Pedido

Da direcção: *"Eu quero add também as redes sociais da MUKANDA."*

### Decisão

As quatro redes já estavam no site — mas mal. Estavam só no rodapé, escritas em texto simples no meio de uma coluna de links, indistinguíveis dos "Links úteis" ao lado. Quem procura o Instagram procura o símbolo do Instagram, não a palavra.

Confirmado com a direcção que as redes oficiais continuam a ser quatro, com os mesmos endereços de Agosto de 2026: Instagram, Facebook, TikTok e LinkedIn.

### O que muda

- **No rodapé**, os quatro links passam a ícones, numa fila de botões redondos, com o nome `@mukandaprepa` por baixo. Ocupam menos espaço do que as quatro linhas de texto que lá estavam.
- **Na página de Contactos**, novo bloco "Segue-nos" com ícone, nome da rede e conta, ao lado do WhatsApp e dos e-mails. Até aqui, quem chegava à página de contactos não encontrava uma única rede.
- **Os endereços passam a viver num sítio só**, em `src/config/contactos.js`. Estavam escritos à mão dentro do `Footer.jsx` e repetidos noutro formato no `noticias.js` — mudar um endereço obrigava a caçar ocorrências, e nada impedia que divergissem.

### Notas técnicas

- Os ícones são SVG desenhados no próprio projecto (`src/components/IconesRedes.jsx`), não uma biblioteca de ícones descarregada: são quatro, não mudam, e uma biblioteca inteira obrigaria o visitante a descarregar muito mais do que o site precisa. Herdam a cor de quem os contém, por isso o mesmo ícone serve no rodapé e na página de contactos.
- Um componente só, `Redes.jsx`, com duas variantes — `icones` e `lista` — para as duas listas não poderem divergir uma da outra.
- O nome de cada rede vai escrito no link em texto a sério. Na fila de ícones fica escondido à vista mas presente para quem usa leitor de ecrã: um botão redondo sem nome não se percebe. Para isso entrou a classe `.apenas-leitor-ecra` no `index.css`, que serve para o resto do site daqui para a frente.
- **O texto das notícias não mudou.** O bloco de canais no fim de cada notícia passou a ir buscar os endereços à mesma fonte, mas continua a listar o que sempre listou — Facebook, Instagram e os contactos de WhatsApp — e não as quatro redes. As notícias são registo histórico e o texto publicado não se reescreve. Confirmado no navegador que o texto sai carácter a carácter igual ao de antes.
- Verificado a 1280 px e a 375 px, no rodapé e na página de contactos, sem transbordo horizontal.

### Questões em aberto

- Não há canal de YouTube. Se vier a haver, acrescenta-se uma entrada em `REDES` e um ícone — o resto do site acompanha sozinho.

---

<a id="esp-34"></a>
## ESP-34 — O menu de telemóvel e duas incoerências do rodapé

**Estado:** Implementada · **Data:** 11 Nov 2026

### Pedido

Da direcção, depois de ver as redes publicadas: *"Sim, trata do erro do Navbar. Verifica esses erros."*

### Decisão

Três coisas, duas delas visíveis a olho nu quando se punham o rodapé e a página de contactos lado a lado.

### O que muda

**1. O menu de telemóvel fechava tarde demais.** Fechá-lo ao mudar de página estava escrito num `useEffect`, e o eslint recusava-o — com razão. Um efeito corre *depois* de o ecrã ser pintado, por isso havia um instante em que a página nova já estava desenhada com o menu ainda aberto por cima. Passou a ser decidido durante o render, comparando o caminho actual com o anterior: é o padrão que a documentação do React chama "ajustar estado quando uma prop muda", e o React reinicia o render sem chegar a pintar o intermédio. O `npm run lint` passou a correr limpo.

**2. "Siga-nos" era o único tratamento formal do site inteiro.** As notícias dizem "Segue-nos e partilha com os teus colegas", a página de contactos diz "Fala connosco", a home pergunta "Queres acompanhar tudo em primeira mão?". Só o rodapé tratava o estudante por você. Passou a "Segue-nos".

**3. A nota `@mukandaprepa` por baixo dos quatro ícones não era verdade.** Só o Instagram e o TikTok usam esse nome: o Facebook é um perfil com identificador numérico e o LinkedIn é `/company/mukanda-prepa/`. A nota saiu; quem quiser o nome de cada conta tem-no escrito na página de Contactos, rede a rede.

### Notas técnicas

As quatro ligações foram abertas uma a uma num navegador a sério, e não só com um pedido simples — estas redes respondem de maneira diferente a quem não parece um visitante:

| Rede | O que respondeu |
|---|---|
| LinkedIn | Página **MUKANDA PREPA**, acessível |
| Facebook | Reencaminha para `/people/Mukanda-Prepa/61591268696768/`, acessível |
| TikTok | Conta `mukandaprepa` existe |
| Instagram | Exigiu início de sessão; não foi possível confirmar de fora |

### Questões em aberto

Duas coisas que se viram ao confirmar as ligações e que são decisão da direcção, não do site:

- **O TikTok está vazio:** 1 seguidor, nenhum vídeo, sem biografia. Uma ligação para uma conta vazia convida o visitante a sair do site para não encontrar nada. Ou se alimenta, ou se tira do rodapé até haver conteúdo.
- **O Facebook é um perfil pessoal, não uma página.** Tem 56 seguidores. Um perfil pessoal não dá estatísticas, não se gere a várias mãos e não pode ser promovido. Converter num perfil de empresa é uma operação que o próprio Facebook oferece.
- O Instagram não foi possível confirmar sem sessão iniciada. Vale a pena a equipa de marketing abrir a ligação do rodapé no telemóvel e confirmar que chega à conta certa.
