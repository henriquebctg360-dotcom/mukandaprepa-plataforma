import { Link } from 'react-router-dom';
import './Equipa.css';
import { DIRECCAO, EQUIPAS, DOCENTES } from '../config/equipa.jsx';

// ESP-11 — A Nossa Equipa: fotografia, nome e função de cada pessoa.
// Os dados vivem em src/config/equipa.jsx.

function iniciais(nome) {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();
}

function MembroCard({ membro }) {
  return (
    <div className="membro-card">
      {membro.foto ? (
        <img className="membro-card__foto" src={membro.foto} alt={membro.nome} width="600" height="600" loading="lazy" />
      ) : (
        <div className="membro-card__avatar" aria-hidden="true">{iniciais(membro.nome)}</div>
      )}
      <h3>{membro.nome}</h3>
      <p>{membro.cargo}</p>
    </div>
  );
}

function Seccao({ titulo, membros, destaque = false }) {
  return (
    <section className={`equipa-secao${destaque ? ' equipa-secao--destaque' : ''}`}>
      <div className="container">
        <h2>{titulo}</h2>
        <div className={`equipa-grid${destaque ? ' equipa-grid--destaque' : ''}`}>
          {membros.map((m) => <MembroCard key={m.nome} membro={m} />)}
        </div>
      </div>
    </section>
  );
}

export default function Equipa() {
  const total = DIRECCAO.length
    + EQUIPAS.reduce((n, e) => n + e.membros.length, 0) + DOCENTES.length;

  return (
    <>
      <section className="equipa-hero">
        <div className="container">
          <h1>
            A Nossa Equipa
          </h1>
          <p>As {total} pessoas que constroem a MUKANDA PREPA, da direcção ao corpo docente.</p>
        </div>
      </section>

      <Seccao titulo="Fundadores e Directores" membros={DIRECCAO} destaque />
      {EQUIPAS.map((eq) => <Seccao key={eq.titulo} titulo={eq.titulo} membros={eq.membros} />)}
      <Seccao titulo="Corpo Docente" membros={DOCENTES} />

      <section className="equipa-secao equipa-nota">
        <div className="container">
        </div>
      </section>

      <section className="equipa-cta">
        <div className="container equipa-cta__inner">
          <h2>Queres trabalhar connosco?</h2>
          <Link to="/contactos" className="btn btn-white">Falar com a equipa</Link>
        </div>
      </section>
    </>
  );
}
