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
          Imagem principal da versão em produção (16 Ago 2026): a estudante
          com os destaques de tutores, maratonas gratuitas e apoio 24h já
          desenhados na própria imagem. width/height declarados reservam o
          espaço antes de a imagem chegar, para o texto não saltar.
        */}
        <div className="hero__illustration">
          <img
            src="/home-hero.webp"
            alt="Estudante da MUKANDA PREPA com tutores, maratonas gratuitas e apoio 24h"
            width="1300"
            height="813"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
