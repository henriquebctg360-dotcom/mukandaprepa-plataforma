import { Link, useParams } from 'react-router-dom';
import './ConteudoDetalhe.css';
import { useConteudos } from '../prototipo/useConteudos';
import { TIPOS } from '../prototipo/painelPerfis';
import { MarcadorEsp } from '../prototipo/NotasDev';
import PaginaNaoEncontrada from './PaginaNaoEncontrada';

// ESP-05 — página de uma notícia ou de um artigo (/noticias/:id, /artigos/:id).
// O texto completo é escrito no painel; parágrafos separados por linha em branco.
export default function ConteudoDetalhe({ tipo }) {
  const { id } = useParams();
  const item = useConteudos().find((c) => c.id === id && c.tipo === tipo && c.estado === 'publicado');
  if (!item) return <PaginaNaoEncontrada />;

  const info = TIPOS[tipo];
  const paragrafos = (item.corpo || '').split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <article className="detalhe">
      <header className="detalhe__topo" style={tipo === 'noticia' ? { '--detalhe-cor': item.cor } : undefined}>
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

      <div className="container detalhe__estreito detalhe__corpo">
        {paragrafos.length > 0 && paragrafos.join('') !== item.resumo ? (
          paragrafos.map((p, i) => <p key={i}>{p}</p>)
        ) : (
          <p className="detalhe__vazio">
            O texto completo deste {info.nome.toLowerCase()} ainda não foi escrito. No painel de
            publicação, a equipa acrescenta-o no campo “Texto completo”.
          </p>
        )}
      </div>
    </article>
  );
}
