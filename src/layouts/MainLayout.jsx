import { Outlet, useLocation } from 'react-router-dom';
import MetaPagina from '../components/MetaPagina';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContinuarPor from '../components/ContinuarPor';
import { ligacoesDe } from '../config/ligacoes';

export default function MainLayout() {
  const { pathname } = useLocation();

  return (
    <>
      <MetaPagina />
      {/* ESP-25: quem navega por teclado chega ao conteúdo sem ter de passar
          por toda a navegação. Só aparece quando recebe o foco. */}
      <a href="#conteudo" className="saltar-conteudo">Saltar para o conteúdo</a>
      <Navbar />
      <main id="conteudo" tabIndex={-1}>
        <Outlet />
        {/* ESP-43 — montado aqui e não em cada página: assim é o
            src/config/ligacoes.js que decide quem leva bloco, e acrescentar
            uma página nova é acrescentar uma entrada num ficheiro. Nas
            páginas que lá não estão, o componente não desenha nada. */}
        <ContinuarPor paginas={ligacoesDe(pathname)} />
      </main>
      <Footer />
    </>
  );
}
