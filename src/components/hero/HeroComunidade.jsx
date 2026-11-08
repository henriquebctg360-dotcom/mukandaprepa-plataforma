// Proposta C — Comunidade primeiro.
// Um número grande no título e dois cartões de acção: WhatsApp e comunidade.
import { CONTACTO, MENSAGEM_WHATSAPP_HERO, linkComunidade, whatsappCom } from '../../config/contactos';
import { ESTATISTICAS, PERIODO_FASE_GRATUITA } from '../../config/estatisticas';
import { ComMarcador, MarcadorEsp } from '../../prototipo/NotasDev';
import { EtiquetaExemplo, IconeComunidade, IconeWhatsApp, NumeroAnimado } from './partes';

export default function HeroComunidade() {
  const [principal, ...restantes] = ESTATISTICAS;

  return (
    <section className="hero-c">
      <div className="container hero-c__inner">
        <div className="hero-c__texto">
          <span className="hero-v__selo hero-v__selo--escuro">
            <span className="hero-v__selo-ponto" aria-hidden="true" />
            Fase gratuita 2026 · {PERIODO_FASE_GRATUITA}
          </span>

          <h1>
            <span className="hero-c__destaque"><NumeroAnimado valor={principal.valor} /></span>{' '}
            estudantes treinaram connosco na fase gratuita
          </h1>

          <p className="hero-c__sub">
            Maratonas com questões de exames reais e aulas de correcção ao vivo,
            sem pagar nada. A próxima fase está a ser preparada — e a conversa
            continua na comunidade.
          </p>

          <div className="hero-c__numeros">
            {restantes.map((e) => (
              <div key={e.chave}>
                <strong><NumeroAnimado valor={e.valor} /></strong>
                <span>{e.rotulo}</span>
              </div>
            ))}
          </div>
          <div className="hero-c__exemplo">
            <EtiquetaExemplo escuro />
            <MarcadorEsp
              esp="ESP-02"
              balao="direita"
              texto="O primeiro número (estudantes) passa para o título; os outros ficam por baixo. Todos vêm de src/config/estatisticas.js."
            />
          </div>
        </div>

        <div className="hero-c__cartoes">
          <ComMarcador
            esp="ESP-02"
            bloco
            texto="Cartão de contacto: abre o WhatsApp da equipa com uma mensagem já escrita."
          >
            <a className="hero-c__cartao" href={whatsappCom(MENSAGEM_WHATSAPP_HERO)} target="_blank" rel="noreferrer">
              <span className="hero-c__icone hero-c__icone--whatsapp"><IconeWhatsApp /></span>
              <span className="hero-c__cartao-texto">
                <strong>Fala connosco</strong>
                <span>Tira as tuas dúvidas directamente com a equipa MUKANDA PREPA.</span>
                <em>WhatsApp · {CONTACTO.telefoneLegivel}</em>
              </span>
              <span className="hero-c__seta" aria-hidden="true">→</span>
            </a>
          </ComMarcador>

          <ComMarcador
            esp="ESP-02"
            bloco
            texto="Cartão da MUKANDA Community (Comunidade do WhatsApp). Link a colocar em config/contactos.js; vazio, abre o WhatsApp a pedir a entrada."
          >
            <a className="hero-c__cartao hero-c__cartao--laranja" href={linkComunidade()} target="_blank" rel="noreferrer">
              <span className="hero-c__icone"><IconeComunidade /></span>
              <span className="hero-c__cartao-texto">
                <strong>Entra na MUKANDA Community</strong>
                <span>A comunidade onde anunciamos maratonas, aulas e todas as novidades — incluindo a nova app.</span>
                <em>Comunidade do WhatsApp</em>
              </span>
              <span className="hero-c__seta" aria-hidden="true">→</span>
            </a>
          </ComMarcador>
        </div>
      </div>
    </section>
  );
}
