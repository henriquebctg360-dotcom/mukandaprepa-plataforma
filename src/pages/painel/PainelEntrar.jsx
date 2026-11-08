import { useNavigate } from 'react-router-dom';
import './painel.css';
import { PERFIS, iniciarSessao } from '../../prototipo/painelPerfis';
import { BarraPrototipo, MarcadorEsp } from '../../prototipo/NotasDev';

// ESP-05 — entrada no painel. No protótipo escolhe-se o perfil para ver o que
// cada pessoa da equipa pode fazer. Na versão real: conta MUKANDA com email e
// palavra-passe, e o perfil vem da própria conta.
export default function PainelEntrar() {
  const navigate = useNavigate();

  const entrar = (id) => {
    iniciarSessao(id);
    navigate('/painel');
  };

  return (
    <div className="painel-entrar">
      <div className="painel-entrar__caixa">
        <div className="painel-marca">
          <img src="/logo-icon.png" alt="" />
          <span>MUKANDA PREPA<small>Painel de publicação</small></span>
        </div>

        <h1>
          Entrar no painel
          <MarcadorEsp
            esp="ESP-05"
            balao="direita"
            texto="Protótipo: sem palavra-passe, escolhe-se o perfil. Na versão real, cada pessoa entra com a sua conta e o perfil (e as permissões) vêm da conta."
          />
        </h1>
        <p className="painel-entrar__texto">
          Escolhe um perfil para experimentar o painel. Cada perfil tem permissões
          diferentes para escrever, rever e publicar notícias e artigos.
        </p>

        <div className="painel-entrar__perfis">
          {PERFIS.map((p) => (
            <button key={p.id} type="button" className="painel-perfil" onClick={() => entrar(p.id)}>
              <span className="painel-perfil__inicial" aria-hidden="true">{p.nome[0]}</span>
              <span className="painel-perfil__texto">
                <strong>{p.nome}</strong>
                <span>{p.descricao}</span>
              </span>
              <span aria-hidden="true">→</span>
            </button>
          ))}
        </div>

        <a href="/" className="painel-entrar__voltar">← Voltar ao site</a>
      </div>
      <BarraPrototipo />
    </div>
  );
}
