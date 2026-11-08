import { Link } from 'react-router-dom';
import './Noticias.css';
import { publicados } from '../config/conteudos';

// As notícias vêm de src/config/noticias.js.

// Sem imagem, o cartão mostra uma faixa com a cor da notícia.
function ImagemCartao({ noticia }) {
  if (!noticia.imagem) {
    return <div className="noticia-card__imagem" style={{ background: noticia.cor }} aria-hidden="true" />;
  }
  return <img className="noticia-card__imagem" src={noticia.imagem} alt="" width="1200" height="630" loading="lazy" />;
}

export default function Noticias() {
  const noticias = publicados('noticia');

  return (
    <>
      <section className="noticias-hero">
        <div className="container">
          <h1>Notícias</h1>
          <p>As últimas novidades da MUKANDA PREPA.</p>
        </div>
      </section>

      <section className="noticias-lista">
        <div className="container noticias-lista__grid">
          {noticias.map((n) => (
            <Link to={`/noticias/${n.id}`} className="noticia-card" key={n.id}>
              <ImagemCartao noticia={n} />
              <div className="noticia-card__corpo">
                <time className="noticia-card__data">{n.data}</time>
                <h3>{n.titulo}</h3>
                <p>{n.resumo}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="noticias-lista noticias-lista--nota">
        <div className="container">
        </div>
      </section>
    </>
  );
}
