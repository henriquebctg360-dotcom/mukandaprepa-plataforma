// Formatação simples dos textos das notícias e dos artigos.
//
// Quem escreve não precisa de saber HTML. Basta separar os parágrafos por uma
// linha em branco e usar, no início da linha:
//   "## " → subtítulo
//   "- "  → item de lista
//   "1. " → lista numerada (passos)
//   "> "  → citação ou caixa de destaque
// Os endereços de internet e os e-mails viram ligações sozinhos.

const LIGACAO = /(https?:\/\/[^\s<>",;)]+|[\w.+-]+@[\w-]+\.[\w.-]+)/g;

function comLigacoes(texto) {
  return texto.split(LIGACAO).map((parte, i) => {
    if (i % 2 === 0) return parte;
    const email = !parte.startsWith('http');
    return (
      <a
        key={i}
        href={email ? `mailto:${parte}` : parte}
        {...(email ? {} : { target: '_blank', rel: 'noreferrer' })}
      >
        {parte}
      </a>
    );
  });
}

export default function TextoRico({ texto, className }) {
  const blocos = String(texto || '')
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className={className}>
      {blocos.map((bloco, i) => {
        if (bloco.startsWith('## ')) return <h2 key={i}>{bloco.slice(3)}</h2>;
        if (bloco.startsWith('> ')) {
          return <blockquote key={i}>{comLigacoes(bloco.slice(2).replace(/\n> ?/g, ' '))}</blockquote>;
        }
        if (bloco.startsWith('- ')) {
          return (
            <ul key={i}>
              {bloco.split('\n').map((linha, j) => (
                <li key={j}>{comLigacoes(linha.replace(/^-\s*/, ''))}</li>
              ))}
            </ul>
          );
        }
        if (/^\d+\.\s/.test(bloco)) {
          return (
            <ol key={i}>
              {bloco.split('\n').map((linha, j) => (
                <li key={j}>{comLigacoes(linha.replace(/^\d+\.\s*/, ''))}</li>
              ))}
            </ol>
          );
        }
        return <p key={i}>{comLigacoes(bloco)}</p>;
      })}
    </div>
  );
}
