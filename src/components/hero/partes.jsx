// Peças partilhadas pelas três propostas de hero (ESP-02).
import { useEffect, useRef, useState } from 'react';
import { CONTACTO, MENSAGEM_WHATSAPP_HERO, linkComunidade, whatsappCom } from '../../config/contactos';
import { DADOS_DE_EXEMPLO, formatarNumero } from '../../config/estatisticas';
import { ComMarcador } from '../../prototipo/NotasDev';

const semAnimacao = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

// Conta de 0 até ao valor quando o número entra no ecrã (uma só vez).
export function NumeroAnimado({ valor, duracao = 1400 }) {
  const ref = useRef(null);
  const [atual, setAtual] = useState(() => (semAnimacao() ? valor : 0));

  useEffect(() => {
    if (semAnimacao() || !ref.current) return undefined;
    let frame;
    const observador = new IntersectionObserver(([entrada]) => {
      if (!entrada.isIntersecting) return;
      observador.disconnect();
      const inicio = performance.now();
      const passo = (agora) => {
        const t = Math.min(1, (agora - inicio) / duracao);
        setAtual(valor * (1 - Math.pow(1 - t, 3)));
        if (t < 1) frame = requestAnimationFrame(passo);
      };
      frame = requestAnimationFrame(passo);
    }, { threshold: 0.4 });
    observador.observe(ref.current);
    return () => { observador.disconnect(); cancelAnimationFrame(frame); };
  }, [valor, duracao]);

  return <span ref={ref}>{formatarNumero(atual)}</span>;
}

// Etiqueta amarela para conteúdo que ainda não é real. Por omissão segue o
// interruptor DADOS_DE_EXEMPLO dos números; outras secções passam `mostrar`.
export function EtiquetaExemplo({ escuro = false, texto = 'Valores de exemplo', mostrar = DADOS_DE_EXEMPLO }) {
  if (!mostrar) return null;
  return (
    <span className={`hero-v__exemplo${escuro ? ' hero-v__exemplo--escuro' : ''}`}>
      {texto}
    </span>
  );
}

export function IconeWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="M4.5 19.5l1.1-3.6A8 8 0 1 1 8.4 18.6l-3.9.9Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
      <path d="M9 9.2c.2-.6.6-.7.9-.7h.4c.2 0 .3.1.4.3l.6 1.4c.1.2 0 .4-.1.5l-.4.5c.4.9 1.1 1.6 2 2l.5-.4c.1-.1.3-.2.5-.1l1.4.6c.2.1.3.2.3.4v.4c0 .3-.1.7-.7.9-.9.3-2.6 0-4.1-1.5S8.7 10.1 9 9.2Z" fill="currentColor" />
    </svg>
  );
}

export function IconeComunidade() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.9" />
      <path d="M3 19c.6-3.2 3-5 6-5s5.4 1.8 6 5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M16.5 14.2c2.4.2 4 1.7 4.5 4.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

// Os dois botões que substituem o "Inscrever-me" (ESP-02).
export function BotoesContacto({ claro = false, centrado = false }) {
  const whatsapp = whatsappCom(MENSAGEM_WHATSAPP_HERO);
  return (
    <div className={`hero-v__botoes${centrado ? ' hero-v__botoes--centro' : ''}`}>
      <ComMarcador
        esp="ESP-02"
        balao="direita"
        texto={`Substitui "Inscrever-me agora gratuitamente". Abre o WhatsApp da equipa (${CONTACTO.telefoneLegivel}) com uma mensagem já escrita.`}
      >
        <a href={whatsapp} target="_blank" rel="noreferrer" className="btn hero-v__btn-whatsapp">
          <IconeWhatsApp /> Falar no WhatsApp
        </a>
      </ComMarcador>
      <ComMarcador
        esp="ESP-02"
        balao="direita"
        texto="Leva à MUKANDA Community (Comunidade do WhatsApp). Link a colocar em config/contactos.js; vazio, abre o WhatsApp a pedir a entrada."
      >
        <a
          href={linkComunidade()}
          target="_blank"
          rel="noreferrer"
          className={`btn ${claro ? 'hero-v__btn-claro' : 'btn-outline'} hero-v__btn-comunidade`}
        >
          <IconeComunidade /> Entrar na comunidade
        </a>
      </ComMarcador>
    </div>
  );
}
