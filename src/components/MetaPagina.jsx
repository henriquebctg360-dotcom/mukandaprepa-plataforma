import { useLocation } from 'react-router-dom';
import { META_PAGINAS, META_NAO_ENCONTRADA } from '../config/seo';
import { useMeta } from './useMeta';

// ESP-22 — montado no layout: trata de todas as páginas de texto fixo.
export default function MetaPagina() {
  const { pathname } = useLocation();
  const conhecida = Object.prototype.hasOwnProperty.call(META_PAGINAS, pathname);
  const detalhe = pathname.startsWith('/noticias/') || pathname.startsWith('/artigos/');
  const meta = conhecida ? META_PAGINAS[pathname] : META_NAO_ENCONTRADA;

  // Nas páginas de notícia e de artigo quem manda é a própria página.
  useMeta({
    titulo: detalhe ? '' : meta.titulo,
    descricao: meta.descricao,
    caminho: pathname === '/' ? '' : pathname,
  });

  return null;
}
