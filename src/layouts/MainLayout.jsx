import { Outlet } from 'react-router-dom';
import MetaPagina from '../components/MetaPagina';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BarraPrototipo } from '../prototipo/NotasDev';

export default function MainLayout() {
  return (
    <>
      <MetaPagina />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BarraPrototipo />
    </>
  );
}
