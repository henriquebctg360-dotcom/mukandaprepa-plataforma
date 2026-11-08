// Proposta A — Números em destaque.
// Os números da fase gratuita ocupam o lugar da imagem: são a mensagem.
import { ESTATISTICAS, PERIODO_FASE_GRATUITA } from '../../config/estatisticas';
import { MarcadorEsp } from '../../prototipo/NotasDev';
import { BotoesContacto, EtiquetaExemplo, NumeroAnimado } from './partes';

export default function HeroNumeros() {
  return (
    <section className="hero-a">
      <div className="container hero-a__inner">
        <div className="hero-a__texto">
          <span className="hero-v__selo">
            <span className="hero-v__selo-ponto" aria-hidden="true" />
            Fase gratuita 2026 · {PERIODO_FASE_GRATUITA}
          </span>
          <h1>A fase gratuita em números</h1>
          <p className="hero-a__sub">
            Durante a fase gratuita, estudantes de todo o país treinaram com as
            maratonas MUKANDA e as aulas de correcção ao vivo. Obrigado a todos
            os que fizeram parte. Tens dúvidas ou queres saber o que vem a
            seguir? Fala connosco.
          </p>
          <BotoesContacto />
        </div>

        <div className="hero-a__numeros">
          <div className="hero-a__numeros-topo">
            <EtiquetaExemplo />
            <MarcadorEsp
              esp="ESP-02"
              texto="Números da fase gratuita. Vêm de src/config/estatisticas.js; os reais estão no painel de administração da app (Estatísticas globais)."
            />
          </div>
          <div className="hero-a__grelha">
            {ESTATISTICAS.map((e) => (
              <div className="hero-a__numero" key={e.chave}>
                <strong><NumeroAnimado valor={e.valor} /></strong>
                <span>{e.rotulo}</span>
              </div>
            ))}
          </div>
          <p className="hero-a__rodape">100% gratuito · 5 disciplinas · 2 áreas de acesso</p>
        </div>
      </div>
    </section>
  );
}
