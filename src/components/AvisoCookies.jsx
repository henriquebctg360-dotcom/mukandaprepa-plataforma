// Aviso de cookies (ESP-39).
//
// Aparece uma vez, em baixo, e só existe porque o site passou a medir
// visitas com o Google Analytics — que guarda cookies no computador de quem
// visita. Antes disto o site não guardava nada de ninguém e não tinha nada
// a perguntar.
//
// ── O que este aviso não faz ───────────────────────────────────────────────
// Não é um daqueles avisos em que o botão de recusar está escondido, ou em
// que a medição já começou antes de a pessoa responder. Aqui:
//
//   - enquanto não houver resposta, NADA da Google é carregado;
//   - "Recusar" é um botão a sério, do mesmo tamanho e à mesma vista que
//     "Aceitar";
//   - a resposta fica no navegador da pessoa e não sai de lá.
//
// Se não houver identificador do Analytics configurado, o aviso nem aparece:
// não há nada para autorizar.
import { useState } from 'react';
import { GA_ID, lerConsentimento, guardarConsentimento } from '../config/analytics';
import './AvisoCookies.css';

export default function AvisoCookies() {
  const [respondido, setRespondido] = useState(() => lerConsentimento() !== null);

  if (!GA_ID || respondido) return null;

  const responder = (valor) => {
    guardarConsentimento(valor);
    setRespondido(true);
  };

  return (
    <div className="aviso-cookies" role="dialog" aria-label="Cookies de medição">
      <p className="aviso-cookies__texto">
        Usamos cookies para contar as visitas e perceber que páginas são mais
        procuradas. Só isso, e só com a tua autorização.
      </p>
      <div className="aviso-cookies__botoes">
        <button type="button" className="btn btn-outline" onClick={() => responder('nao')}>
          Recusar
        </button>
        <button type="button" className="btn btn-primary" onClick={() => responder('sim')}>
          Aceitar
        </button>
      </div>
    </div>
  );
}
