import { Outlet } from 'react-router-dom';
import MetaPagina from '../components/MetaPagina';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BarraPrototipo } from '../prototipo/NotasDev';

export default function MainLayout() {
  return (
    <>
      <MetaPagina />
      {/* ESP-25: quem navega por teclado chega ao conteúdo sem ter de passar
          por toda a navegação. Só aparece quando recebe o foco. */}
      <a href="#conteudo" className="saltar-conteudo">Saltar para o conteúdo</a>
      <Navbar />
      <main id="conteudo" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <BarraPrototipo />
    </>
  );
}
