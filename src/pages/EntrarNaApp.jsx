import { Link } from 'react-router-dom';
import './EntrarNaApp.css';
import { linkComunidade, whatsappCom } from '../config/contactos';
import { ComMarcador } from '../prototipo/NotasDev';
import { IconeComunidade } from '../components/hero/partes';
import { MarcadorEsp, NotaDev } from '../prototipo/NotasDev';

// ESP-01 — Página para onde levam todos os botões "Entrar na app".
// A app web está em manutenção enquanto a MUKANDA PREPA passa para uma app
// mobile. Textos provisórios, a validar pela equipa.

const PERCURSO = [
  {
    estado: 'agora',
    etiqueta: 'Em manutenção',
    titulo: 'App web',
    desc: 'A app web foi colocada em pausa para podermos trabalhar nas melhorias sem interromper ninguém a meio de uma maratona.',
  },
  {
    estado: 'curso',
    etiqueta: 'Em curso',
    titulo: 'Melhorias',
    desc: 'As equipas de desenvolvimento da MUKANDA PREPA estão a melhorar as funcionalidades da plataforma.',
  },
  {
    estado: 'breve',
    etiqueta: 'Brevemente',
    titulo: 'App mobile',
    desc: 'Vamos passar de uma app web para uma app mobile, com mais funcionalidades e pensada para o teu telemóvel.',
  },
];

const REDES = [
  { nome: 'Instagram', href: 'https://www.instagram.com/mukandaprepa/' },
  { nome: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61591268696768' },
  { nome: 'TikTok', href: 'https://www.tiktok.com/@mukandaprepa' },
  { nome: 'LinkedIn', href: 'https://www.linkedin.com/company/mukanda-prepa/' },
];

export default function EntrarNaApp() {
  return (
    <>
      <section className="manut-hero">
        <div className="container manut-hero__inner">
          <div className="manut-hero__texto">
            <span className="manut-estado">
              <span className="manut-estado__ponto" aria-hidden="true" />
              App web em manutenção
            </span>
            <MarcadorEsp
              esp="ESP-01"
              balao="direita"
              texto="Página nova. É o destino do botão “Entrar na app” e de todos os botões que antes abriam a app web."
            />

            <h1>Estamos a preparar a nova app MUKANDA PREPA</h1>

            <p className="manut-hero__lead">
              A app web está temporariamente em manutenção. As <b>maratonas</b> e
              as <b>aulas online</b> vão retomar brevemente.
            </p>
            <p className="manut-hero__sub">
              Enquanto isso, as nossas equipas de desenvolvimento estão a trabalhar
              para melhorar a plataforma — e para dar o próximo passo: uma
              <b> app mobile</b>, com mais funcionalidades.
            </p>

            <div className="manut-hero__acoes">
              <a
                href={whatsappCom('Olá! Quero ser avisado quando a app MUKANDA PREPA voltar.')}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Avisem-me pelo WhatsApp
              </a>
              <ComMarcador
                esp="ESP-10"
                balao="direita"
                texto="Botão novo: entrar na MUKANDA Community, como no resto do site. “Voltar ao site” passou a link simples por baixo."
              >
                <a href={linkComunidade()} className="btn btn-outline manut-hero__comunidade" target="_blank" rel="noreferrer">
                  <IconeComunidade /> Entrar na comunidade
                </a>
              </ComMarcador>
            </div>
            <Link to="/" className="manut-hero__voltar">← Voltar ao site</Link>
          </div>

          {/* Ilustração em CSS: a janela da app web, esbatida, dá lugar ao
              telemóvel com a marca. Sem imagens, para carregar rápido. */}
          <div className="manut-visual" aria-hidden="true">
            <div className="manut-visual__janela">
              <div className="manut-visual__barra">
                <i /><i /><i />
              </div>
              <div className="manut-visual__faixa">Em manutenção</div>
              <div className="manut-visual__linhas">
                <span /><span /><span />
              </div>
            </div>

            <div className="manut-visual__seta">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="manut-visual__telemovel">
              <div className="manut-visual__ecra">
                <img src="/logo-icon-branco.png" alt="" />
                <strong>MUKANDA<br />PREPA</strong>
                <span>Brevemente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="manut-percurso">
        <div className="container">
          <h2>O que está a acontecer</h2>
          <ol className="manut-percurso__lista">
            {PERCURSO.map((p, i) => (
              <li className={`manut-passo manut-passo--${p.estado}`} key={p.titulo}>
                <span className="manut-passo__numero">{i + 1}</span>
                <span className="manut-passo__etiqueta">{p.etiqueta}</span>
                <h3>{p.titulo}</h3>
                <p>{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="manut-novidades">
        <div className="container manut-novidades__inner">
          <div>
            <h2>Não percas o regresso</h2>
            <p>
              Anunciamos a data de regresso das maratonas e das aulas online, e o
              lançamento da app mobile, em primeira mão nas nossas redes sociais.
            </p>
          </div>
          <div className="manut-novidades__redes">
            {REDES.map((r) => (
              <a key={r.nome} href={r.href} target="_blank" rel="noreferrer">
                {r.nome}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="manut-notas">
        <div className="container">
          <NotaDev esp="ESP-01" titulo="Como esta página funciona">
            <ul>
              <li>Rota interna <code>/entrar-na-app</code>. É o destino do botão “Entrar na app” da barra e de todos os outros botões que antes abriam a app web.</li>
              <li>O destino está centralizado em <code>src/config/appLinks.js</code>. Quando a app mobile sair, muda-se só ali.</li>
              <li>Textos provisórios. Por decidir: data de regresso, formulário “avisa-me”, e o que acontece às contas actuais. <Link to="/especificacoes">Ver questões em aberto →</Link></li>
            </ul>
          </NotaDev>
        </div>
      </section>
    </>
  );
}
