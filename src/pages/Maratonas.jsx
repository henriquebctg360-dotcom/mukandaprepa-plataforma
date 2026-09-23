
import './Maratonas.css';
import { APP_REGISTO } from '../config/appLinks';
import { DATA_PROXIMA_MARATONA_LEGIVEL } from '../config/maratona';

// =========================================================
// PILARES
// =========================================================

const PILARES = [
  {
    titulo: '15 questões, 20 valores',
    desc: 'Cada maratona teve escolha múltipla com quatro opções, construída a partir de exames reais das universidades angolanas.',
  },
  {
    titulo: 'Até 48 horas para responder',
    desc: 'Cada maratona ficou aberta durante uma janela de dois dias, para cada estudante entrar quando lhe fosse mais conveniente.',
  },
  {
    titulo: 'Corrigida por um professor',
    desc: 'O resultado aparecia assim que o professor validava a submissão — e a resolução era explicada numa aula online.',
  },
];

// =========================================================
// PERCURSO
// =========================================================

const PERCURSO = [
  {
    n: '1',
    titulo: 'A maratona abria',
    desc: 'Era publicada um dia antes do início da fase, para os estudantes saberem o que vinha.',
  },
  {
    n: '2',
    titulo: 'Os estudantes reolviam ',
    desc: 'Dentro da janela de 48 horas, ao seu ritmo, no computador ou no telemóvel.',
  },
  {
    n: '3',
    titulo: 'O professor validava',
    desc: 'A correcção era feita por quem escreveu as questões, e o resultado ficava visível para o estudante.',
  },
  {
    n: '4',
    titulo: 'Aula de correcção',
    desc: 'Nos dois dias seguintes ao fecho, ao vivo, começando pelas questões em que a maioria falhou.',
  },
];

// =========================================================
// CALENDÁRIO
// =========================================================

const CALENDARIO = [
  {
    semana: 'Semana 1 · 20 a 26 de Agosto',
    fase: 'Fase A · Fundamentos',
    estado: 'aberta',
  },
  {
    semana: 'Semana 2 · 27 de Agosto a 2 de Setembro',
    fase: 'Fase B · Nível Intermediário',
    estado: 'brevemente',
  },
  {
    semana: 'Semana 3 · 3 a 10 de Setembro',
    fase: 'Fase C · Autonomia e Aplicação Avançada',
    estado: 'brevemente',
  },
];

// =========================================================
// PLANO TEMÁTICO
// =========================================================

const PLANO_TEMATICO = [
  {
    area: 'Engenharia e Tecnologia',
    linhas: [
      [
        'Matemática',
        'Fundamentos algébricos, funções e trigonometria I',
        'Expressões racionais e irracionais · limites e derivadas I · trigonometria II',
        'Expressões não algébricas, integrais e trigonometria III',
      ],
      [
        'Física',
        'Fundamentos de cinemática e vectores',
        'Dinâmica e leis do movimento',
        'Conservação de energia e hidrostática',
      ],
      [
        'Química',
        'Estrutura da matéria e tabela periódica',
        'Funções inorgânicas e estequiometria',
        'Soluções e concentrações',
      ],
    ],
  },
  {
    area: 'Ciências Sociais',
    linhas: [
      [
        'L. Portuguesa',
        'Fonética, ortografia e leitura',
        'Morfossintaxe e tipologia textual',
        'Sintaxe da frase complexa e redacção',
      ],
      [
        'Cultura Geral',
        'Geografia física e recursos de Angola',
        'História de Angola: do pré-colonial à independência',
        'Angola contemporânea e relações internacionais',
      ],
      [
        'Matemática',
        'Números, expressões e equações do 1.º e 2.º grau',
        'Polinómios, equações e inequações II · introdução a limites e derivadas',
        'Expressões racionais e irracionais · limites e derivadas II',
      ],
    ],
  },
];

// =========================================================
// COMPONENTE
// =========================================================

export default function Maratonas() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="maratonas-hero">
        <div className="container maratonas-hero__inner">

          <div className="maratonas-hero__text">

            <span className="maratonas-hero__badge">
              ● Edição 2026 · Gratuita até 15 de Setembro
            </span>

            <h1>Maratonas MUKANDA 2026</h1>

            <p>
            Na fase gratuita de 2026, estudantes de todo o país treinaram
             com quinze questões de exames reais por maratona,
             uma janela de 48 horas para responder e uma aula ao vivo 
             onde um professor explicou tudo.
            </p>

        
          </div>

          <div className="maratonas-hero__illustration">
            <img
              src="/maratonas.webp"
              alt="Maratonas MUKANDA"
              width="940"
              height="788"
            />
          </div>

        </div>
      </section>


      {/* =====================================================
          PILARES
      ===================================================== */}

      <section className="maratonas-explicacao">
        <div className="container maratonas-explicacao__grid">

          {PILARES.map((p) => (
            <div
              className="maratonas-explicacao__card"
              key={p.titulo}
            >
              <h3>{p.titulo}</h3>

              <p>{p.desc}</p>
            </div>
          ))}

        </div>
      </section>


      {/* =====================================================
          NÚMEROS
      ===================================================== */}

      <section className="maratonas-numeros">
        <div className="container">

          <div className="maratonas-numeros__header">
            <h2>As maratonas em números</h2>

            <span>
              DADOS DA EDIÇÃO 2026
            </span>
          </div>

          <div className="maratonas-numeros__grid">

            <div className="maratonas-numero">
              <strong>165</strong>
              <span>estudantes inscritos</span>
            </div>

            <div className="maratonas-numero">
              <strong>22</strong>
              <span>maratonas realizadas</span>
            </div>

            <div className="maratonas-numero">
              <strong>1.600</strong>
              <span>exercícios resolvidos</span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          COMO FUNCIONA
      ===================================================== */}

      <section className="maratonas-percurso">
        <div className="container">

          <h2>Como funcionou uma maratona</h2>

          <div className="maratonas-percurso__grid">

            {PERCURSO.map((p) => (
              <div
                className="maratonas-percurso__passo"
                key={p.n}
              >
                <span className="maratonas-percurso__n">
                  {p.n}
                </span>

                <h3>{p.titulo}</h3>

                <p>{p.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          COUNTDOWN
      ===================================================== */}

     

      {/* =====================================================
          CALENDÁRIO
      ===================================================== */}

      <section
        className="maratonas-calendario"
        id="calendario"
      >
        <div className="container">

          <h2>Calendário da edição 2026</h2>

          <div className="maratonas-calendario__scroll">

            <table>

              <thead>
                <tr>
                  <th>Semana</th>
                  <th>Fase</th>
                  <th>Estado</th>
                </tr>
              </thead>

              <tbody>

                {CALENDARIO.map((c) => (
                  <tr key={c.semana}>

                    <td>{c.semana}</td>

                    <td>{c.fase}</td>

                    <td>
                      <span
                        className={`pill pill--${c.estado}`}
                      >
                        {c.estado === 'aberta'
                          ? 'Inscrições abertas'
                          : 'Em breve'}
                      </span>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

          <p className="maratonas-calendario__nota">
            A primeira maratona começa a{' '}
            {DATA_PROXIMA_MARATONA_LEGIVEL}. As maratonas
            abertas e as aulas online continuam até 15 de Setembro.
          </p>

        </div>
      </section>


      {/* =====================================================
          PLANO TEMÁTICO
      ===================================================== */}

      <section className="maratonas-plano">

        <div className="container">

          <h2>O que sai em cada fase</h2>

          <p className="maratonas-plano__intro">
            As questões saem do plano temático de cada área.
            Serve para saberes onde concentrar o estudo antes
            de cada maratona.
          </p>

          {PLANO_TEMATICO.map((a) => (

            <div
              className="maratonas-plano__area"
              key={a.area}
            >

              <h3>{a.area}</h3>

              <div className="maratonas-plano__scroll">

                <table>

                  <thead>
                    <tr>
                      <th>Disciplina</th>
                      <th>Fase A · Fundamentos</th>
                      <th>Fase B · Intermediário</th>
                      <th>Fase C · Autonomia</th>
                    </tr>
                  </thead>

                  <tbody>

                    {a.linhas.map((l) => (

                      <tr key={l[0]}>

                        <td>
                          <strong>{l[0]}</strong>
                        </td>

                        <td>{l[1]}</td>
                        <td>{l[2]}</td>
                        <td>{l[3]}</td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          CTA FINAL
      ===================================================== */}

      <section className="maratonas-final">

        <div className="container maratonas-final__inner">

          <div>
            <h2>As maratonas vão voltar</h2>

            <p>
             Estamos a preparar a próxima edição, ~
             já na nova app mobile. Entra na comunidade para saberes a data em primeira mão.
            </p>
          </div>

          <div className="maratonas-final__acoes">

            <a
              href={APP_REGISTO}
              className="btn btn-light"
              target="_blank"
              rel="noreferrer"
            >
              Entrar na MUKANDA
            </a>

            <a
              href="#calendario"
              className="btn btn-outline-light"
            >
              Ver calendário
            </a>

          </div>

        </div>

      </section>

    </>
  );
}