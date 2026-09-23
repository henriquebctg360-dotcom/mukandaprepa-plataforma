import './Noticias.css';
import { NOTICIAS } from '../config/noticias';

export default function Noticias() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="noticias-hero">
        <div className="container noticias-hero__inner">

          <h1>Notícias</h1>

          <p>
            As últimas novidades da MUKANDA PREPA.
          </p>

        </div>
      </section>


      {/* =====================================================
          LISTA DE NOTÍCIAS
      ===================================================== */}

      <section className="noticias-lista">

        <div className="container noticias-lista__grid">

          {NOTICIAS.map((n) => (

            <article
              className="noticia-card"
              key={n.titulo}
            >

              <div
                className="noticia-card__imagem"
                style={{ background: n.cor }}
                aria-hidden="true"
              />

              <div className="noticia-card__corpo">

                <time className="noticia-card__data">
                  {n.data}
                </time>

                <h3>
                  {n.titulo}
                </h3>

                <p>
                  {n.resumo}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>
    </>
  );
}