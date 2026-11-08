import { Link, useParams } from 'react-router-dom';
import './ConteudoDetalhe.css';
import { useConteudos } from '../prototipo/useConteudos';
import { TIPOS } from '../prototipo/painelPerfis';
import { MarcadorEsp } from '../prototipo/NotasDev';
import PaginaNaoEncontrada from './PaginaNaoEncontrada';
import TextoRico from '../components/TextoRico';

// ESP-05 — página de uma notícia ou de um artigo (/noticias/:id, /artigos/:id).
// ESP-13: o texto completo das notícias vem de src/config/noticias.js. A
// formatação (subtítulos, listas, citações) é feita pelo TextoRico.
export default function ConteudoDetalhe({ tipo }) {
  const { id } = useParams();
  const item = useConteudos().find((c) => c.id === id && c.tipo === tipo && c.estado === 'publicado');
  if (!item) return <PaginaNaoEncontrada />;

  const info = TIPOS[tipo];
  const temTexto = Boolean(item.corpo) && item.corpo.trim() !== (item.resumo || '').trim();

  return (
    <article className="detalhe" style={tipo === 'noticia' && item.cor ? { '--detalhe-cor': item.cor } : undefined}>
      <header className="detalhe__topo">
        <div className="container detalhe__estreito">
          <Link to={info.rota} className="detalhe__voltar">← {info.plural}</Link>
          <div className="detalhe__meta">
            {tipo === 'artigo' && (
              <>
                <span className="detalhe__pill detalhe__pill--azul">{item.materia}</span>
                <span className="detalhe__pill">{item.nivel}</span>
              </>
            )}
            <time>{item.data}</time>
            <MarcadorEsp
              esp="ESP-05"
              balao="direita"
              texto="Página nova: abre cada notícia/artigo. Título, resumo, texto, autor e data vêm do painel de publicação."
            />
          </div>
          <h1>{item.titulo}</h1>
          <p className="detalhe__resumo">{item.resumo}</p>
          <p className="detalhe__autor">Por {item.autor?.nome}</p>
        </div>
      </header>

      {item.imagem && (
        <div className="container detalhe__estreito">
          <img className="detalhe__imagem" src={item.imagem} alt="" width="1200" height="630" />
        </div>
      )}

      <div className="container detalhe__estreito detalhe__corpo">
        {temTexto ? (
          <TextoRico texto={item.corpo} />
        ) : (
          <p className="detalhe__vazio">
            O texto completo deste {info.nome.toLowerCase()} ainda não foi escrito. É acrescentado
            no campo “Texto completo” da folha de recolha e passa para src/config.
          </p>
        )}
      </div>
    </article>
  );
}
