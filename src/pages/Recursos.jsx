import './Recursos.css';
import { RECURSOS } from '../config/recursos';

// As pastas vivem em src/config/recursos.js, partilhadas com a página inicial (ESP-03).

export default function Recursos() {
  return (
    <>
      <section className="recursos-hero">
        <div className="container">
          <h1>Recursos</h1>
          <p>Material de estudo gratuito, reunido e organizado pela equipa pedagógica. Escolhe uma pasta e começa.</p>
        </div>
      </section>

      <section className="recursos-lista">
        <div className="container">
          <div className="recursos-grid">
            {RECURSOS.map((r) => (
              <div className="recurso-card" key={r.titulo}>
                <h3>{r.titulo}</h3>
                <p className="recurso-card__desc">{r.descricao}</p>
                <a className="btn btn-primary recurso-card__btn" href={r.href} target="_blank" rel="noreferrer">
                  Abrir pasta
                </a>
              </div>
            ))}
          </div>
          <p className="recursos-aviso">
            Os materiais são acrescentados de forma contínua — vale a pena voltar a espreitar.
          </p>
        </div>
      </section>
    </>
  );
}
