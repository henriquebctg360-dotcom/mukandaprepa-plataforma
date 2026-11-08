# MUKANDA PREPA — Site institucional

Código do site **mukandaprepa.com** (React 19 + Vite + React Router).

O ramo **`main`** é a nova versão do site, pronta para publicar. É aqui que se trabalha.

| Ramo | Conteúdo |
|---|---|
| `main` | A nova versão do site, com as 26 especificações aplicadas |
| `prototipo` | O mesmo conteúdo; é o ramo onde o protótipo foi construído |
| `fernanda/versao-setembro-2026` | A versão que a Fernanda Vilinga construiu em Setembro. Guardada, não se apaga |
| etiqueta `producao-2026-08-16` | A versão que esteve no cPanel, para poder voltar atrás |

- **Site navegável:** https://mukandaprepa-prototipo.vercel.app
- **O que mudou e porquê:** [`docs/ESPECIFICACOES.md`](docs/ESPECIFICACOES.md) — as 26 especificações, com o pedido, a decisão, o que mudou e o que ficou em aberto.

## Correr localmente

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # gera dist/
npm run lint
```

## Antes de publicar — ler isto

1. **O `vercel.json` manda não indexar.** O cabeçalho `X-Robots-Tag: noindex, nofollow` existe para o endereço de pré-visualização no Vercel não aparecer no Google. **O cPanel não lê este ficheiro**, por isso não há nada a fazer — mas se algum dia o site for publicado no Vercel, esse cabeçalho tem de sair primeiro, senão o Google nunca indexa nada.
2. **Levar o `public/.htaccess`.** Sem ele as rotas do React dão erro 404 no cPanel.
3. **Guardar uma cópia** do que está no cPanel antes de substituir.
4. **Ligar a compressão (gzip) e a validade da cache** no cPanel. São configurações do servidor, não do código.
5. **Inscrever no Google Search Console** e submeter `https://www.mukandaprepa.com/sitemap.xml`.
6. **Testar a partilha**: enviar o link para um grupo de WhatsApp e confirmar que aparece com imagem e título. O WhatsApp guarda em cache, por isso convém testar com o link limpo.
7. **Medir com o PageSpeed Insights** antes e depois, e guardar os dois resultados.

## Onde vivem os conteúdos

Nada está escrito dentro das páginas. Para publicar ou corrigir, editam-se estes ficheiros e faz-se um build novo:

| Ficheiro | O quê |
|---|---|
| `src/config/noticias.js` | Notícias, com o texto completo |
| `src/config/artigos.js` | Artigos dos professores (`ARTIGOS_VISIVEIS` liga e desliga a secção) |
| `src/config/equipa.jsx` | Equipa, cargos e fotografias |
| `src/config/depoimentos.js` | Depoimentos dos estudantes |
| `src/config/estatisticas.js` | Números da edição 2026 |
| `src/config/recursos.js` | Recursos gratuitos |
| `src/config/contactos.js` | Telefone, e-mails e link da Comunidade |
| `src/config/seo.js` | Título e descrição de cada página |

O texto longo das notícias e dos artigos usa marcas simples, tratadas por `src/components/TextoRico.jsx`: `## ` subtítulo, `- ` lista, `1. ` passos numerados, `> ` destaque. Endereços e e-mails viram ligações sozinhos.

**O `sitemap.xml` é escrito à mão.** Quando houver páginas ou notícias novas, é preciso acrescentá-las a `public/sitemap.xml`.

## Configuração

`.env.production` define `VITE_APP_URL`. As variáveis `VITE_*` **não são segredos**: vão sempre parar ao JavaScript que o navegador descarrega. **Nunca** colocar chaves, senhas ou tokens neste projecto.

O site não tem backend: não há contas, autenticação nem formulários que enviem dados. O contacto faz-se por WhatsApp e por e-mail.

## Publicação

O site em produção está no **cPanel**. A pasta pública recebe o conteúdo de `dist/`, com o `public/.htaccess` (necessário para as rotas do React).
