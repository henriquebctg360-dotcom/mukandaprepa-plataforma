import { Link } from 'react-router-dom';
import './Footer.css';
import { CONTACTO } from '../config/contactos';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">

        <div className="footer__col">
          <div className="footer__logo">
            <img
              src="/logo-icon.png"
              alt=""
              className="footer__logo-img"
            />
            <span>MUKANDA PREPA</span>
          </div>

          <p className="footer__tagline">
            A melhor preparação para o acesso à universidade.
          </p>
        </div>

        <div className="footer__col">
          <h4>Siga-nos</h4>

          <a
            href="https://www.linkedin.com/company/mukanda-prepa/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61591268696768"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>

          <a
            href="https://www.instagram.com/mukandaprepa/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@mukandaprepa"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>
        </div>

        <div className="footer__col">
          <h4>Links úteis</h4>

          <Link to="/maratonas">
            Maratonas 2026
          </Link>

          <Link to="/aulas-online">
            Aulas Online 2026
          </Link>

          <Link to="/noticias">
            Notícias
          </Link>

          <Link to="/artigos">
            Artigos
          </Link>

          <Link to="/sobre">
            Sobre nós
          </Link>

          <Link to="/missao">
            A Nossa Missão
          </Link>

          <Link to="/recursos">
            Recursos
          </Link>
<Link to="/painel/entrar">
  Painel da equipa
</Link>
        </div>

        <div className="footer__col">
          <h4>Contactos</h4>

          <p>Luanda, Angola</p>

          <a href={`mailto:${CONTACTO.email}`}>
            {CONTACTO.email}
          </a>

          <a href={CONTACTO.telefoneLink}>
            {CONTACTO.telefoneLegivel}
          </a>

          <a
            href={CONTACTO.whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp: {CONTACTO.telefoneLegivel}
          </a>
        </div>

      </div>

      <div className="footer__bottom">
        <p>
          © 2026 MUKANDA PREPA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}