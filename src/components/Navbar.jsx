import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROTA_ENTRAR_NA_APP } from '../config/appLinks';
import { MarcadorEsp } from '../prototipo/NotasDev';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mudar de página fecha o menu; senão ficava aberto por cima do conteúdo.
  useEffect(() => { setMenuAberto(false); }, [pathname]);

  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') setMenuAberto(false); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Mesma composição do componente Brand da app: o ícone oficial ao
            lado do nome em duas linhas. Antes era uma imagem única (01.png)
            de 1920x720, que a 36px de altura deixava o nome quase ilegível. */}
        <Link to="/" className="navbar__logo">
          <img src="/logo-icon.png" alt="" className="navbar__logo-img" />
          <span className="navbar__logo-nome">MUKANDA<br />PREPA</span>
        </Link>

        {/* ESP-01: um único botão "Entrar na app" substitui Login e
            Inscrever-me. Em telemóvel fica à vista na barra, ao lado do menu. */}
        <Link to={ROTA_ENTRAR_NA_APP} className="navbar__app-movel">
          Entrar na app
        </Link>

        {/* Abaixo de 1023px os links eram apenas escondidos e não havia nada
            no lugar — o site ficava sem navegação em telemóvel e tablet. */}
        <button
          className="navbar__toggle"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((a) => !a)}
        >
          {menuAberto ? '\u2715' : '\u2630'}
        </button>

        <nav className={`navbar__links${menuAberto ? ' navbar__links--aberto' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>

          <div
            className="navbar__dropdown"
            onMouseEnter={() => setBlogOpen(true)}
            onMouseLeave={() => setBlogOpen(false)}
          >
            <Link to="/blog" className="navbar__dropdown-trigger">
              Blog <span className="navbar__caret">&#9662;</span>
            </Link>
            <MarcadorEsp
              esp="ESP-04"
              balao="direita"
              texto="Menu: saiu “Planos & Preços” (tudo foi gratuito; volta quando houver novos planos). Notícias e Artigos voltaram ao submenu do Blog."
            />
            {blogOpen && (
              <div className="navbar__megamenu">
                <Link to="/maratonas">Maratonas 2026</Link>
                <Link to="/aulas-online">Aulas Online 2026</Link>
                <Link to="/noticias">Not&iacute;cias</Link>
                <Link to="/artigos">Artigos</Link>
              </div>
            )}
          </div>

          <Link to="/contactos">Contactos</Link>
        </nav>

        <div className="navbar__actions">
          <Link to={ROTA_ENTRAR_NA_APP} className="btn btn-primary navbar__app">
            Entrar na app
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <MarcadorEsp
            esp="ESP-01"
            texto="Substitui os antigos botões Login e Inscrever-me. Leva à página /entrar-na-app, que informa que a app web está em manutenção."
          />
        </div>
      </div>
    </header>
  );
}
