// Ícones das redes sociais (ESP-33, redesenhados na ESP-37).
//
// Desenhados aqui dentro, em SVG, e não descarregados de uma biblioteca de
// ícones: são quatro, não mudam, e uma biblioteca inteira para isto obrigaria
// o visitante a descarregar mais do que o site precisa.
//
// ── O que correu mal à primeira ────────────────────────────────────────────
// Cada ícone veio do seu lado com o seu próprio enquadramento e o seu próprio
// peso. O Facebook e o LinkedIn eram marcas CHEIAS que ocupavam a caixa de
// ponta a ponta; o Instagram e o TikTok eram desenhos finos e mais pequenos.
// Lado a lado, dentro de botões redondos, os dois cheios liam-se como manchas
// escuras e os outros dois pareciam apagados.
//
// ── As regras que os quatro seguem agora ───────────────────────────────────
//   1. A MESMA CAIXA. Todos desenhados em 24×24, com a marca entre 2 e 22 —
//      duas unidades de margem de cada lado.
//   2. O MESMO PESO. Quem tem contentor (Instagram, Facebook, LinkedIn)
//      desenha-o como contorno de 2 unidades de espessura, e a marca de
//      dentro é cheia. O TikTok não tem contentor: é só a marca.
//   3. A MESMA COR. Tudo em `currentColor`, para o mesmo ícone servir no
//      rodapé e na página de contactos sem existir duas vezes.
//
// Levam `aria-hidden`: quem usa leitor de ecrã ouve o nome da rede escrito no
// link, que é texto a sério — o ícone não tem nada a acrescentar.

const CAIXA = { viewBox: '0 0 24 24', width: 20, height: 20, 'aria-hidden': true };

// Espessura única dos contornos. O contorno é desenhado ao meio da linha, por
// isso um rectângulo de 3 a 21 com espessura 2 ocupa exactamente de 2 a 22.
const CONTORNO = { fill: 'none', stroke: 'currentColor', strokeWidth: 2 };

function Instagram() {
  return (
    <svg {...CAIXA}>
      <rect x="3" y="3" width="18" height="18" rx="5" {...CONTORNO} />
      <circle cx="12" cy="12" r="3.6" {...CONTORNO} />
      <circle cx="16.9" cy="7.1" r="1.25" fill="currentColor" />
    </svg>
  );
}

function Facebook() {
  return (
    <svg {...CAIXA}>
      <circle cx="12" cy="12" r="9" {...CONTORNO} />
      <path
        fill="currentColor"
        d="M12.9 18.3v-5.4h1.8l.34-2.2H12.9V9.3c0-.63.2-1.06 1.1-1.06h1.14V6.28c-.2-.03-.87-.09-1.65-.09-1.63 0-2.75.99-2.75 2.82v1.69H8.9v2.2h1.84v5.4h2.16Z"
      />
    </svg>
  );
}

function TikTok() {
  return (
    <svg {...CAIXA}>
      <path
        fill="currentColor"
        d="M15.7 2.2h-2.9v12.9a2.35 2.35 0 1 1-1.95-2.31V9.7a5.6 5.6 0 1 0 4.85 5.55V9.5a7 7 0 0 0 3.85 1.25V7.9a4.1 4.1 0 0 1-3.85-4.1v-1.6Z"
      />
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg {...CAIXA}>
      <rect x="3" y="3" width="18" height="18" rx="5" {...CONTORNO} />
      <circle cx="7.5" cy="7.8" r="1.3" fill="currentColor" />
      <path
        fill="currentColor"
        d="M6.45 10.3h2.1v7.3h-2.1v-7.3Zm3.95 0h2v1h.03c.3-.56 1.03-1.15 2.12-1.15 2.27 0 2.69 1.45 2.69 3.36v4.09h-2.1v-3.63c0-.86-.02-1.97-1.2-1.97-1.2 0-1.38.93-1.38 1.9v3.7h-2.16v-7.3Z"
      />
    </svg>
  );
}

const ICONES = { instagram: Instagram, facebook: Facebook, tiktok: TikTok, linkedin: LinkedIn };

export default function IconeRede({ id }) {
  const Icone = ICONES[id];
  return Icone ? <Icone /> : null;
}
