import { Link } from 'react-router-dom';
import './PainelEntrar.css';

const PERFIS = [
  {
    inicial: 'P',
    titulo: 'Professor',
    descricao: 'Escreve artigos e envia-os para revisão antes de serem publicados.',
  },
  {
    inicial: 'M',
    titulo: 'Marketing',
    descricao: 'Escreve e publica notícias. Escreve artigos, que seguem para revisão.',
  },
  {
    inicial: 'G',
    titulo: 'Gestor administrativo',
    descricao: 'Revê e publica notícias e artigos de toda a equipa.',
  },
  {
    inicial: 'C',
    titulo: 'CEO',
    descricao: 'Acesso total: escreve, revê, publica e retira qualquer conteúdo.',
  },
];

export default function PainelEntrar() {
  return (
    <main className="painel-entrar">
      <div className="painel-entrar__card">

        <div className="painel-entrar__marca">
          <img
            src="/logo-icon.png"
            alt=""
            className="painel-entrar__logo"
          />

          <div>
            <strong>MUKANDA PREPA</strong>
            <span>Painel de publicação</span>
          </div>
        </div>

        <div className="painel-entrar__cabecalho">
          <h1>Entrar no painel</h1>

          <span className="painel-entrar__badge">ⓘ</span>
        </div>

        <p className="painel-entrar__intro">
          Escolhe um perfil para experimentar o painel. Cada perfil tem
          permissões diferentes para escrever, rever e publicar notícias e
          artigos.
        </p>

        <div className="painel-entrar__perfis">
          {PERFIS.map((perfil) => (
            <Link
              to={`/painel/${perfil.titulo
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/\s+/g, '-')}`}
              className="painel-entrar__perfil"
              key={perfil.titulo}
            >
              <span className="painel-entrar__inicial">
                {perfil.inicial}
              </span>

              <span className="painel-entrar__perfil-texto">
                <strong>{perfil.titulo}</strong>
                <span>{perfil.descricao}</span>
              </span>

              <span className="painel-entrar__seta">→</span>
            </Link>
          ))}
        </div>

        <Link to="/" className="painel-entrar__voltar">
          ← Voltar ao site
        </Link>

      </div>
    </main>
  );
}