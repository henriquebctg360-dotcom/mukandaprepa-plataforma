import { Link, Navigate, NavLink, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import './painel.css';
import { TIPOS, lerSessao, terminarSessao } from '../../prototipo/painelPerfis';
import { reporConteudos } from '../../prototipo/conteudos';
import { BarraPrototipo, MarcadorEsp } from '../../prototipo/NotasDev';

// Conteúdos que o painel vai gerir mais tarde (ainda editados no código).
const BREVEMENTE = ['Perguntas frequentes', 'Testemunhos', 'Parceiros', 'Recursos'];

export default function PainelLayout() {
  const perfil = lerSessao();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { pathname } = useLocation();
  if (!perfil) return <Navigate to="/painel/entrar" replace />;

  // Na lista vem de ?tipo=; no editor, do endereço (novo/artigo, editar/artigo-…).
  const tipoActivo = params.get('tipo') || (pathname.includes('artigo') ? 'artigo' : 'noticia');

  const sair = () => {
    terminarSessao();
    navigate('/painel/entrar');
  };

  const repor = () => {
    if (window.confirm('Apagar tudo o que foi criado ou editado no painel neste navegador e voltar ao conteúdo original do protótipo?')) {
      reporConteudos();
    }
  };

  return (
    <div className="painel">
      <aside className="painel__lateral">
        <Link to="/painel" className="painel-marca painel-marca--escura">
          <img src="/logo-icon-branco.png" alt="" />
          <span>MUKANDA PREPA<small>Painel de publicação</small></span>
        </Link>

        <nav className="painel__menu">
          <span className="painel__menu-titulo">Conteúdos</span>
          {Object.entries(TIPOS).map(([id, t]) => (
            <NavLink
              key={id}
              to={`/painel?tipo=${id}`}
              className={() => `painel__menu-link${tipoActivo === id ? ' is-activo' : ''}`}
            >
              {t.plural}
            </NavLink>
          ))}

          <span className="painel__menu-titulo">
            Brevemente
            <MarcadorEsp
              esp="ESP-05"
              balao="direita"
              texto="Fase seguinte do painel: gerir também as perguntas frequentes, testemunhos, parceiros e recursos da página inicial, sem mexer no código."
            />
          </span>
          {BREVEMENTE.map((b) => (
            <span key={b} className="painel__menu-link is-inactivo">{b}</span>
          ))}
        </nav>

        <div className="painel__sessao">
          <div className="painel__perfil">
            <span className="painel-perfil__inicial" aria-hidden="true">{perfil.nome[0]}</span>
            <span>
              <strong>{perfil.nome}</strong>
              <small>Perfil de demonstração</small>
            </span>
          </div>
          <div className="painel__sessao-accoes">
            <a href="/" target="_blank" rel="noreferrer">Ver site ↗</a>
            <button type="button" onClick={sair}>Trocar perfil</button>
          </div>
          <button type="button" className="painel__repor" onClick={repor}>Repor conteúdos do protótipo</button>
        </div>
      </aside>

      <main className="painel__principal">
        <Outlet context={{ perfil }} />
      </main>

      <BarraPrototipo />
    </div>
  );
}
