import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_URL } from '../config/appLinks';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
 

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        <Link to="/" className="navbar__logo">
          <img src="/logo-icon.png" alt="" className="navbar__logo-img" />
          <span className="navbar__logo-nome">
            MUKANDA<br />PREPA
          </span>
        </Link>

        <nav className={`navbar__links ${menuAberto ? 'navbar__links--aberto' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>

          <div
            className="navbar__dropdown"
            onMouseEnter={() => setBlogOpen(true)}
            onMouseLeave={() => setBlogOpen(false)}
          >
            <button
              className="navbar__dropdown-trigger"
              onClick={() => setBlogOpen((v) => !v)}
            >
              Blog <span>▾</span>
            </button>

            {blogOpen && (
              <div className="navbar__megamenu">
                <Link to="/maratonas">Maratonas 2026</Link>
                <Link to="/aulas-online">Aulas Online 2026</Link>
                <Link to="/noticias">Notícias</Link>
                <Link to="/blog">Artigos</Link>
              </div>
            )}
          </div>

          <Link to="/contactos">Contactos</Link>
        </nav>

        <div className="navbar__actions">
          <a
            href={APP_URL}
            className="navbar__app-btn"
            target="_blank"
            rel="noreferrer"
          >
            Entrar na app <span>→</span>
          </a>
        </div>

        <button
          className="navbar__toggle"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuAberto((v) => !v)}
        >
          {menuAberto ? '✕' : '☰'}
        </button>

      </div>
    </header>
  );
}
