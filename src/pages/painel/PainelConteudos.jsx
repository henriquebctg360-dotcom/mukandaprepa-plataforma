import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useOutletContext, useSearchParams } from 'react-router-dom';
import { useConteudos } from '../../prototipo/useConteudos';
import { guardarConteudo, removerConteudo, dataDeHoje } from '../../prototipo/conteudos';
import { ESTADOS, TIPOS, podeCriar, podeEditar, podePublicar, podeRemover } from '../../prototipo/painelPerfis';
import { MarcadorEsp } from '../../prototipo/NotasDev';

export default function PainelConteudos() {
  const { perfil } = useOutletContext();
  const [params] = useSearchParams();
  const { state, pathname, search } = useLocation();
  const navigate = useNavigate();
  // O aviso ("Publicado.", …) mostra-se uma vez: sai do histórico logo a seguir,
  // para não voltar a aparecer ao recarregar a página.
  const [aviso] = useState(state?.aviso || '');
  useEffect(() => {
    if (state?.aviso) navigate(pathname + search, { replace: true, state: null });
  }, [state, pathname, search, navigate]);
  const tipo = TIPOS[params.get('tipo')] ? params.get('tipo') : 'noticia';
  const info = TIPOS[tipo];

  const [filtro, setFiltro] = useState('todos');
  const [procura, setProcura] = useState('');

  const doTipo = useConteudos().filter((c) => c.tipo === tipo);
  const contagem = (estado) => doTipo.filter((c) => c.estado === estado).length;
  const lista = doTipo
    .filter((c) => filtro === 'todos' || c.estado === filtro)
    .filter((c) => !procura || c.titulo.toLowerCase().includes(procura.toLowerCase()));

  const publicaTipo = podePublicar(perfil, tipo);
  const aRever = contagem('revisao');

  const publicar = (item) => guardarConteudo({ ...item, estado: 'publicado', data: dataDeHoje() });
  const remover = (item) => {
    if (window.confirm(`Retirar “${item.titulo}” do painel e do site?`)) removerConteudo(item.id);
  };

  return (
    <div className="painel-pagina">
      <header className="painel-pagina__topo">
        <div>
          <h1>{info.plural}</h1>
          <p>
            Tudo o que é publicado aqui aparece em <a href={info.rota} target="_blank" rel="noreferrer">{info.rota}</a> e
            na página inicial.
          </p>
        </div>
        {podeCriar(perfil, tipo) ? (
          <Link to={`/painel/novo/${tipo}`} className="btn btn-primary">+ {info.nome === 'Notícia' ? 'Nova notícia' : 'Novo artigo'}</Link>
        ) : (
          <span className="painel-aviso-perm">O perfil {perfil.nome} não cria {info.plural.toLowerCase()}.</span>
        )}
      </header>

      {aviso && <div className="painel-toast" role="status">{aviso}</div>}

      {publicaTipo && aRever > 0 && (
        <button type="button" className="painel-revisao" onClick={() => setFiltro('revisao')}>
          <strong>{aRever}</strong> {aRever === 1 ? 'conteúdo à espera' : 'conteúdos à espera'} da tua revisão →
        </button>
      )}

      <div className="painel-contadores">
        {Object.entries(ESTADOS).map(([id, e]) => (
          <button
            key={id}
            type="button"
            className={`painel-contador painel-contador--${e.cor}${filtro === id ? ' is-activo' : ''}`}
            onClick={() => setFiltro(filtro === id ? 'todos' : id)}
          >
            <strong>{contagem(id)}</strong>
            <span>{e.nome}</span>
          </button>
        ))}
        <MarcadorEsp
          esp="ESP-05"
          texto="Fluxo: Rascunho → Em revisão → Publicado. Quem não pode publicar envia para revisão; Gestor administrativo e CEO (e Marketing, nas notícias) aprovam."
        />
      </div>

      <div className="painel-filtros">
        <div className="painel-chips">
          {['todos', ...Object.keys(ESTADOS)].map((id) => (
            <button key={id} type="button" className={filtro === id ? 'is-activo' : ''} onClick={() => setFiltro(id)}>
              {id === 'todos' ? 'Todos' : ESTADOS[id].nome}
            </button>
          ))}
        </div>
        <input
          type="search"
          placeholder={`Procurar ${info.plural.toLowerCase()}…`}
          value={procura}
          onChange={(e) => setProcura(e.target.value)}
        />
      </div>

      <div className="painel-tabela">
        {lista.length === 0 ? (
          <p className="painel-vazio">Nada para mostrar com estes filtros.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Estado</th>
                <th>Autor</th>
                <th>Data</th>
                <th aria-label="Acções" />
              </tr>
            </thead>
            <tbody>
              {lista.map((c) => (
                <tr key={c.id}>
                  <td className="painel-tabela__titulo">
                    <strong>{c.titulo}</strong>
                    {tipo === 'artigo' && <span>{c.materia} · {c.nivel}</span>}
                  </td>
                  <td><span className={`painel-estado painel-estado--${ESTADOS[c.estado].cor}`}>{ESTADOS[c.estado].nome}</span></td>
                  <td>{c.autor?.nome}</td>
                  <td className="painel-tabela__data">{c.data}</td>
                  <td className="painel-tabela__accoes">
                    {c.estado === 'revisao' && publicaTipo && (
                      <button type="button" className="is-principal" onClick={() => publicar(c)}>Aprovar e publicar</button>
                    )}
                    {c.estado === 'publicado' && (
                      <a href={`${info.rota}/${c.id}`} target="_blank" rel="noreferrer">Ver</a>
                    )}
                    {podeEditar(perfil, c) && <Link to={`/painel/editar/${c.id}`}>Editar</Link>}
                    {podeRemover(perfil) && (
                      <button type="button" className="is-perigo" onClick={() => remover(c)}>Remover</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
