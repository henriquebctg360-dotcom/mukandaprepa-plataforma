import { Link } from 'react-router-dom';
import { ARTIGOS_VISIVEIS } from '../config/artigos';
import './Footer.css';
import { CONTACTO } from '../config/contactos';
import Redes from './Redes';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          {/* Mesma composição do componente Brand da app: o ícone oficial
              ao lado do nome. O ficheiro é o mesmo dos dois lados. */}
          <div className="footer__logo">
            <img src="/logo-icon.png" alt="" width="256" height="256" className="footer__logo-img" />
            <span>MUKANDA PREPA</span>
          </div>
          <p className="footer__tagline">A melhor preparação para o acesso à universidade.</p>
        </div>

        <div className="footer__col">
          <h4>Siga-nos</h4>
          {/* Os endereços vivem em src/config/contactos.js (ESP-33). Estavam
              escritos aqui à mão, e repetidos noutro formato nas notícias. */}
          <Redes variante="icones" />
          <p className="footer__redes-nota">@mukandaprepa</p>
        </div>

        <div className="footer__col">
          <h4>
            Links úteis{' '}
          </h4>
          <Link to="/maratonas">Maratonas 2026</Link>
          <Link to="/aulas-online">Aulas Online 2026</Link>
          <Link to="/noticias">Notícias</Link>
          {ARTIGOS_VISIVEIS && <Link to="/artigos">Artigos</Link>}
          <Link to="/sobre">Sobre nós</Link>
          <Link to="/equipa">A Nossa Equipa</Link>
          <Link to="/missao">A Nossa Missão</Link>
          <Link to="/recursos">Recursos</Link>
        </div>

        <div className="footer__col">
          <h4>Contactos</h4>
          <p>Luanda, Angola</p>
          <a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a>
          <a href={CONTACTO.telefoneLink}>{CONTACTO.telefoneLegivel}</a>
          <a href={CONTACTO.whatsappLink} target="_blank" rel="noreferrer">
            WhatsApp: {CONTACTO.telefoneLegivel}
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 MUKANDA PREPA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
