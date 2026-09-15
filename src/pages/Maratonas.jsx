import './Maratonas.css';
import { SeloEdicao, NumerosEdicao, FechoEdicao } from '../components/Edicao2026';
import { MarcadorEsp } from '../prototipo/NotasDev';

// ESP-08 — a página passa a descrever o que foi realizado nas Maratonas
// MUKANDA 2026 (fase gratuita, 20 Ago – 15 Set 2026). Saíram o botão
// "Inscrever-me numa Maratona" e o contador; os textos passam ao passado.

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

const PERCURSO = [
  { n: '1', titulo: 'A maratona abria', desc: 'Era publicada um dia antes do início da fase, para os estudantes saberem o que vinha.' },
  { n: '2', titulo: 'Os estudantes resolviam', desc: 'Dentro da janela de 48 horas, ao seu ritmo, no computador ou no telemóvel.' },
  { n: '3', titulo: 'O professor validava', desc: 'A correcção era feita por quem escreveu as questões, e o resultado ficava visível para o estudante.' },
  { n: '4', titulo: 'Aula de correcção', desc: 'Nos dois dias seguintes ao fecho, ao vivo, começando pelas questões em que a maioria falhou.' },
];

const CALENDARIO = [
  { semana: 'Semana 1 · 20 a 26 de Agosto', fase: 'Fase A · Fundamentos' },
  { semana: 'Semana 2 · 27 de Agosto a 2 de Setembro', fase: 'Fase B · Nível Intermediário' },
  { semana: 'Semana 3 · 3 a 10 de Setembro', fase: 'Fase C · Autonomia e Aplicação Avançada' },
];

// Plano temático por área: cada linha é [disciplina, Fase A, Fase B, Fase C].
const PLANO_TEMATICO = [
  {
    area: 'Engenharia e Tecnologia',
    linhas: [
      ['Matemática', 'Fundamentos algébricos, funções e trigonometria I', 'Expressões racionais e irracionais · limites e derivadas I · trigonometria II', 'Expressões não algébricas, integrais e trigonometria III'],
      ['Física', 'Fundamentos de cinemática e vectores', 'Dinâmica e leis do movimento', 'Conservação de energia e hidrostática'],
      ['Química', 'Estrutura da matéria e tabela periódica', 'Funções inorgânicas e estequiometria', 'Soluções e concentrações'],
    ],
  },
  {
    area: 'Ciências Sociais',
    linhas: [
      ['L. Portuguesa', 'Fonética, ortografia e leitura', 'Morfossintaxe e tipologia textual', 'Sintaxe da frase complexa e redacção'],
      ['Cultura Geral', 'Geografia física e recursos de Angola', 'História de Angola: do pré-colonial à independência', 'Angola contemporânea e relações internacionais'],
      ['Matemática', 'Números, expressões e equações do 1.º e 2.º grau', 'Polinómios, equações e inequações II · introdução a limites e derivadas', 'Expressões racionais e irracionais · limites e derivadas II'],
    ],
  },
];

export default function Maratonas() {
  return (
    <>
      <section className="maratonas-hero">
        <div className="container maratonas-hero__inner">
          <div className="maratonas-hero__text">
            <SeloEdicao />
            <h1>
              Maratonas MUKANDA 2026
              <MarcadorEsp
                esp="ESP-08"
                balao="direita"
                texto="A página passa a ser o balanço da edição 2026: textos no passado, sem “Inscrever-me numa Maratona” e sem contador."
              />
            </h1>
            <p>
              Na fase gratuita de 2026, estudantes de todo o país treinaram com
              quinze questões de exames reais por maratona, uma janela de 48 horas
              para responder e uma aula ao vivo onde um professor explicou tudo.
            </p>
          </div>
          <div className="maratonas-hero__illustration">
            <img src="/maratonas.webp" alt="Maratonas MUKANDA" width="940" height="788" />
          </div>
        </div>
      </section>

      <section className="maratonas-explicacao">
        <div className="container maratonas-explicacao__grid">
          {PILARES.map((p) => (
            <div className="maratonas-explicacao__card" key={p.titulo}>
              <h3>{p.titulo}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <NumerosEdicao
        titulo="As maratonas em números"
        chaves={['maratonas', 'participacoes', 'estudantes']}
        marcador="Secção nova: números da edição 2026, da mesma fonte da hero (config/estatisticas.js)."
      />

      <section className="maratonas-percurso">
        <div className="container">
          <h2>Como funcionou cada maratona</h2>
          <div className="maratonas-percurso__grid">
            {PERCURSO.map((p) => (
              <div className="maratonas-percurso__passo" key={p.n}>
                <span className="maratonas-percurso__n">{p.n}</span>
                <h3>{p.titulo}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="maratonas-calendario" id="calendario">
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
                    <td><span className="pill pill--realizada">Realizada</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="maratonas-calendario__nota">
            A primeira maratona começou a 20 de Agosto de 2026, às 20h00. As
            maratonas abertas e as aulas online continuaram até 15 de Setembro.
          </p>
        </div>
      </section>

      <section className="maratonas-plano">
        <div className="container">
          <h2>O que saiu em cada fase</h2>
          <p className="maratonas-plano__intro">
            As questões saíram do plano temático de cada área de acesso.
          </p>
          {PLANO_TEMATICO.map((a) => (
            <div className="maratonas-plano__area" key={a.area}>
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
                        <td><strong>{l[0]}</strong></td>
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

      <FechoEdicao
        titulo="As maratonas vão voltar"
        texto="Estamos a preparar a próxima edição, já na nova app mobile. Entra na comunidade para saberes a data em primeira mão."
      />
    </>
  );
}
