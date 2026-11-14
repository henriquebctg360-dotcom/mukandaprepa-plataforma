// ESP-22 — escreve o título, a descrição e as etiquetas de partilha da página.
//
// Numa aplicação de página única o <head> do index.html é um só para o site
// inteiro: sem isto, as doze páginas apareciam no Google com o mesmo título
// e a mesma descrição.
//
// O Google executa JavaScript e lê o que fica aqui escrito. O WhatsApp e o
// Facebook NÃO executam: para eles vale sempre o que está no index.html.
import { useEffect } from 'react';
import { META_PADRAO, SITE_URL, EVENTO_META } from '../config/seo';

function escrever(seletor, atributo, valor) {
  let etiqueta = document.head.querySelector(seletor);
  if (!etiqueta) {
    etiqueta = document.createElement('meta');
    const [chave, nome] = seletor.includes('property')
      ? ['property', seletor.match(/"([^"]+)"/)[1]]
      : ['name', seletor.match(/"([^"]+)"/)[1]];
    etiqueta.setAttribute(chave, nome);
    document.head.appendChild(etiqueta);
  }
  etiqueta.setAttribute(atributo, valor);
}

function ligacaoCanonica(url) {
  let etiqueta = document.head.querySelector('link[rel="canonical"]');
  if (!etiqueta) {
    etiqueta = document.createElement('link');
    etiqueta.setAttribute('rel', 'canonical');
    document.head.appendChild(etiqueta);
  }
  etiqueta.setAttribute('href', url);
}

// Usa-se directamente nas páginas cujo título vem do conteúdo (notícia, artigo).
export function useMeta({ titulo, descricao, caminho }) {
  useEffect(() => {
    if (!titulo) return undefined;
    document.title = titulo;
    escrever('meta[name="description"]', 'content', descricao || META_PADRAO.descricao);
    escrever('meta[property="og:title"]', 'content', titulo);
    escrever('meta[property="og:description"]', 'content', descricao || META_PADRAO.descricao);
    escrever('meta[property="og:url"]', 'content', SITE_URL + (caminho || ''));
    escrever('meta[name="twitter:title"]', 'content', titulo);
    escrever('meta[name="twitter:description"]', 'content', descricao || META_PADRAO.descricao);
    escrever('meta[property="og:image"]', 'content', `${SITE_URL}/og-mukandaprepa.png`);
    ligacaoCanonica(SITE_URL + (caminho || ''));
    // Escrito. Quem estiver à espera do título certo pode avançar.
    window.dispatchEvent(new Event(EVENTO_META));
    return undefined;
  }, [titulo, descricao, caminho]);
}

