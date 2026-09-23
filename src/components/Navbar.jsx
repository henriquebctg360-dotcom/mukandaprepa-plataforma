import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { APP_URL } from '../config/appLinks';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Fecha o dropdown quando clicamos fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar__dropdown')) {
        setBlogOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const fecharMenus = () => {
    setBlogOpen(false);
    setMenuAberto(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar__logo"
          onClick={fecharMenus}
        >
          <img
            src="/logo-icon.png"
            alt=""
            className="navbar__logo-img"
          />

          <span className="navbar__logo-nome">
            MUKANDA<br />
            PREPA
          </span>
        </Link>

        {/* MENU */}
        <nav
          className={`navbar__links ${
            menuAberto ? 'navbar__links--aberto' : ''
          }`}
        >
          <Link to="/" onClick={fecharMenus}>
            Home
          </Link>

          <Link to="/sobre" onClick={fecharMenus}>
            Sobre
          </Link>

          {/* BLOG */}
          <div className="navbar__dropdown">

            <button
              type="button"
              className={`navbar__dropdown-trigger ${
                blogOpen ? 'navbar__dropdown-trigger--aberto' : ''
              }`}
              onClick={(event) => {
                event.stopPropagation();
                setBlogOpen((valor) => !valor);
              }}
              aria-expanded={blogOpen}
              aria-haspopup="true"
            >
              <span>Blog</span>
              <span
                className={`navbar__dropdown-arrow ${
                  blogOpen ? 'navbar__dropdown-arrow--aberto' : ''
                }`}
              >
                ▾
              </span>
            </button>

            {blogOpen && (
              <div className="navbar__megamenu">

                <Link
                  to="/maratonas"
                  onClick={fecharMenus}
                >
                  Maratonas 2026
                </Link>

                <Link
                  to="/aulas-online"
                  onClick={fecharMenus}
                >
                  Aulas Online 2026
                </Link>

                <Link
                  to="/noticias"
                  onClick={fecharMenus}
                >
                  Notícias
                </Link>

               <Link to="/artigos">Artigos</Link>

              </div>
            )}

          </div>

          <Link to="/contactos" onClick={fecharMenus}>
            Contactos
          </Link>
        </nav>

        {/* BOTÃO APP */}
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

        {/* MENU MOBILE */}
        <button
          type="button"
          className="navbar__toggle"
          aria-label={
            menuAberto
              ? 'Fechar menu'
              : 'Abrir menu'
          }
          onClick={() => {
            setMenuAberto((valor) => !valor);
            setBlogOpen(false);
          }}
        >
          {menuAberto ? '✕' : '☰'}
        </button>

      </div>
    </header>
  );
}