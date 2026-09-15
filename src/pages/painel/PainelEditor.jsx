import { useState } from 'react';
import { Link, Navigate, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useConteudos } from '../../prototipo/useConteudos';
import { guardarConteudo, novoId, dataDeHoje } from '../../prototipo/conteudos';
import { ESTADOS, TIPOS, podeCriar, podeEditar, podePublicar } from '../../prototipo/painelPerfis';
import { MATERIAS, NIVEIS } from '../../config/artigos';
import { MarcadorEsp } from '../../prototipo/NotasDev';

const CORES = [
  { valor: '#FB6D1D', nome: 'Laranja' },
  { valor: '#1742E7', nome: 'Azul' },
  { valor: '#14141F', nome: 'Escuro' },
  { valor: '#16A34A', nome: 'Verde' },
];

const LIMITE_RESUMO = 220;

export default function PainelEditor() {
  const { perfil } = useOutletContext();
  const { id, tipo: tipoNovo } = useParams();
  const navigate = useNavigate();
  const existente = useConteudos().find((c) => c.id === id);

  const tipo = existente ? existente.tipo : tipoNovo;
  const [form, setForm] = useState(() => existente || {
    tipo,
    titulo: '',
    resumo: '',
    corpo: '',
    cor: CORES[0].valor,
    materia: MATERIAS[0],
    nivel: NIVEIS[0],
    estado: 'rascunho',
    autor: { nome: perfil.nome, perfil: perfil.id },
  });
  const [erro, setErro] = useState('');

  if (!TIPOS[tipo]) return <Navigate to="/painel" replace />;
  if (id && !existente) return <Navigate to="/painel" replace />;
  const permitido = existente ? podeEditar(perfil, existente) : podeCriar(perfil, tipo);
  if (!permitido) return <Navigate to={`/painel?tipo=${tipo}`} replace />;

  const info = TIPOS[tipo];
  const publica = podePublicar(perfil, tipo);
  const mudar = (campo) => (e) => setForm({ ...form, [campo]: e.target.value });

  const gravar = (estado) => {
    if (!form.titulo.trim() || !form.resumo.trim()) {
      setErro('O título e o resumo são obrigatórios.');
      return;
    }
    const item = {
      ...form,
      id: form.id || novoId(tipo, form.titulo),
      titulo: form.titulo.trim(),
      resumo: form.resumo.trim(),
      estado,
      exemplo: false,
      data: estado === 'publicado' && form.estado !== 'publicado' ? dataDeHoje() : form.data || dataDeHoje(),
    };
    guardarConteudo(item);
    const avisos = {
      rascunho: 'Rascunho guardado.',
      revisao: 'Enviado para revisão. Quem pode publicar vai ver o aviso no painel.',
      publicado: `Publicado. Já aparece em ${info.rota} e na página inicial.`,
    };
    navigate(`/painel?tipo=${tipo}`, { state: { aviso: avisos[estado] } });
  };

  return (
    <div className="painel-pagina">
      <header className="painel-pagina__topo">
        <div>
          <Link to={`/painel?tipo=${tipo}`} className="painel-voltar">← {info.plural}</Link>
          <h1>{existente ? `Editar ${info.nome.toLowerCase()}` : info.nome === 'Notícia' ? 'Nova notícia' : 'Novo artigo'}</h1>
        </div>
      </header>

      <div className="painel-editor">
        <div className="painel-editor__form">
          <label>
            Título *
            <input value={form.titulo} onChange={mudar('titulo')} placeholder={tipo === 'noticia' ? 'Ex.: Maratonas regressam em Outubro' : 'Ex.: Como resolver inequações sem erros'} />
          </label>

          <label>
            Resumo *
            <textarea rows={3} maxLength={LIMITE_RESUMO} value={form.resumo} onChange={mudar('resumo')} placeholder="Uma ou duas frases. Aparece nos cartões da página inicial." />
            <small>{form.resumo.length}/{LIMITE_RESUMO}</small>
          </label>

          {tipo === 'artigo' ? (
            <div className="painel-editor__linha">
              <label>
                Matéria
                <select value={form.materia} onChange={mudar('materia')}>
                  {MATERIAS.map((m) => <option key={m}>{m}</option>)}
                </select>
              </label>
              <label>
                Nível
                <select value={form.nivel} onChange={mudar('nivel')}>
                  {NIVEIS.map((n) => <option key={n}>{n}</option>)}
                </select>
              </label>
            </div>
          ) : (
            <fieldset className="painel-editor__cores">
              <legend>Cor de destaque</legend>
              {CORES.map((c) => (
                <label key={c.valor} className={form.cor === c.valor ? 'is-activa' : ''}>
                  <input type="radio" name="cor" value={c.valor} checked={form.cor === c.valor} onChange={mudar('cor')} />
                  <span style={{ background: c.valor }} aria-hidden="true" />
                  {c.nome}
                </label>
              ))}
            </fieldset>
          )}

          <label>
            <span className="painel-editor__rotulo">
              Texto completo
              <MarcadorEsp
                esp="ESP-05"
                balao="direita"
                texto="Protótipo: texto simples, parágrafos separados por uma linha em branco. Na versão real: editor com negrito, listas, links e imagens."
              />
            </span>
            <textarea rows={12} value={form.corpo} onChange={mudar('corpo')} placeholder={'Escreve aqui o texto.\n\nDeixa uma linha em branco entre parágrafos.'} />
          </label>

          <div className="painel-editor__imagem" aria-disabled="true">
            <strong>Imagem de capa</strong>
            <span>Na versão real: carregar uma imagem (JPG ou PNG). Indisponível no protótipo.</span>
          </div>
        </div>

        <aside className="painel-editor__lateral">
          <div className="painel-caixa">
            <span className="painel-caixa__titulo">Estado</span>
            <span className={`painel-estado painel-estado--${ESTADOS[form.estado].cor}`}>{ESTADOS[form.estado].nome}</span>
            <p className="painel-caixa__nota">Autor: {form.autor?.nome}</p>

            {erro && <p className="painel-erro" role="alert">{erro}</p>}

            <div className="painel-caixa__botoes">
              {publica ? (
                <button type="button" className="btn btn-primary" onClick={() => gravar('publicado')}>
                  {form.estado === 'publicado' ? 'Guardar alterações' : 'Publicar'}
                </button>
              ) : (
                <button type="button" className="btn btn-primary" onClick={() => gravar('revisao')}>Enviar para revisão</button>
              )}
              {form.estado !== 'publicado' && (
                <button type="button" className="btn btn-outline" onClick={() => gravar('rascunho')}>Guardar rascunho</button>
              )}
              {form.estado === 'publicado' && publica && (
                <button type="button" className="painel-link-perigo" onClick={() => gravar('rascunho')}>Retirar do site (voltar a rascunho)</button>
              )}
            </div>
            {!publica && (
              <p className="painel-caixa__nota">
                O perfil {perfil.nome} não publica {info.plural.toLowerCase()} directamente: o Gestor administrativo ou o CEO aprovam.
              </p>
            )}
          </div>

          <div className="painel-caixa">
            <span className="painel-caixa__titulo">Pré-visualização do cartão</span>
            {tipo === 'noticia' ? (
              <div className="home-noticia painel-previa">
                <div className="home-noticia__faixa" style={{ background: form.cor }} />
                <div className="home-noticia__corpo">
                  <time>{form.data || dataDeHoje()}</time>
                  <h3>{form.titulo || 'Título da notícia'}</h3>
                  <p>{form.resumo || 'O resumo aparece aqui.'}</p>
                </div>
              </div>
            ) : (
              <div className="home-artigo painel-previa">
                <div className="home-artigo__tags">
                  <span className="home-pill home-pill--azul">{form.materia}</span>
                  <span className="home-pill">{form.nivel}</span>
                </div>
                <h3>{form.titulo || 'Título do artigo'}</h3>
                <time>{form.data || dataDeHoje()}</time>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
