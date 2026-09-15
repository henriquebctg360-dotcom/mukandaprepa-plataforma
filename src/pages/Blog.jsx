import { Link } from 'react-router-dom';
import './Blog.css';

// Na versão em produção (16 Ago 2026) o Blog ficou só com as duas categorias
// que têm conteúdo real; Notícias e Artigos saíram do site.
const CATEGORIAS = [
  {
    titulo: 'Aulas Online',
    desc: 'Aulas ao vivo e gravadas com professores especializados, por matéria.',
    href: '/aulas-online',
  },
  {
    titulo: 'Maratonas MUKANDA',
    desc: 'Sessões intensivas de exercícios cronometrados para chegares preparado ao exame.',
    href: '/maratonas',
  },
];

export default function Blog() {
  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <h1>Blog MUKANDA PREPA</h1>
          <p>Aulas e maratonas — tudo o que precisas para te preparares, num só sítio.</p>
        </div>
      </section>

      <section className="blog-categorias">
        <div className="container blog-categorias__grid">
          {CATEGORIAS.map((c) => (
            <Link to={c.href} className="categoria-card" key={c.titulo}>
              <h3>{c.titulo}</h3>
              <p>{c.desc}</p>
              <span className="categoria-card__cta">Ver mais →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
