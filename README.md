# MUKANDA PREPA — Site institucional

Código do site **mukandaprepa.com** (React 19 + Vite + React Router).

O ramo **`main`** é a versão em produção e o ponto de partida da nova versão do site. O ramo **`prototipo`** mostra o que vai mudar.

| Ramo | Conteúdo |
|---|---|
| `main` | Versão em produção (publicada a 16 Ago 2026) |
| `prototipo` | Protótipo da nova versão, com as 10 especificações aplicadas |

- **Protótipo navegável:** https://mukandaprepa-prototipo.vercel.app
- **Especificações:** [`docs/ESPECIFICACOES.md`](docs/ESPECIFICACOES.md), também em https://mukandaprepa-prototipo.vercel.app/especificacoes

Para ver exactamente o que muda, compara os dois ramos no GitHub: *Compare → base: `main` ← `prototipo`*.

## Correr localmente

Requisitos: Node.js 20 ou superior.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # gera dist/
```

## Sobre esta versão do código

O repositório anterior tinha ficado na versão de 9 Ago 2026, e a versão publicada a 16 Ago não existia em nenhum repositório. Foi reconstruída a partir do build que está online.

- **Verificação:** `npm run build` gera `assets/index-B4jP6_SJ.js` e `assets/index-CtJvMqQT.css`, iguais byte a byte aos ficheiros em produção.
- **Perdeu-se:** os comentários que existiam no código-fonte original dessa versão.
- **Atenção:** o `site-dist.zip` guardado pela direcção é de 15 Ago, anterior à produção. A referência é este código.

Há ficheiros que a produção não usa e que ficaram por decisão da direcção, porque podem ser reaproveitados:

- **Páginas sem rota:** `Noticias`, `Artigos`, `Equipa`, `IdentidadeVisual` e `src/config/noticias.js`.
- **Imagens antigas:** `public/hero-estudante.webp` e `public/sobre-estudante.webp`.

## Configuração

`.env.production` define `VITE_APP_URL` (app) e `VITE_API_BASE` (API, usada só no formulário de contacto). As variáveis `VITE_*` **não são segredos**: vão sempre parar ao JavaScript que o navegador descarrega. **Nunca** colocar chaves, senhas ou tokens neste projecto.

## Publicação

O site em produção está no **cPanel**. A pasta pública recebe o conteúdo de `dist/`, com o `public/.htaccess` (necessário para as rotas do React). O protótipo está no Vercel, no projecto `mukandaprepa-prototipo`.
