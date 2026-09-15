// Camada de protótipo: notas para a equipa de desenvolvimento.
//
// Nada disto faz parte do site final. Serve para explicar, em cima do próprio
// ecrã, o que cada especificação pede. Um botão flutuante liga e desliga as
// notas; a escolha fica guardada no navegador de quem visita.
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ESPECIFICACOES } from './especificacoes';
import { NotasContext, useNotas } from './notasContexto';
import { VARIANTES_HERO, lerVarianteHero, guardarVarianteHero } from './varianteHero';
import './prototipo.css';

const CHAVE = 'mukanda-prototipo-notas';

function lerPreferencia() {
  try {
    const valor = localStorage.getItem(CHAVE);
    return valor === null ? true : valor === '1';
  } catch {
    return true;
  }
}

export function NotasProvider({ children }) {
  const [ativas, setAtivas] = useState(lerPreferencia);

  useEffect(() => {
    try { localStorage.setItem(CHAVE, ativas ? '1' : '0'); } catch { /* sem armazenamento */ }
  }, [ativas]);

  return (
    <NotasContext.Provider value={{ ativas, alternar: () => setAtivas((a) => !a) }}>
      {children}
    </NotasContext.Provider>
  );
}

// Bloco de nota, dentro do fluxo da página.
export function NotaDev({ esp, titulo, children }) {
  const { ativas } = useNotas();
  if (!ativas) return null;
  return (
    <aside className="nota-dev" aria-label={`Nota para desenvolvedores ${esp}`}>
      <div className="nota-dev__topo">
        <span className="nota-dev__esp">{esp}</span>
        <span className="nota-dev__rotulo">Nota para devs</span>
      </div>
      {titulo && <p className="nota-dev__titulo">{titulo}</p>}
      <div className="nota-dev__corpo">{children}</div>
    </aside>
  );
}

// Marcador numerado azul, colado ao sítio onde a especificação mudou algo.
// Mostra a explicação ao passar o rato ou ao focar com o teclado.
//   flutuante: fica sobre o canto do elemento (usar dentro de <ComMarcador>)
//   balao: 'esquerda' (por omissão) ou 'direita' — para onde abre a explicação
export function MarcadorEsp({ esp, texto, flutuante = false, balao = 'esquerda' }) {
  const { ativas } = useNotas();
  if (!ativas) return null;
  const classes = ['marcador-esp'];
  if (flutuante) classes.push('marcador-esp--flutuante');
  if (balao === 'direita') classes.push('marcador-esp--balao-direita');
  return (
    <span className={classes.join(' ')} tabIndex={0} aria-label={`${esp}: ${texto}`}>
      {esp.replace('ESP-', '')}
      <span className="marcador-esp__balao" role="tooltip">
        <b>{esp}</b> {texto}
      </span>
    </span>
  );
}

// Envolve um elemento (botão, cartão…) e coloca-lhe o marcador no canto.
export function ComMarcador({ esp, texto, balao, bloco = false, children }) {
  return (
    <span className={`marcador-ancora${bloco ? ' marcador-ancora--bloco' : ''}`}>
      {children}
      <MarcadorEsp esp={esp} texto={texto} balao={balao} flutuante />
    </span>
  );
}

// Barra flutuante do protótipo.
export function BarraPrototipo() {
  const { ativas, alternar } = useNotas();
  const { pathname } = useLocation();
  const [params, setParams] = useSearchParams();
  const variante = lerVarianteHero(params);

  const escolher = (id) => {
    guardarVarianteHero(id);
    const novos = new URLSearchParams(params);
    novos.set('hero', id);
    setParams(novos, { replace: true, preventScrollReset: true });
  };

  return (
    <div className="barra-prototipo" role="region" aria-label="Controlos do protótipo">
      <span className="barra-prototipo__selo">Protótipo</span>
      <button type="button" className="barra-prototipo__botao" onClick={alternar} aria-pressed={ativas}>
        <span className={`barra-prototipo__interruptor${ativas ? ' is-on' : ''}`} aria-hidden="true" />
        Notas {ativas ? 'ligadas' : 'desligadas'}
      </button>

      {/* ESP-02: escolher a proposta de hero, só na página inicial. */}
      {pathname === '/' && (
        <div className="barra-prototipo__variantes" role="group" aria-label="Proposta de hero">
          <span>Hero</span>
          {VARIANTES_HERO.map((v) => (
            <button
              key={v.id}
              type="button"
              title={v.nome}
              className={v.id === variante ? 'is-activa' : ''}
              aria-pressed={v.id === variante}
              onClick={() => escolher(v.id)}
            >
              {v.id.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {pathname !== '/especificacoes' && (
        <Link to="/especificacoes" className="barra-prototipo__link">
          Especificações ({ESPECIFICACOES.length})
        </Link>
      )}
    </div>
  );
}
