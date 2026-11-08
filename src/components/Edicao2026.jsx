// ESP-08 — peças partilhadas pelas páginas Maratonas e Aulas Online, que
// passam a descrever o que foi realizado na edição MUKANDA PREPA 2026.
import './Edicao2026.css';
import { TODAS_ESTATISTICAS, PERIODO_FASE_GRATUITA, formatarNumero } from '../config/estatisticas';
import { CONTACTO, MENSAGEM_WHATSAPP_HERO, linkComunidade, whatsappCom } from '../config/contactos';
import { IconeComunidade, IconeWhatsApp } from './hero/partes';

export function SeloEdicao() {
  return (
    <span className="edicao-selo">
      <span className="edicao-selo__visto" aria-hidden="true">✓</span>
      Edição 2026 concluída · {PERIODO_FASE_GRATUITA}
    </span>
  );
}

// Faixa de números da edição. `chaves` escolhe quais (ver config/estatisticas.js).
export function NumerosEdicao({ titulo, chaves }) {
  const numeros = chaves.map((c) => TODAS_ESTATISTICAS.find((e) => e.chave === c)).filter(Boolean);
  return (
    <section className="edicao-numeros">
      <div className="container">
        <div className="edicao-numeros__topo">
          <h2>{titulo}</h2>
        </div>
        <div className="edicao-numeros__grelha">
          {numeros.map((e) => (
            <div key={e.chave}>
              <strong>{formatarNumero(e.valor)}{e.sufixo}</strong>
              <span>{e.rotulo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Fecho das páginas: sem inscrições, convida para a próxima edição.
export function FechoEdicao({ titulo, texto }) {
  return (
    <section className="edicao-fecho">
      <div className="container edicao-fecho__inner">
        <div>
          <h2>
            {titulo}
          </h2>
          <p>{texto}</p>
        </div>
        <div className="edicao-fecho__botoes">
          <a href={linkComunidade()} target="_blank" rel="noreferrer" className="btn btn-white">
            <IconeComunidade /> Entrar na comunidade
          </a>
          <a href={whatsappCom(MENSAGEM_WHATSAPP_HERO)} target="_blank" rel="noreferrer" className="btn edicao-fecho__whatsapp">
            <IconeWhatsApp /> {CONTACTO.telefoneLegivel}
          </a>
        </div>
      </div>
    </section>
  );
}
