import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada';

// ESP-24 — cada página no seu ficheiro.
//
// Até aqui o site era um único ficheiro de JavaScript: quem abria a página
// de Contactos descarregava também o código da Equipa, das Notícias e de
// tudo o resto. Com `lazy`, o navegador só vai buscar a página que a pessoa
// pediu. A inicial e a de erro ficam de fora: a primeira é quase sempre a
// porta de entrada, a segunda tem de estar sempre pronta.
const Maratonas = lazy(() => import('./pages/Maratonas'));
const AulasOnline = lazy(() => import('./pages/AulasOnline'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Contactos = lazy(() => import('./pages/Contactos'));
const Blog = lazy(() => import('./pages/Blog'));
const Missao = lazy(() => import('./pages/Missao'));
const Recursos = lazy(() => import('./pages/Recursos'));
const Noticias = lazy(() => import('./pages/Noticias'));
const Artigos = lazy(() => import('./pages/Artigos'));
const Equipa = lazy(() => import('./pages/Equipa'));
const ConteudoDetalhe = lazy(() => import('./pages/ConteudoDetalhe'));
const EntrarNaApp = lazy(() => import('./pages/EntrarNaApp'));

// Enquanto a página não chega. Em segundos de ligação lenta é isto que se vê,
// por isso ocupa a altura de um ecrã para o rodapé não saltar para cima.
function AEsperar() {
  return <div className="a-esperar" role="status" aria-label="A carregar" />;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<AEsperar />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          {/* ESP-04: sem planos pagos, /planos volta à página inicial (links antigos
              não dão erro). A página Planos continua no projecto para quando houver
              novos planos. */}
          <Route path="/planos" element={<Navigate to="/" replace />} />
          <Route path="/maratonas" element={<Maratonas />} />
          <Route path="/aulas-online" element={<AulasOnline />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/missao" element={<Missao />} />
          <Route path="/recursos" element={<Recursos />} />
          {/* ESP-03: páginas repostas — a página inicial liga para elas. */}
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/artigos" element={<Artigos />} />
          {/* ESP-11: A Nossa Equipa volta a ter rota. */}
          <Route path="/equipa" element={<Equipa />} />
          <Route path="/noticias/:id" element={<ConteudoDetalhe tipo="noticia" />} />
          <Route path="/artigos/:id" element={<ConteudoDetalhe tipo="artigo" />} />
          <Route path="/entrar-na-app" element={<EntrarNaApp />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Route>
      </Routes>
      </Suspense>
    </>
  );
}
