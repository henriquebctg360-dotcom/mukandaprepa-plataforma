import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './Artigos.css';
import { MATERIAS, NIVEIS } from '../config/artigos';
import { usePublicados } from '../prototipo/useConteudos';

const ITEMS_POR_PAGINA = 6;

// ESP-05: os artigos passam a vir do painel de publicação (no protótipo,
// config/artigos.js + o que for publicado no painel).

export default function Artigos() {
  const [materia, setMateria] = useState('');
  const [nivel, setNivel] = useState('');
  const [pagina, setPagina] = useState(1);
  const artigos = usePublicados('artigo');

  const filtrados = useMemo(() => {
    return artigos.filter((a) => {
      if (materia && a.materia !== materia) return false;
      if (nivel && a.nivel !== nivel) return false;
      return true;
    });
  }, [artigos, materia, nivel]);

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / ITEMS_POR_PAGINA));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const inicio = (paginaAtual - 1) * ITEMS_POR_PAGINA;
  const artigosDaPagina = filtrados.slice(inicio, inicio + ITEMS_POR_PAGINA);

  const handleFiltroMateria = (e) => {
    setMateria(e.target.value);
    setPagina(1);
  };

  const handleFiltroNivel = (e) => {
    setNivel(e.target.value);
    setPagina(1);
  };

  return (
    <>
      <section className="artigos-hero">
        <div className="container">
          <h1>Artigos</h1>
          <p>Conteúdo pedagógico gratuito, organizado por matéria e nível.</p>
        </div>
      </section>

      <section className="artigos-conteudo">
        <div className="container">
          <div className="artigos-filtros">
            <label>
              Matéria
              <select value={materia} onChange={handleFiltroMateria}>
                <option value="">Todas as matérias</option>
                {MATERIAS.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </label>

            <label>
              Nível
              <select value={nivel} onChange={handleFiltroNivel}>
                <option value="">Todos os níveis</option>
                {NIVEIS.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>
          </div>

          {artigosDaPagina.length === 0 ? (
            <p className="artigos-vazio">Sem artigos para este filtro.</p>
          ) : (
            <div className="artigos-grid">
              {artigosDaPagina.map((a) => (
                <Link to={`/artigos/${a.id}`} className="artigo-card" key={a.id}>
                  <div className="artigo-card__tags">
                    <span className="pill-materia">{a.materia}</span>
                    <span className="pill-nivel">{a.nivel}</span>
                  </div>
                  <h3>{a.titulo}</h3>
                  <time>{a.data}</time>
                </Link>
              ))}
            </div>
          )}

          {totalPaginas > 1 && (
            <div className="artigos-paginacao">
              <button
                type="button"
                disabled={paginaAtual === 1}
                onClick={() => setPagina((p) => Math.max(1, p - 1))}
              >
                Anterior
              </button>
              <span>Página {paginaAtual} de {totalPaginas}</span>
              <button
                type="button"
                disabled={paginaAtual === totalPaginas}
                onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))}
              >
                Seguinte
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
