import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ARTIGOS_VISIVEIS } from '../config/artigos';
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
          <img src="/logo-icon.png" alt="" width="64" height="64" className="navbar__logo-img" />
          <span className="navbar__logo-nome">MUKANDA<br />PREPA</span>
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
            {blogOpen && (
              <div className="navbar__megamenu">
                <Link to="/maratonas">Maratonas 2026</Link>
                <Link to="/aulas-online">Aulas Online 2026</Link>
                <Link to="/noticias">Not&iacute;cias</Link>
                {ARTIGOS_VISIVEIS && <Link to="/artigos">Artigos</Link>}
              </div>
            )}
          </div>

          <Link to="/contactos">Contactos</Link>
        </nav>

        {/* ESP-21: saiu o botão "Entrar na app". Enquanto a app estiver em
            manutenção não se anuncia na barra — a página inicial e a secção
            "Ponto de situação" explicam a situação e levam lá quem quiser
            saber mais. Quando a app mobile sair, entra aqui um botão novo
            com as ligações às lojas. */}
        <div className="navbar__actions">
        </div>
      </div>
    </header>
  );
}
