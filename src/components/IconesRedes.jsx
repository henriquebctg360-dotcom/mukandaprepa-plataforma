// Ícones das redes sociais (ESP-33).
//
// Desenhados aqui dentro, em SVG, e não descarregados de uma biblioteca de
// ícones: são quatro, não mudam, e uma biblioteca inteira para isto obrigaria
// o visitante a descarregar mais do que o site precisa.
//
// Todos partilham a mesma caixa de 24×24 e herdam a cor de quem os contém
// (`currentColor`), para o mesmo ícone servir no rodapé e na página de
// contactos sem ter de existir duas vezes.
//
// Levam `aria-hidden`: quem usa leitor de ecrã ouve o nome da rede escrito no
// link, que é texto a sério — o ícone não tem nada a acrescentar.

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <rect x="2.8" y="2.8" width="18.4" height="18.4" rx="5.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.25" fill="currentColor" />
    </svg>
  );
}

function Facebook() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.02 24 18.06 24 12.07Z"
      />
    </svg>
  );
}

function TikTok() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.5 2h-3.2v13.2a2.6 2.6 0 1 1-2.1-2.55V9.4a5.9 5.9 0 1 0 5.3 5.87V8.9a7.2 7.2 0 0 0 4.1 1.3V7A4.2 4.2 0 0 1 16.5 2Z"
      />
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
      />
    </svg>
  );
}

const ICONES = { instagram: Instagram, facebook: Facebook, tiktok: TikTok, linkedin: LinkedIn };

export default function IconeRede({ id }) {
  const Icone = ICONES[id];
  return Icone ? <Icone /> : null;
}
