import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import Maratonas from './pages/Maratonas';
import AulasOnline from './pages/AulasOnline';
import Sobre from './pages/Sobre';
import Contactos from './pages/Contactos';
import Blog from './pages/Blog';
import Missao from './pages/Missao';
import Recursos from './pages/Recursos';
import Noticias from './pages/Noticias';
import Artigos from './pages/Artigos';
import ConteudoDetalhe from './pages/ConteudoDetalhe';
import PainelLayout from './pages/painel/PainelLayout';
import PainelEntrar from './pages/painel/PainelEntrar';
import PainelConteudos from './pages/painel/PainelConteudos';
import PainelEditor from './pages/painel/PainelEditor';
import EntrarNaApp from './pages/EntrarNaApp';
import Especificacoes from './pages/Especificacoes';
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada';

export default function App() {
  return (
    <>
      <ScrollToTop />
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
          <Route path="/noticias/:id" element={<ConteudoDetalhe tipo="noticia" />} />
          <Route path="/artigos/:id" element={<ConteudoDetalhe tipo="artigo" />} />
          <Route path="/entrar-na-app" element={<EntrarNaApp />} />
          <Route path="/especificacoes" element={<Especificacoes />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Route>

        {/* ESP-05: painel de publicação — layout próprio, sem menu nem rodapé do site. */}
        <Route path="/painel/entrar" element={<PainelEntrar />} />
        <Route path="/painel" element={<PainelLayout />}>
          <Route index element={<PainelConteudos />} />
          <Route path="novo/:tipo" element={<PainelEditor />} />
          <Route path="editar/:id" element={<PainelEditor />} />
        </Route>
      </Routes>
    </>
  );
}
