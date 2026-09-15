import Hero from '../components/Hero';
import {
  SobreNosHome,
  SituacaoHome,
  NoticiasHome,
  ArtigosHome,
  RecursosHome,
  TestemunhosHome,
  ParceirosHome,
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
export default function Homepage() {
  return (
    <>
      <Hero />
      <SobreNosHome />
      <SituacaoHome />
      <NoticiasHome />
      <ArtigosHome />
      <RecursosHome />
      <TestemunhosHome />
      <ParceirosHome />
      <PerguntasHome />
      <ComunidadeHome />
    </>
  );
}
