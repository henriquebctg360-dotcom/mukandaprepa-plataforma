// "Continua por aqui" — ligações no fim de cada página (ESP-43).
//
// ── O problema ─────────────────────────────────────────────────────────────
// Tirando a barra e o rodapé, só 5 das 14 páginas tinham ligações no corpo.
// Quem chegava às Maratonas pelo Google lia a página e ficava num beco: para
// ir às Aulas Online tinha de voltar ao menu, e a maior parte das pessoas não
// volta — fecha.
//
// Vale para quem lê e vale para o Google, pela mesma razão: ambos descobrem o
// resto do site seguindo ligações, e uma página para onde nada aponta a não
// ser o menu parece menos importante do que é.
//
// ── Porque é um bloco no fim e não links no meio do texto ──────────────────
// Porque mudar o texto que já foi escrito e aprovado para lá enfiar ligações
// é reescrever o que não foi pedido. Este bloco acrescenta sem tocar em nada.
import { Link } from 'react-router-dom';
import './ContinuarPor.css';

export default function ContinuarPor({ titulo = 'Continua por aqui', paginas }) {
  if (!paginas || paginas.length === 0) return null;

  return (
    <section className="continuar" aria-labelledby="continuar-titulo">
      <div className="container">
        <h2 className="continuar__titulo" id="continuar-titulo">{titulo}</h2>
        <ul className="continuar__lista">
          {paginas.map((p) => (
            <li key={p.para}>
              <Link to={p.para} className="continuar__cartao">
                <strong>{p.nome}</strong>
                <span>{p.resumo}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
