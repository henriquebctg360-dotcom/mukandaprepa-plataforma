import { Link } from 'react-router-dom';
import './Especificacoes.css';
import { ESPECIFICACOES } from '../prototipo/especificacoes';

// Página só do protótipo: resume, para a equipa de desenvolvimento, cada
// especificação do novo site — o pedido, o que foi feito e o que falta decidir.

const ESTADOS = {
  implementada: 'Implementada no protótipo',
  'em-curso': 'Em curso',
  'por-fazer': 'Por fazer',
};

export default function Especificacoes() {
  return (
    <>
      <section className="esp-hero">
        <div className="container">
          <span className="esp-hero__selo">Protótipo · Nova versão do site</span>
          <h1>Especificações</h1>
          <p>
            As alterações pedidas para a nova versão do mukandaprepa.com, uma a
            uma. Cada uma pode ser vista a funcionar no protótipo.
          </p>
        </div>
      </section>

      <section className="esp-lista">
        <div className="container esp-lista__inner">
          {ESPECIFICACOES.map((e) => (
            <article className="esp-card" key={e.id} id={e.id}>
              <header className="esp-card__topo">
                <span className="esp-card__id">{e.id}</span>
                <span className={`esp-card__estado esp-card__estado--${e.estado}`}>{ESTADOS[e.estado]}</span>
                <time>{e.data}</time>
              </header>

              <h2>{e.titulo}</h2>

              <div className="esp-card__bloco">
                <h3>Pedido</h3>
                <p>{e.pedido}</p>
              </div>

              {e.decisao && (
                <div className="esp-card__bloco esp-card__decisao">
                  <h3>Decisão</h3>
                  <p>{e.decisao}</p>
                </div>
              )}

              {e.variantes && (
                <div className="esp-card__bloco">
                  <h3>Propostas em comparação</h3>
                  <div className="esp-card__variantes">
                    {e.variantes.map((v) => (
                      <Link key={v.id} to={`/?hero=${v.id}`} className="esp-variante">
                        <strong>{v.nome}</strong>
                        <span>{v.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="esp-card__bloco">
                <h3>O que mudou</h3>
                <ul>{e.alteracoes.map((a) => <li key={a}>{a}</li>)}</ul>
              </div>

              <div className="esp-card__colunas">
                {e.notasDev.length > 0 && (
                  <div className="esp-card__bloco">
                    <h3>Notas técnicas</h3>
                    <ul>{e.notasDev.map((n) => <li key={n}>{n}</li>)}</ul>
                  </div>
                )}
                {e.questoesEmAberto.length > 0 && (
                  <div className="esp-card__bloco esp-card__bloco--questoes">
                    <h3>Questões em aberto</h3>
                    <ul>{e.questoesEmAberto.map((q) => <li key={q}>{q}</li>)}</ul>
                  </div>
                )}
              </div>

              <footer className="esp-card__links">
                {e.paginas.map((p) => (
                  <Link key={p.href} to={p.href} className="btn btn-outline">
                    Ver: {p.label}
                  </Link>
                ))}
              </footer>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
