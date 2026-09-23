import './AulasOnline.css';

const COMO_FUNCIONAM = [
  {
    titulo: 'A correcção da maratona',
    desc: 'Um professor apresenta a resolução das 15 questões, pela mesma ordem em que os estudantes as viram, começando pelas que a maioria falhou.',
  },
  {
    titulo: 'Ao vivo, por videochamada',
    desc: 'As sessões acontecem em directo, com espaço para os estudantes perguntarem o que não ficou claro.',
  },
  {
    titulo: 'Gratuitas em 2026',
    desc: 'Na fase gratuita de aulas online MUKANDA, foram totalmente gratuitas para todos os estudantes.',
  },
];

const MATERIAS = [
  'Matemática',
  'Física',
  'Química',
  'L. Portuguesa',
  'Cultura Geral',
];

export default function AulasOnline() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="aulas-hero">
        <div className="container aulas-hero__inner">

          <div className="aulas-hero__text">

            <span className="aulas-hero__badge">
              ● Edição 2026 confirmada · 20 Ago · 15 Set 2026
            </span>

            <h1>
              Aulas Online MUKANDA 2026
            </h1>

            <p>
              Depois de cada maratona, um professor explica ao vivo a
              resolução de cada questão. Foi onde os estudantes
              perceberam o que correu mal — e porquê.
            </p>

          </div>

          <div className="aulas-hero__illustration">

            <img
              src="/aulas-online.webp"
              alt="Aulas Online MUKANDA"
              width="940"
              height="788"
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          3 INFORMAÇÕES
      ===================================================== */}

      <section className="aulas-explicacao">

        <div className="container aulas-explicacao__grid">

          {COMO_FUNCIONAM.map((c) => (
            <div
              className="aulas-explicacao__card"
              key={c.titulo}
            >

              <h3>{c.titulo}</h3>

              <p>{c.desc}</p>

            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          NÚMEROS
      ===================================================== */}

      <section className="aulas-numeros">

        <div className="container">

          <div className="aulas-numeros__top">

            <h2>
              As aulas em números
            </h2>

            <span className="aulas-numeros__tag">
              VALORES DE EXEMPLO
            </span>

          </div>


          <div className="aulas-numeros__grid">

            <div className="aulas-numero">

              <strong>650</strong>

              <span>
                estudantes inscritos
              </span>

            </div>


            <div className="aulas-numero">

              <strong>22</strong>

              <span>
                maratonas realizadas
              </span>

            </div>


            <div className="aulas-numero">

              <strong>8</strong>

              <span>
                aulas de correcção ao vivo
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMO FORAM ORGANIZADAS
      ===================================================== */}

      <section className="aulas-organizacao">

        <div className="container aulas-organizacao__inner">

          <h2>
            Como foram organizadas
          </h2>

          <p>
            Cada aula de correcção realizou-se{' '}
            <strong>
              nos dois dias seguintes ao fecho da maratona
            </strong>
            , com as questões ainda frescas — e nunca antes,
            para não entregar as respostas a quem ainda não
            tinha respondido.
          </p>

          <p>
            A data e a hora de cada aula foram definidas
            semanalmente pela coordenação pedagógica e
            comunicadas nos grupos de estudantes da MUKANDA
            Community.
          </p>


          <div className="aulas-organizacao__materias">

            {MATERIAS.map((materia) => (
              <span key={materia}>
                {materia}
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA FINAL
      ===================================================== */}

      <section className="aulas-cta-final">

        <div className="container aulas-cta-final__inner">

          <div className="aulas-cta-final__text">

            <h2>
              As aulas vão voltar
            </h2>

            <p>
              A próxima edição está a ser preparada, já na nova
              app móvel. Entra na comunidade para não perderes
              o regresso.
            </p>

          </div>


          <div className="aulas-cta-final__acoes">

            <a
              href="#"
              className="btn aulas-btn-comunidade"
            >
              👥 &nbsp; Entrar na comunidade
            </a>

            <a
              href="tel:+244945329074"
              className="btn aulas-btn-telefone"
            >
              ◉ &nbsp; +244 945 329 074
            </a>

          </div>

        </div>

      </section>

    </>
  );
}