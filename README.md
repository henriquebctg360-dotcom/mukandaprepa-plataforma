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

O alojamento não oferece contas de FTP, mas oferece **SSH com chave** — e é melhor assim: a chave é mais segura do que uma palavra-passe e não viaja em cada ligação.

**1. No cPanel** — *SSH Access* → *Manage SSH Keys*:

1. **Generate a New Key.** Nome à escolha (por exemplo `github`), **sem passphrase** — o GitHub tem de a usar sozinho, sem ninguém para a escrever.
2. Na lista das chaves públicas, carregar em **Manage** → **Authorize**. Sem este passo a chave não serve para nada.
3. Na lista das chaves privadas, **View/Download** e copiar o conteúdo todo, desde o `-----BEGIN` até ao `-----END`.

**2. No GitHub** — *Settings → Secrets and variables → Actions*:

| Tipo | Nome | Valor |
|---|---|---|
| **Secret** | `SSH_CHAVE_PRIVADA` | a chave privada, inteira, com as linhas `BEGIN` e `END` |
| Variable | `SSH_SERVIDOR` | `mukandaprepa.com` (ou `102.219.126.171`) |
| Variable | `SSH_UTILIZADOR` | `mukandaprep` |
| Variable | `SSH_PORTA` | `22`, salvo se o alojamento indicar outra |
| Variable | `SSH_PASTA` | `public_html` |

Só a chave é *secret*; o resto são *variables*, que ficam à vista no painel e ajudam a perceber o que está configurado.

**A chave privada escreve-se no GitHub e mais lado nenhum.** Não entra no código, nem em mensagens, nem em documentos. Se algum dia for exposta, basta apagar a chave pública no cPanel e gerar outra.

### Publicar

Entrar com alterações no `main`. É tudo. Para acompanhar ou repetir: separador **Actions** do repositório — o botão *Run workflow* publica outra vez sem ser preciso mudar código.

No fim, a publicação confirma sozinha que `https://www.mukandaprepa.com/` responde.

### Dois cuidados

- **Nunca apagar o conteúdo de `public_html` de uma vez.** O cPanel criou lá dentro as pastas `api.mukandaprepa.com` e `app.mukandaprepa.com`. O envio é um espelho **sem apagar**: acrescenta e substitui, nunca remove o que não conhece.
- **O `.htaccess` tem de ir.** É ele que faz as rotas do React funcionarem, liga a compressão e define a cache. A publicação pára com erro se ele não estiver em `dist/`.

### Notas sobre este alojamento

- **Não há Terminal** no painel, por isso não se compila no servidor. Quem compila é o GitHub.
- **Não há contas de FTP** disponíveis — daí o SSH.
- **As cópias de segurança automáticas estão desligadas** pelo administrador do servidor. Antes de uma mudança grande, vale a pena descarregar uma cópia em *Backup → Download a Home Directory Backup*.
