import Hero from '../components/Hero';
import {
  SobreNosHome,
  SituacaoHome,
  NoticiasHome,
  RecursosHome,
  TestemunhosHome,
  PerguntasHome,
  ComunidadeHome,
} from '../components/home/SeccoesHome';

// ESP-03 — a página inicial passa a ser uma landing page informativa.
//
// Saíram (os componentes continuam no projecto):
//   - Pilares (Maratonas Online, Aulas ao Vivo, Exames Passados)
//   - MaratonaCountdown (continua a ser usado na página Maratonas)
//   - PlanosPreview (a fase gratuita já é contada na hero)
//   - SobreResumo (substituído por SobreNosHome)
//   - CtaFinal "Começa hoje, é grátis!" (substituído por ComunidadeHome)
//   - ParceirosHome (ESP-14: ainda não há parceiros)
//   - ArtigosHome (ESP-19: os professores ainda não escreveram os artigos)
export default function Homepage() {
  return (
    <>
      <Hero />
      <SobreNosHome />
      <SituacaoHome />
      <NoticiasHome />

      {/* ESP-19: a secção dos artigos saiu — os professores ainda não os escreveram. */}
      <div className="container home-nota-removida">
      </div>

      <RecursosHome />
      <TestemunhosHome />

      {/* ESP-14: a secção "Quem caminha connosco" saiu — ainda não há parceiros. */}
      <div className="container home-nota-removida">
      </div>

      <PerguntasHome />
      <ComunidadeHome />
    </>
  );
}
