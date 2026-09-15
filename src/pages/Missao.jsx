import { Link } from 'react-router-dom';
import './Missao.css';
import { MarcadorEsp } from '../prototipo/NotasDev';

// Decisão da equipa (D5, 3 Ago 2026): a plataforma lança sem histórico, por
// isso esta secção não anuncia números — anuncia compromissos. Quando houver
// dados reais de maratonas realizadas e estudantes inscritos, os números
// entram aqui com fonte.
const COMPROMISSOS = [
  // ESP-09: a fase gratuita terminou a 15/09 — o compromisso passa ao passado.
  { valor: 'Gratuito', label: 'Maratonas e aulas online 2026 foram sem custos' },
  { valor: 'Nacional', label: 'Abertas a estudantes de todo o país' },
  { valor: 'No telemóvel', label: 'Pensado para dados móveis e ecrãs pequenos' },
  { valor: 'Comunidade', label: 'Estudantes e professores lado a lado' },
];

export default function Missao() {
  return (
    <>
      <section className="missao-hero">
        <div className="container">
          <h1>A Nossa Missão</h1>
          <p>Tornar o acesso à universidade mais justo para todos os estudantes angolanos.</p>
        </div>
      </section>

      <section className="missao-texto">
        <div className="container missao-texto__inner">
          <p>
            Em Angola, o percurso até à universidade não depende só do
            esforço individual do estudante — depende também de onde vive,
            do acesso a bons professores e de ter, ou não, materiais de
            estudo organizados. A MUKANDA PREPA existe para reduzir essa
            desigualdade.
          </p>
          <p>
            Construímos uma plataforma pensada para o contexto angolano:
            acessível maioritariamente via telemóvel, funcional em ligações
            3G/4G, e com conteúdos alinhados directamente com os exames de
            acesso ao ensino superior em Angola — não traduções de
            materiais estrangeiros.
          </p>
          <p>
            Acreditamos que a preparação para a universidade não devia
            depender da capacidade financeira da família ou da província
            onde se nasce. É por isso que, na primeira fase — de 20 de Agosto
            a 15 de Setembro de 2026 — as maratonas e as aulas online foram
            totalmente gratuitas para todos os estudantes, com uma comunidade
            activa a acompanhar cada semana.
          </p>

          {/* ESP-09: contexto da fase actual do projecto. */}
          <div className="missao-fase-actual">
            <span className="missao-fase-actual__rotulo">
              Onde estamos agora
              <MarcadorEsp
                esp="ESP-09"
                balao="direita"
                texto="Único acréscimo à página: contextualiza a fase actual (edição 2026 concluída, app em manutenção, app mobile a caminho). O texto da missão ficou igual; só o 3.º parágrafo passou ao passado."
              />
            </span>
            <p>
              Concluída a primeira edição, estamos a preparar a próxima fase: a app
              web está em manutenção enquanto passamos para uma app mobile, com mais
              funcionalidades. As maratonas e as aulas online retomam brevemente.
            </p>
            <Link to="/entrar-na-app">Saber mais sobre a nova app →</Link>
          </div>
        </div>
      </section>

      <section className="missao-stats">
        <div className="container">
          <h2>O nosso compromisso</h2>
          <div className="missao-stats__grid">
            {COMPROMISSOS.map((e) => (
              <div className="stat-card" key={e.label}>
                <span className="stat-card__valor">{e.valor}</span>
                <span className="stat-card__label">{e.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="missao-visao">
        <div className="container missao-visao__inner">
          <h2>Visão 2030</h2>
          <p>
            Até 2030, queremos ser a plataforma de referência na preparação
            para o acesso ao ensino superior em Angola, presente em todas as
            províncias do país, com milhares de estudantes preparados todos os
            anos e uma taxa de aprovação acima da média nacional.
          </p>
        </div>
      </section>
    </>
  );
}
