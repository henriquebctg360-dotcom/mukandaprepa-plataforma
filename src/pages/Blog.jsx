import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { usePublicados } from '../prototipo/useConteudos';
import { MarcadorEsp } from '../prototipo/NotasDev';

// ESP-07 — o Blog passa a reunir as notícias e os artigos (publicados no painel,
// ESP-05). Filtro por tipo; a notícia mais recente fica em destaque.
// As páginas Maratonas e Aulas Online ficam no fim, como balanço da edição 2026.

const FILTROS = [
  { id: 'tudo', nome: 'Tudo' },
  { id: 'noticia', nome: 'Notícias' },
  { id: 'artigo', nome: 'Artigos' },
];

const EDICAO_2026 = [
  {
    titulo: 'Maratonas MUKANDA 2026',
    desc: 'Como funcionaram as maratonas da fase gratuita, o calendário e o que saiu em cada fase.',
    href: '/maratonas',
  },
  {
    titulo: 'Aulas Online MUKANDA 2026',
    desc: 'As aulas de correcção ao vivo que acompanharam cada maratona.',
    href: '/aulas-online',
  },
];

function CartaoNoticia({ n, destaque = false }) {
  return (
    <Link to={`/noticias/${n.id}`} className={`blog-noticia${destaque ? ' blog-noticia--destaque' : ''}`}>
      <div className="blog-noticia__cor" style={{ background: n.cor }} aria-hidden="true" />
      <div className="blog-noticia__corpo">
        <span className="blog-tipo">Notícia</span>
        <h3>{n.titulo}</h3>
        <p>{n.resumo}</p>
        <time>{n.data}</time>
      </div>
    </Link>
  );
}

function CartaoArtigo({ a }) {
  return (
    <Link to={`/artigos/${a.id}`} className="blog-artigo">
      <div className="blog-artigo__tags">
        <span className="blog-tipo blog-tipo--azul">Artigo</span>
        <span className="blog-pill">{a.materia}</span>
        <span className="blog-pill">{a.nivel}</span>
      </div>
      <h3>{a.titulo}</h3>
      <time>{a.data}</time>
    </Link>
  );
}

export default function Blog() {
  const [filtro, setFiltro] = useState('tudo');
  const noticias = usePublicados('noticia');
  const artigos = usePublicados('artigo');
  const [destaque, ...outrasNoticias] = noticias;

  const mostrarNoticias = filtro !== 'artigo';
  const mostrarArtigos = filtro !== 'noticia';

  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>
            Blog MUKANDA PREPA
            <MarcadorEsp
              esp="ESP-07"
              balao="direita"
              texto="O Blog passa a mostrar as notícias e os artigos publicados no painel (ESP-05), com filtro por tipo. Antes tinha só dois cartões (Aulas e Maratonas)."
            />
          </h1>
          <p>Notícias da MUKANDA PREPA e artigos para te preparares para o exame de acesso.</p>

          <div className="blog-filtros" role="group" aria-label="Filtrar publicações">
            {FILTROS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={filtro === f.id ? 'is-activo' : ''}
                aria-pressed={filtro === f.id}
                onClick={() => setFiltro(f.id)}
              >
                {f.nome}
                <span>{f.id === 'tudo' ? noticias.length + artigos.length : f.id === 'noticia' ? noticias.length : artigos.length}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {mostrarNoticias && destaque && (
        <section className="blog-seccao">
          <div className="container">
            <div className="blog-seccao__topo">
              <h2>Notícias</h2>
              <Link to="/noticias">Ver todas as notícias →</Link>
            </div>
            <div className="blog-noticias">
              <CartaoNoticia n={destaque} destaque />
              <div className="blog-noticias__lista">
                {outrasNoticias.slice(0, filtro === 'noticia' ? outrasNoticias.length : 3).map((n) => (
                  <CartaoNoticia key={n.id} n={n} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {mostrarArtigos && artigos.length > 0 && (
        <section className="blog-seccao blog-seccao--cinza">
          <div className="container">
            <div className="blog-seccao__topo">
              <h2>Artigos</h2>
              <Link to="/artigos">Ver todos e filtrar por matéria →</Link>
            </div>
            <div className="blog-artigos">
              {artigos.slice(0, filtro === 'artigo' ? artigos.length : 6).map((a) => (
                <CartaoArtigo key={a.id} a={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="blog-categorias">
        <div className="container">
          <h2 className="blog-categorias__titulo">A edição 2026</h2>
          <div className="blog-categorias__grid blog-categorias__grid--2">
            {EDICAO_2026.map((c) => (
              <Link to={c.href} className="categoria-card" key={c.titulo}>
                <h3>{c.titulo}</h3>
                <p>{c.desc}</p>
                <span className="categoria-card__cta">Ver balanço →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
