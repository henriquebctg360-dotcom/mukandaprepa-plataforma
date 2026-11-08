import Hero from '../components/Hero';
import { NotaDev } from '../prototipo/NotasDev';
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
        <NotaDev esp="ESP-19" titulo="Secção escondida">
          Aqui estavam os artigos dos professores. Ficam escondidos do site — menu, rodapé,
          página inicial e Blog — enquanto não houver artigos reais para mostrar. A página
          <code> /artigos </code> continua a funcionar por link directo, com o artigo-modelo,
          porque é o que o corpo docente recebeu no seu documento. Volta tudo com
          <code> ARTIGOS_VISIVEIS = true </code> em <code>src/config/artigos.js</code>.
        </NotaDev>
      </div>

      <RecursosHome />
      <TestemunhosHome />

      {/* ESP-14: a secção "Quem caminha connosco" saiu — ainda não há parceiros. */}
      <div className="container home-nota-removida">
        <NotaDev esp="ESP-14" titulo="Secção retirada">
          Aqui estavam os logótipos dos parceiros. Saiu por decisão da direcção (29 Set 2026):
          a MUKANDA PREPA ainda não tem parcerias fechadas, e uma fila de espaços vazios não
          ajuda ninguém. Quando houver parceiros, a secção volta a este lugar — o desenho está
          descrito na especificação.
        </NotaDev>
      </div>

      <PerguntasHome />
      <ComunidadeHome />
    </>
  );
}
