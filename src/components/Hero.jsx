import './Hero.css';
import { APP_REGISTO } from '../config/appLinks';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1>A melhor preparação para o acesso à universidade</h1>
          <p className="hero__subtitle">
            Plataforma 100% angolana: a MUKANDA PREPA junta
            maratonas online e aulas ao vivo, para estudares ao teu
            ritmo e onde quiseres — 100% gratuita em 2026.
          </p>
          <a href={APP_REGISTO} className="btn btn-primary hero__cta" target="_blank" rel="noreferrer">
            Inscrever-me agora gratuitamente
          </a>
        </div>

        {/*
          Fotografia principal. Substituiu a ilustração provisória em SVG,
          que por sua vez tinha substituído uma Hero.jpg de 12,5 MB.
          Recortada na coluna onde a cena começa: a metade branca à
          esquerda saiu. Entra em WebP a 840 px de largura, o dobro do
          espaço que ocupa no ecrã, para ficar nítida em telemóveis.
          width/height declarados reservam o espaço antes de a imagem
          chegar, para o texto não saltar durante o carregamento.

          O fundo é transparente de propósito. A fotografia original tinha
          um branco acinzentado que, contra o branco puro da página,
          desenhava um rectângulo à volta da imagem — parecia uma sombra.
          Se alguém reexportar estas imagens, tem de manter o canal alfa.
        */}
        <div className="hero__illustration">
          <img
            src="/hero-estudante.webp"
            alt="Estudante a consultar a plataforma MUKANDA PREPA no telemóvel"
            width="840"
            height="1225"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
