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
2. ~~Levar o `public/.htaccess`~~ — vai sozinho dentro de `dist/`, e a publicação pára com erro se faltar.
3. **Guardar uma cópia** do que está no cPanel antes de substituir.
4. ~~Ligar a compressão e a cache no cPanel~~ — já vai no `public/.htaccess`: compressão, cache de um ano para ficheiros com nome versionado e nenhuma cache para o `index.html`.
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

O site vive no **cPanel da Fluxo**, no domínio principal, servido de `/home/mukandaprep/public_html`.

**Não se enviam zips.** Sempre que alguma coisa entra no ramo `main`, o GitHub compila o site e envia a pasta `dist/` por FTPS para o cPanel. O painel não tem Terminal, por isso não há maneira de correr `npm run build` no servidor — quem compila é o GitHub. O ficheiro que trata disto é [`.github/workflows/publicar.yml`](.github/workflows/publicar.yml).

### Configurar, uma vez

**1. No cPanel** — *Contas FTP* → criar uma conta só para isto:

| Campo | Valor |
|---|---|
| Utilizador | `deploy` (fica `deploy@mukandaprepa.com`) |
| Directório | `/home/mukandaprep/public_html` |
| Quota | Ilimitada |

**2. No GitHub** — *Settings → Secrets and variables → Actions*:

| Onde | Nome | Valor |
|---|---|---|
| Secret | `FTP_SERVIDOR` | `ftp.mukandaprepa.com` |
| Secret | `FTP_UTILIZADOR` | `deploy@mukandaprepa.com` |
| Secret | `FTP_PALAVRA_PASSE` | a palavra-passe da conta FTP |
| Variable | `FTP_PASTA` | `./` se a conta já aponta para `public_html`; `public_html/` se aponta para a raiz da conta |

A palavra-passe escreve-se no GitHub e mais lado nenhum. Não entra no código, nem em mensagens, nem em documentos.

### Publicar

Entrar com alterações no `main`. É tudo. Para acompanhar ou repetir: separador **Actions** do repositório — o botão *Run workflow* publica outra vez sem ser preciso mudar código.

### Dois cuidados

- **Nunca apagar o conteúdo de `public_html` de uma vez.** O cPanel criou lá dentro as pastas `api.mukandaprepa.com` e `app.mukandaprepa.com`. O envio está configurado para nunca limpar a pasta (`dangerous-clean-slate: false`): acrescenta e substitui, não apaga o que não conhece.
- **O `.htaccess` tem de ir.** É ele que faz as rotas do React funcionarem, liga a compressão e define a cache. O workflow pára com erro se ele não estiver em `dist/`.

### Se o FTPS estiver bloqueado

Alternativa sem alterar nada do resto: *Git Version Control* do cPanel, com um ramo que contenha o `dist/` já compilado e um `.cpanel.yml` a copiá-lo para `public_html`. Dá mais passos e obriga a carregar num botão a cada publicação.
