import './SobreResumo.css';

const BULLETS = [
  'Conteúdos alinhados às universidades angolanas',
  'Acompanhamento por tutores',
  'Comunidade activa',
];

export default function SobreResumo() {
  return (
    <section className="sobre-resumo">
      <div className="container sobre-resumo__inner">
        {/*
          Recorte do painel pêssego da fotografia original: a metade branca,
          com os arcos e a grelha de pontos, foi deixada de fora. O pêssego
          é uma forma da marca e é suposto ler-se como um rectângulo, por
          isso esta imagem não precisa de fundo transparente.
        */}
        <div className="sobre-resumo__imagem">
          <img
            src="/sobre-estudante.webp"
            alt="Estudante da MUKANDA PREPA com os seus materiais de estudo"
            width="760"
            height="957"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="sobre-resumo__texto">
          <h2>Sobre nós</h2>
          <ul className="sobre-resumo__lista">
            {BULLETS.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <a href="/sobre" className="btn btn-outline">Saber mais</a>
        </div>
      </div>
    </section>
  );
}
