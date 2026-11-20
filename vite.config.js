import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { CONTACTO, REDES } from './src/config/contactos'
import { SITE_NOME, SITE_URL, META_PADRAO, META_PAGINAS } from './src/config/seo'
import { publicados } from './src/config/conteudos'

// ── Dados estruturados: quem somos e onde estamos (ESP-42) ─────────────────
//
// O site dizia "Luanda, Angola" no rodapé e na página de contactos, em texto
// corrido. Para uma pessoa chega; para o Google é só mais uma linha de texto.
// Os dados estruturados dizem-lho na forma que ele lê sem ter de adivinhar:
// que isto é uma organização de ensino, que fica em Luanda, em Angola, e que
// estas quatro contas de redes sociais são nossas.
//
// É isto que alimenta o painel que o Google mostra à direita dos resultados
// quando alguém procura a marca pelo nome.
//
// ── Porque é gerado aqui e não escrito à mão no index.html ─────────────────
//
// Porque os contactos e as redes já vivem em src/config/contactos.js, e um
// endereço escrito em dois sítios acaba sempre por divergir num deles. Isto
// é lido do mesmo ficheiro que o rodapé lê, na compilação, e entra no HTML
// antes de o navegador o receber — por isso vale até para quem não executa
// JavaScript.
function dadosEstruturados() {
  const dados = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE_NOME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    image: `${SITE_URL}/og-mukandaprepa-v2.png`,
    description: META_PADRAO.descricao,
    email: CONTACTO.email,
    telephone: CONTACTO.telefoneLegivel.replace(/\s/g, ''),
    // Sem rua nem número de propósito: não temos morada de porta aberta ao
    // público, e inventar uma seria pior do que não a dar.
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Luanda',
      addressCountry: 'AO',
    },
    areaServed: { '@type': 'Country', name: 'Angola' },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'apoio ao estudante',
      telephone: CONTACTO.telefoneLegivel.replace(/\s/g, ''),
      email: CONTACTO.emailSuporte,
      availableLanguage: 'Portuguese',
    },
    sameAs: REDES.map((r) => r.url),
  }
  return `<script type="application/ld+json">${JSON.stringify(dados)}</script>`
}

// O título e a descrição do index.html passam a vir do seo.js (ESP-42).
//
// Estavam escritos à mão e eram os da página inicial — os mesmos que o
// seo.js define. Dois sítios com o mesmo texto acabam sempre por divergir:
// mudou-se o do seo.js e o do index.html ficou para trás.
//
// As etiquetas og: e twitter: do index.html NÃO vêm daqui de propósito: o
// texto de partilha da página inicial foi escrito à parte (ESP-23) e
// validado assim pela direcção.
function trocarTituloEDescricao(html) {
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${META_PADRAO.titulo}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${META_PADRAO.descricao}$2`,
    )
}

function plugInDadosEstruturados() {
  return {
    name: 'mukandaprepa-dados-estruturados',
    transformIndexHtml(html) {
      return trocarTituloEDescricao(html).replace(
        '</head>',
        `  ${dadosEstruturados()}\n  </head>`,
      )
    },
  }
}

// ── Um HTML por página (ESP-46) ────────────────────────────────────────────
//
// Até aqui o servidor devolvia o MESMO index.html para as doze páginas, e o
// título, a descrição e a canónica certos só apareciam depois de o JavaScript
// correr. Para quem lê no navegador isso é invisível. Para quem não executa
// JavaScript, não:
//
//   - o Google recebia doze páginas com o mesmo <head>. A canónica fixa
//     apontava todas para a inicial, e ele deitou-as fora: a 20 de Novembro
//     de 2026 só 5 das 17 estavam indexadas (ESP-45);
//   - o WhatsApp e o Facebook NUNCA executam JavaScript. Partilhar uma
//     notícia mostrava sempre o cartão da página inicial (ESP-22, ESP-23).
//
// Este passo gera, depois da compilação, uma cópia do index.html por cada
// página, com o <head> trocado. O corpo e os ficheiros de JavaScript são os
// mesmos — a aplicação arranca na mesma e navega na mesma a partir dali.
//
// O .htaccess serve estes ficheiros: um pedido de /equipa passa a entregar
// equipa.html se ele existir. Sem barra no fim, para os endereços não
// mudarem.
const escapar = (t) => String(t)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

function cabecaDaPagina(html, { titulo, descricao, caminho }) {
  const url = SITE_URL + caminho
  const t = escapar(titulo)
  const d = escapar(descricao)
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${escapar(url)}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace('</head>', `  <link rel="canonical" href="${escapar(url)}" />\n  </head>`)
}

function plugInPaginasEstaticas() {
  return {
    name: 'mukandaprepa-paginas-estaticas',
    apply: 'build',
    closeBundle() {
      const destino = path.resolve('dist')
      const indexHtml = path.join(destino, 'index.html')
      if (!fs.existsSync(indexHtml)) return

      const base = fs.readFileSync(indexHtml, 'utf8')

      // A página inicial fica com a canónica dela. Aqui é seguro: este
      // ficheiro deixou de ser a resposta para toda a gente.
      fs.writeFileSync(
        indexHtml,
        base.replace('</head>', `  <link rel="canonical" href="${SITE_URL}/" />\n  </head>`),
        'utf8',
      )

      const paginas = []

      // As páginas de texto fixo, do seo.js. A inicial já está feita.
      for (const [caminho, meta] of Object.entries(META_PAGINAS)) {
        if (caminho === '/') continue
        paginas.push({ ficheiro: `${caminho.slice(1)}.html`, ...meta, caminho })
      }

      // As notícias. O título e o resumo são os do próprio conteúdo, como o
      // ConteudoDetalhe.jsx faz quando o JavaScript corre.
      for (const n of publicados('noticia')) {
        paginas.push({
          ficheiro: `noticias/${n.id}.html`,
          titulo: `${n.titulo} · ${SITE_NOME}`,
          descricao: n.resumo,
          caminho: `/noticias/${n.id}`,
        })
      }

      for (const p of paginas) {
        const alvo = path.join(destino, p.ficheiro)
        fs.mkdirSync(path.dirname(alvo), { recursive: true })
        fs.writeFileSync(alvo, cabecaDaPagina(base, p), 'utf8')
      }

      console.log(`\n  ${paginas.length + 1} páginas com <head> próprio (ESP-46)`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), plugInDadosEstruturados(), plugInPaginasEstaticas()],
})
