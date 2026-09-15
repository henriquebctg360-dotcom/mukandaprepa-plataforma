import './AulasOnline.css';

const COMO_FUNCIONAM = [
  {
    titulo: 'A correcção da maratona',
    desc: 'Um professor apresenta a resolução das 15 questões, pela mesma ordem em que as viste, e começa por aquelas em que a maioria falhou.',
  },
  {
    titulo: 'Ao vivo, por videochamada',
    desc: 'A sessão acontece em directo, com espaço para perguntares o que não ficou claro.',
  },
  {
    titulo: 'Gratuitas em 2026',
    desc: 'Nesta primeira fase, as aulas online MUKANDA PREPA são totalmente gratuitas.',
  },
];

export default function AulasOnline() {
  return (
    <>
      <section className="aulas-hero">
        <div className="container aulas-hero__inner">
          <div className="aulas-hero__text">
            <h1>Aulas Online ao Vivo</h1>
            <p>
              Depois de cada maratona, um professor explica ao vivo a resolução
              de cada questão. É onde se percebe o que correu mal — e porquê.
            </p>
            <a href="/planos" className="btn btn-primary">Começar gratuitamente</a>
          </div>
          <div className="aulas-hero__illustration">
            <img src="/aulas-online.webp" alt="Aulas Online MUKANDA" width="940" height="788" />
          </div>
        </div>
      </section>

      <section className="aulas-explicacao">
        <div className="container aulas-explicacao__grid">
          {COMO_FUNCIONAM.map((c) => (
            <div className="aulas-explicacao__card" key={c.titulo}>
              <h3>{c.titulo}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="aulas-horario">
        <div className="container">
          <h2>Quando acontecem</h2>
          <p className="aulas-horario__texto">
            A aula de correcção realiza-se <strong>nos dois dias seguintes ao fecho
            da maratona</strong>, enquanto as questões ainda estão frescas — e nunca
            antes, para não entregar as respostas a quem ainda não respondeu.
          </p>
          <p className="aulas-horario__texto">
            A data e a hora de cada aula são definidas semanalmente pela
            coordenação pedagógica e comunicadas nos grupos de estudantes da
            MUKANDA Community. Como cada professor escolhe quando abre a sua
            maratona, duas maratonas da mesma fase podem ter aulas em dias
            diferentes.
          </p>
        </div>
      </section>

      <section className="aulas-cta-final">
        <div className="container aulas-cta-final__inner">
          <h2>Pronto para aprender?</h2>
          <a href="/planos" className="btn btn-white">Ver todos os planos</a>
        </div>
      </section>
    </>
  );
}
