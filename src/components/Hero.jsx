import './Hero.css';

const WHATSAPP_URL =
  'https://wa.me/244945370874?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20MUKANDA%20PREPA%20e%20tenho%20uma%20pergunta.';

const COMMUNITY_URL =
  'https://wa.me/244945370874?text=Ol%C3%A1!%20Quero%20entrar%20na%20MUKANDA%20Community.';

function WhatsAppIcon() {
  return (
    <svg
      className="hero__icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20.4 3.6A11.83 11.83 0 0 0 12.02 0C5.48 0 .16 5.32.16 11.86c0 2.09.55 4.13 1.59 5.93L.06 24l6.36-1.67a11.85 11.85 0 0 0 5.6 1.43h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.15-3.49-8.3ZM12.03 21.7h-.01a9.85 9.85 0 0 1-5.03-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.84 9.84 0 1 1 8.39 4.65Zm5.4-7.38c-.3-.15-1.78-.88-2.05-.98-.28-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg
      className="hero__icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="10"
        cy="8"
        r="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16.5 11a3 3 0 1 0 0-6M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">

        <div className="hero__text">

          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Fase gratuita 2026 · 20 Ago – 15 Set 2026
          </div>

          <h1>
            A fase gratuita
            <br />
            em números
          </h1>

          <p className="hero__subtitle">
            Durante a fase gratuita, estudantes de todo o país treinaram
            com as maratonas MUKANDA e as aulas de correcção ao vivo.
            Obrigado a todos os que fizeram parte. Tens dúvidas ou queres
            saber o que vem a seguir? Fala connosco.
          </p>

          <div className="hero__actions">

            <a
              href={WHATSAPP_URL}
              className="btn btn-primary hero__cta"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              <span>Falar no WhatsApp</span>
            </a>

            <a
              href={COMMUNITY_URL}
              className="btn hero__community"
              target="_blank"
              rel="noreferrer"
            >
              <CommunityIcon />
              <span>Entrar na comunidade</span>
            </a>

          </div>
        </div>

        <div className="hero__illustration">
          <img
            src="/home-hero.webp"
            alt="Estudante da MUKANDA PREPA"
            width="1300"
            height="813"
            fetchPriority="high"
          />
        </div>

      </div>

      <div className="container hero__stats-wrapper">

        <div className="hero__stats">

          <div className="hero__stats-top">
            <span>
              Fase gratuita 2026 · 20 Ago – 15 Set 2026
            </span>

            <div className="hero__stats-label">
              VALORES DE EXEMPLO
            </div>
          </div>

          <div className="hero__stats-grid">

            <div className="hero__stat">
              <strong>147</strong>
              <span>estudantes inscritos</span>
            </div>

            <div className="hero__stat">
              <strong>22</strong>
              <span>maratonas realizadas</span>
            </div>

            <div className="hero__stat">
              <strong>103</strong>
              <span>participações em maratonas</span>
            </div>

            <div className="hero__stat">
              <strong>12</strong>
              <span>aulas de correcção ao vivo</span>
            </div>

          </div>

          <div className="hero__stats-footer">
            100% gratuito · 5 disciplinas · 2 áreas de acesso
          </div>

        </div>

      </div>
    </section>
  );
}