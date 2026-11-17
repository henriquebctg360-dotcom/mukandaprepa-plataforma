import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { CONTACTO, REDES } from './src/config/contactos'
import { SITE_NOME, SITE_URL, META_PADRAO } from './src/config/seo'

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
// Isto não é cosmético: as páginas do site escrevem o título com JavaScript,
// mas o index.html é o que vale para quem não o executa. É dele que sai o
// título da página inicial no Google, se o Google não chegar a correr o
// JavaScript.
//
// As etiquetas og: e twitter: NÃO vêm daqui de propósito: o texto de
// partilha foi escrito à parte (ESP-23) e validado assim pela direcção.
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), plugInDadosEstruturados()],
})
