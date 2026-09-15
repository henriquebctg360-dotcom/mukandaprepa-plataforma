import './SobreResumo.css';

const BULLETS = [
  'Conteúdos alinhados às universidades angolanas',
  'Acompanhamento por tutores',
  'Comunidade activa',
];

// Na versão em produção (16 Ago 2026) este bloco deixou de ter fotografia:
// fica só o título, a lista e o botão, centrados.
export default function SobreResumo() {
  return (
    <section className="sobre-resumo">
      <div className="container sobre-resumo__inner">
        <h2>Sobre nós</h2>
        <ul className="sobre-resumo__lista">
          {BULLETS.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <a href="/sobre" className="btn btn-outline">Saber mais</a>
      </div>
    </section>
  );
}
