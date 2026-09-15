import './AulasOnline.css';
import { SeloEdicao, NumerosEdicao, FechoEdicao } from '../components/Edicao2026';
import { MarcadorEsp } from '../prototipo/NotasDev';

// ESP-08 — a página passa a descrever o que foi realizado nas Aulas Online
// MUKANDA 2026 (fase gratuita, 20 Ago – 15 Set 2026). Textos no passado,
// sem botões de inscrição.

const COMO_FUNCIONARAM = [
  {
    titulo: 'A correcção da maratona',
    desc: 'Um professor apresentou a resolução das 15 questões, pela mesma ordem em que os estudantes as viram, começando pelas que a maioria falhou.',
  },
  {
    titulo: 'Ao vivo, por videochamada',
    desc: 'As sessões aconteceram em directo, com espaço para os estudantes perguntarem o que não ficou claro.',
  },
  {
    titulo: 'Gratuitas em 2026',
    desc: 'Na fase gratuita, as aulas online MUKANDA PREPA foram totalmente gratuitas para todos os estudantes.',
  },
];

const DISCIPLINAS = ['Matemática', 'Física', 'Química', 'L. Portuguesa', 'Cultura Geral'];

export default function AulasOnline() {
  return (
    <>
      <section className="aulas-hero">
        <div className="container aulas-hero__inner">
          <div className="aulas-hero__text">
            <SeloEdicao />
            <h1>
              Aulas Online MUKANDA 2026
              <MarcadorEsp
                esp="ESP-08"
                balao="direita"
                texto="A página passa a ser o balanço da edição 2026: textos no passado e sem botão de começar/inscrever."
              />
            </h1>
            <p>
              Depois de cada maratona, um professor explicou ao vivo a resolução de
              cada questão. Foi onde os estudantes perceberam o que correu mal — e porquê.
            </p>
          </div>
          <div className="aulas-hero__illustration">
            <img src="/aulas-online.webp" alt="Aulas Online MUKANDA" width="940" height="788" />
          </div>
        </div>
      </section>

      <section className="aulas-explicacao">
        <div className="container aulas-explicacao__grid">
          {COMO_FUNCIONARAM.map((c) => (
            <div className="aulas-explicacao__card" key={c.titulo}>
              <h3>{c.titulo}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <NumerosEdicao
        titulo="As aulas em números"
        chaves={['aulas', 'maratonas', 'estudantes']}
        marcador="Secção nova: números da edição 2026, da mesma fonte da hero (config/estatisticas.js)."
      />

      <section className="aulas-horario">
        <div className="container">
          <h2>Como foram organizadas</h2>
          <p className="aulas-horario__texto">
            Cada aula de correcção realizou-se <strong>nos dois dias seguintes ao fecho
            da maratona</strong>, com as questões ainda frescas — e nunca antes, para não
            entregar as respostas a quem ainda não tinha respondido.
          </p>
          <p className="aulas-horario__texto">
            A data e a hora de cada aula foram definidas semanalmente pela
            coordenação pedagógica e comunicadas nos grupos de estudantes da
            MUKANDA Community.
          </p>
          <ul className="aulas-disciplinas" aria-label="Disciplinas">
            {DISCIPLINAS.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </div>
      </section>

      <FechoEdicao
        titulo="As aulas vão voltar"
        texto="A próxima edição está a ser preparada, já na nova app mobile. Entra na comunidade para não perderes o regresso."
      />
    </>
  );
}
