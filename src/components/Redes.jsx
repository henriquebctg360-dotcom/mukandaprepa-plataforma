// Fila de ligações para as redes sociais (ESP-33).
//
// Um componente só, usado no rodapé e na página de contactos, para as duas
// listas não poderem divergir. A variante muda o aspecto, não o conteúdo.
//
//   variante="icones"  fila de botões redondos, só o ícone (rodapé)
//   variante="lista"   ícone + nome + conta, um por linha (contactos)
//
// Os nomes das redes vão escritos no link em texto a sério. Na variante de
// ícones ficam escondidos à vista mas presentes para quem usa leitor de ecrã —
// um botão redondo sem nome não se percebe.
import { REDES } from '../config/contactos';
import IconeRede from './IconesRedes';
import './Redes.css';

export default function Redes({ variante = 'icones' }) {
  return (
    <ul className={`redes redes--${variante}`}>
      {REDES.map((rede) => (
        <li key={rede.id}>
          <a
            href={rede.url}
            target="_blank"
            rel="noreferrer"
            className="redes__link"
            title={`${rede.nome} — ${rede.conta}`}
          >
            <span className="redes__icone">
              <IconeRede id={rede.id} />
            </span>
            {variante === 'lista' ? (
              <span className="redes__texto">
                <strong>{rede.nome}</strong>
                <span>{rede.conta}</span>
              </span>
            ) : (
              <span className="apenas-leitor-ecra">{rede.nome}</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
