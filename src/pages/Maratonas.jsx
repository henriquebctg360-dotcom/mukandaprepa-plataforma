import MaratonaCountdown from '../components/MaratonaCountdown';
import './Maratonas.css';
import { APP_REGISTO } from '../config/appLinks';
import { DATA_PROXIMA_MARATONA_LEGIVEL } from '../config/maratona';

// O formato de uma maratona, em três números.
const PILARES = [
  {
    titulo: '15 questões, 20 valores',
    desc: 'Escolha múltipla com quatro opções, construídas a partir de exames reais das universidades angolanas.',
  },
  {
    titulo: 'Até 48 horas para responder',
    desc: 'Cada maratona fica aberta durante uma janela de dois dias. Entras quando te for mais conveniente.',
  },
  {
    titulo: 'Corrigida por um professor',
    desc: 'O teu resultado aparece assim que o professor validar a submissão — e a resolução é explicada numa aula online.',
  },
];

// Percurso de uma maratona, do momento em que abre até à aula de correcção.
const PERCURSO = [
  { n: '1', titulo: 'A maratona abre', desc: 'Fica publicada um dia antes do início da fase, para saberes o que aí vem.' },
  { n: '2', titulo: 'Resolves quando puderes', desc: 'Dentro da janela de 48 horas, ao teu ritmo, de computador ou telemóvel.' },
  { n: '3', titulo: 'O professor valida', desc: 'A correcção é feita por quem escreveu as questões. O resultado fica visível para ti.' },
  { n: '4', titulo: 'Aula de correcção', desc: 'Nos dois dias seguintes ao fecho, ao vivo, começando pelas questões em que a maioria falhou.' },
];

// Calendário confirmado pela equipa: três semanas, três fases.
// A primeira maratona começa a 20/08 às 20h00 (data no src/config/maratona.js,
// que alimenta o contador).
const CALENDARIO = [
  { semana: 'Semana 1 · 20 a 26 de Agosto', fase: 'Fase A · Fundamentos', estado: 'aberta' },
  { semana: 'Semana 2 · 27 de Agosto a 2 de Setembro', fase: 'Fase B · Nível Intermediário', estado: 'brevemente' },
  { semana: 'Semana 3 · 3 a 10 de Setembro', fase: 'Fase C · Autonomia e Aplicação Avançada', estado: 'brevemente' },
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
            <h1>Maratona MUKANDA</h1>
            <p>
              Quinze questões de exames reais, uma janela de 48 horas para
              responder, e uma aula ao vivo onde um professor explica tudo.
              Gratuito em 2026.
            </p>
            <a href={APP_REGISTO} className="btn btn-primary" target="_blank" rel="noreferrer">Inscrever-me numa Maratona</a>
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

      <section className="maratonas-percurso">
        <div className="container">
          <h2>Como funciona uma maratona</h2>
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

      <MaratonaCountdown ctaHref={APP_REGISTO} secondaryHref="#calendario" secondaryLabel="Ver calendário" />

      <section className="maratonas-calendario" id="calendario">
        <div className="container">
          <h2>Calendário de Maratonas</h2>
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
                      <span className={`pill pill--${c.estado}`}>
                        {c.estado === 'aberta' ? 'Inscrições abertas' : 'Em breve'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="maratonas-calendario__nota">
            A primeira maratona começa a {DATA_PROXIMA_MARATONA_LEGIVEL}. As
            maratonas abertas e as aulas online continuam até 15 de Setembro.
          </p>
        </div>
      </section>

      <section className="maratonas-plano">
        <div className="container">
          <h2>O que sai em cada fase</h2>
          <p className="maratonas-plano__intro">
            As questões saem do plano temático de cada área. Serve para saberes
            onde concentrar o estudo antes de cada maratona.
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
    </>
  );
}
