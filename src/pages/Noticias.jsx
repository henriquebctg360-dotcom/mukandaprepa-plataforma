import { Link } from 'react-router-dom';
import './Noticias.css';
import { usePublicados } from '../prototipo/useConteudos';
import { NotaDev } from '../prototipo/NotasDev';
import { useNotas } from '../prototipo/notasContexto';

// ESP-05: as notícias vêm de src/config/noticias.js.
// ESP-13: textos reais da equipa de Marketing. As imagens estão a ser criadas
// pelo Leonel Macaia; enquanto não chegam, o cartão mostra a cor da notícia.

function ImagemCartao({ noticia }) {
  const { ativas } = useNotas();
  if (noticia.imagem) {
    return <img className="noticia-card__imagem" src={noticia.imagem} alt="" width="1200" height="630" loading="lazy" />;
  }
  return (
    <div className="noticia-card__imagem" style={{ background: noticia.cor }}>
      {ativas && <span className="noticia-card__porcriar">Imagem por criar</span>}
    </div>
  );
}

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
          <NotaDev esp="ESP-18" titulo="Imagens provisórias">
            <ul>
              <li>As seis imagens são <strong>provisórias</strong>, desenhadas em SVG com as cores da marca, enquanto o <strong>Leonel Macaia</strong> não entrega as definitivas.</li>
              <li>Quando as dele chegarem: guardar em <code>public/noticia-nome.webp</code> (1200×630, até 200 kB), trocar o caminho em <code>src/config/noticias.js</code> e apagar o <code>.svg</code>.</li>
              <li>Os textos são os reais, escritos pela equipa de Marketing. Cada cartão abre a notícia completa em <code>/noticias/:id</code>.</li>
            </ul>
          </NotaDev>
        </div>
      </section>
    </>
  );
}
