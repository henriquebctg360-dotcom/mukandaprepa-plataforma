// Proposta B — Clássica com faixa de números.
// Mantém a hero actual (texto + imagem) e acrescenta os números numa faixa
// escura que sobe por cima do fim da secção.
import { ESTATISTICAS, PERIODO_FASE_GRATUITA } from '../../config/estatisticas';
import { MarcadorEsp } from '../../prototipo/NotasDev';
import { BotoesContacto, EtiquetaExemplo, NumeroAnimado } from './partes';

export default function HeroClassica() {
  return (
    <section className="hero-b">
      <div className="container hero-b__inner">
        <div className="hero-b__texto">
          <h1>A melhor preparação para o acesso à universidade</h1>
          <p className="hero-b__sub">
            Plataforma 100% angolana de maratonas online e aulas ao vivo. A fase
            gratuita terminou e já estamos a preparar a próxima — fala connosco
            ou junta-te à comunidade para não perderes nada.
          </p>
          <BotoesContacto />
        </div>
        <div className="hero-b__imagem">
          <img
            src="/home-hero.webp"
            alt="Estudante da MUKANDA PREPA com tutores, maratonas gratuitas e apoio 24h"
            width="1300"
            height="813"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="container">
        <div className="hero-b__faixa">
          <div className="hero-b__faixa-topo">
            <span>Fase gratuita 2026 · {PERIODO_FASE_GRATUITA}</span>
            <EtiquetaExemplo escuro />
            <MarcadorEsp
              esp="ESP-02"
              texto="Faixa com os números da fase gratuita (src/config/estatisticas.js). Os reais estão no painel de administração da app."
            />
          </div>
          <div className="hero-b__faixa-grelha">
            {ESTATISTICAS.map((e) => (
              <div className="hero-b__numero" key={e.chave}>
                <strong><NumeroAnimado valor={e.valor} /></strong>
                <span>{e.rotulo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
