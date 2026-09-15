import './Recursos.css';

// Pastas partilhadas no Google Drive pela equipa pedagógica.
const RECURSOS = [
  {
    titulo: 'Exames passados',
    descricao: 'Provas de anos anteriores para praticares com o formato real do exame de acesso.',
    href: 'https://drive.google.com/drive/folders/1ouLww2MQ3pMVEVGv0hpyEsARTYwuJCSJ?usp=sharing',
  },
  {
    titulo: 'Materiais de preparação',
    descricao: 'Fichas, resumos e exercícios organizados por matéria, para estudares ao teu ritmo.',
    href: 'https://drive.google.com/drive/folders/1KpcIpEGM1M0sxOQxLesZpTsgr0_2TamC?usp=drive_link',
  },
  {
    titulo: 'Tópicos dos testes',
    descricao: 'Os temas que saem nos testes de acesso, para saberes onde concentrar o estudo.',
    href: 'https://drive.google.com/drive/folders/1MN4KZ1EqbaBrcic-Mt3IFca3dO-BkIiY?usp=drive_link',
  },
  {
    titulo: 'Livros',
    descricao: 'Manuais e livros de apoio às disciplinas de acesso, em formato digital.',
    href: 'https://drive.google.com/drive/folders/19SD5eTJ1DfB2lEQJVoYJXHz42A9xwz8y?usp=drive_link',
  },
];

export default function Recursos() {
  return (
    <>
      <section className="recursos-hero">
        <div className="container">
          <h1>Recursos</h1>
          <p>Material de estudo gratuito, reunido e organizado pela equipa pedagógica. Escolhe uma pasta e começa.</p>
        </div>
      </section>

      <section className="recursos-lista">
        <div className="container">
          <div className="recursos-grid">
            {RECURSOS.map((r) => (
              <div className="recurso-card" key={r.titulo}>
                <h3>{r.titulo}</h3>
                <p className="recurso-card__desc">{r.descricao}</p>
                <a className="btn btn-primary recurso-card__btn" href={r.href} target="_blank" rel="noreferrer">
                  Abrir pasta
                </a>
              </div>
            ))}
          </div>
          <p className="recursos-aviso">
            Os materiais são acrescentados de forma contínua — vale a pena voltar a espreitar.
          </p>
        </div>
      </section>
    </>
  );
}
