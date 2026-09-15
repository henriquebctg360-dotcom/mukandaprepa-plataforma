import { Link } from 'react-router-dom';
import './Noticias.css';
import { usePublicados } from '../prototipo/useConteudos';

// ESP-05: as notícias passam a vir do painel de publicação (no protótipo,
// config/noticias.js + o que for publicado no painel).

export default function Noticias() {
  const noticias = usePublicados('noticia');

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
              <div className="noticia-card__imagem" style={{ background: n.cor }} aria-hidden="true" />
              <div className="noticia-card__corpo">
                <time className="noticia-card__data">{n.data}</time>
                <h3>{n.titulo}</h3>
                <p>{n.resumo}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
