// ESP-03 — secções da página inicial em formato landing page.
//
// Ordem aprovada (14 Set 2026): quem somos → ponto de situação → notícias →
// artigos → recursos → testemunhos → parceiros → perguntas frequentes →
// comunidade. Primeiro o contexto, depois as novidades, no fim a prova social,
// as dúvidas e o convite para a comunidade.
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SeccoesHome.css';
import { FUNDADORES, DIRECTORES } from '../../config/equipa.jsx';
import { usePublicados } from '../../prototipo/useConteudos';
import { RECURSOS } from '../../config/recursos';
import { CONTACTO, MENSAGEM_WHATSAPP_HERO, linkComunidade, whatsappCom } from '../../config/contactos';
import { PERIODO_FASE_GRATUITA } from '../../config/estatisticas';
import { ROTA_ENTRAR_NA_APP } from '../../config/appLinks';
import { MarcadorEsp } from '../../prototipo/NotasDev';
import { EtiquetaExemplo, IconeComunidade, IconeWhatsApp } from '../hero/partes';

function Cabecalho({ rotulo, titulo, texto, link, marcador, children }) {
  return (
    <header className="home-cab">
      <div>
        <span className="home-cab__rotulo">
          {rotulo}
          {marcador && <MarcadorEsp esp="ESP-03" balao="direita" texto={marcador} />}
        </span>
        <h2>{titulo}</h2>
        {texto && <p>{texto}</p>}
        {children}
      </div>
      {link && (
        <Link to={link.href} className="home-cab__link">
          {link.label} <span aria-hidden="true">→</span>
        </Link>
      )}
    </header>
  );
}

// ── 1. Quem somos ────────────────────────────────────────────────────────
const FACTOS = [
  { titulo: '100% angolana', texto: 'Conteúdos alinhados com os exames de acesso às universidades angolanas.' },
  { titulo: 'Pensada para o telemóvel', texto: 'Funciona com dados móveis e ecrãs pequenos, onde quer que estejas.' },
  { titulo: 'Professores e estudantes lado a lado', texto: 'Maratonas corrigidas por professores e aulas de correcção ao vivo.' },
];

export function SobreNosHome() {
  const pessoas = [...FUNDADORES, ...DIRECTORES];
  return (
    <section className="home-secao home-sobre">
      <div className="container home-sobre__inner">
        <div className="home-sobre__texto">
          <Cabecalho
            rotulo="Quem somos"
            titulo="A MUKANDA PREPA prepara estudantes para o acesso à universidade"
            texto="Somos uma plataforma educativa angolana. Juntamos maratonas de exercícios com questões de exames reais e aulas ao vivo, para que nenhum estudante chegue ao exame de acesso sem preparação."
            marcador="Secção nova, logo a seguir à hero: dá contexto a quem ainda não conhece o projecto. Substitui o antigo bloco “Sobre nós” (só três frases)."
          />
          <ul className="home-sobre__factos">
            {FACTOS.map((f) => (
              <li key={f.titulo}>
                <strong>{f.titulo}</strong>
                <span>{f.texto}</span>
              </li>
            ))}
          </ul>
          <div className="home-botoes">
            <Link to="/sobre" className="btn btn-primary">Conhecer a MUKANDA PREPA</Link>
            <Link to="/missao" className="btn btn-outline">A nossa missão</Link>
          </div>
        </div>

        <div className="home-sobre__equipa">
          {pessoas.map((p) => (
            <figure key={p.nome}>
              <img src={p.foto} alt={p.nome} width="600" height="600" loading="lazy" />
              <figcaption>
                <strong>{p.nome}</strong>
                <span>{p.cargo}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 2. O que está a acontecer ────────────────────────────────────────────
const SITUACAO = [
  {
    estado: 'feito',
    etiqueta: 'Concluída',
    titulo: 'Fase gratuita 2026',
    texto: `Maratonas e aulas online totalmente gratuitas, de ${PERIODO_FASE_GRATUITA}.`,
  },
  {
    estado: 'agora',
    etiqueta: 'Agora',
    titulo: 'App web em manutenção',
    texto: 'As equipas de desenvolvimento estão a melhorar a plataforma. As maratonas e as aulas retomam brevemente.',
  },
  {
    estado: 'breve',
    etiqueta: 'Brevemente',
    titulo: 'App mobile MUKANDA PREPA',
    texto: 'Da app web para uma app mobile, com mais funcionalidades.',
  },
];

export function SituacaoHome() {
  return (
    <section className="home-secao home-situacao">
      <div className="container">
        <Cabecalho
          rotulo="Ponto de situação"
          titulo="O que está a acontecer na MUKANDA PREPA"
          link={{ href: ROTA_ENTRAR_NA_APP, label: 'Saber mais sobre a nova app' }}
          marcador="Secção nova: resume o estado actual do projecto (fase gratuita concluída, app em manutenção, app mobile a caminho). Liga à página de manutenção da ESP-01."
        />
        <ol className="home-situacao__lista">
          {SITUACAO.map((s) => (
            <li key={s.titulo} className={`home-situacao__passo home-situacao__passo--${s.estado}`}>
              <span className="home-situacao__etiqueta">{s.etiqueta}</span>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ── 3. Notícias ──────────────────────────────────────────────────────────
export function NoticiasHome() {
  const noticias = usePublicados('noticia').slice(0, 3);
  const exemplo = noticias.some((n) => n.exemplo);
  return (
    <section className="home-secao home-noticias">
      <div className="container">
        <Cabecalho
          rotulo="Notícias"
          titulo="As últimas novidades"
          link={{ href: '/noticias', label: 'Ver todas as notícias' }}
          marcador="Secção nova: as três notícias publicadas mais recentes. Vêm do painel de publicação (ESP-05): o que for publicado lá aparece aqui."
        >
          <EtiquetaExemplo mostrar={exemplo} texto="Textos de exemplo" />
        </Cabecalho>
        <div className="home-grelha home-grelha--3">
          {noticias.map((n) => (
            <Link to={`/noticias/${n.id}`} className="home-noticia" key={n.id}>
              <div className="home-noticia__faixa" style={{ background: n.cor }} aria-hidden="true" />
              <div className="home-noticia__corpo">
                <time>{n.data}</time>
                <h3>{n.titulo}</h3>
                <p>{n.resumo}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 4. Artigos ───────────────────────────────────────────────────────────
export function ArtigosHome() {
  const artigos = usePublicados('artigo').slice(0, 3);
  const exemplo = artigos.some((a) => a.exemplo);
  return (
    <section className="home-secao home-artigos">
      <div className="container">
        <Cabecalho
          rotulo="Artigos"
          titulo="Dicas e explicações para o exame"
          texto="Conteúdo pedagógico gratuito, organizado por matéria e nível."
          link={{ href: '/artigos', label: 'Ver todos os artigos' }}
          marcador="Secção nova: os três artigos publicados mais recentes. Vêm do painel de publicação (ESP-05). A página /artigos tem filtros por matéria e nível."
        >
          <EtiquetaExemplo mostrar={exemplo} texto="Artigos de exemplo" />
        </Cabecalho>
        <div className="home-grelha home-grelha--3">
          {artigos.map((a) => (
            <Link to={`/artigos/${a.id}`} className="home-artigo" key={a.id}>
              <div className="home-artigo__tags">
                <span className="home-pill home-pill--azul">{a.materia}</span>
                <span className="home-pill">{a.nivel}</span>
              </div>
              <h3>{a.titulo}</h3>
              <time>{a.data}</time>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 5. Recursos gratuitos ────────────────────────────────────────────────
function IconePasta() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4.2l2 2.2h8.8A1.5 1.5 0 0 1 21 9.7v8.8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-11Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
    </svg>
  );
}

export function RecursosHome() {
  return (
    <section className="home-secao home-recursos">
      <div className="container">
        <Cabecalho
          rotulo="Recursos gratuitos"
          titulo="Continua a estudar enquanto preparamos a nova app"
          texto="Exames passados, materiais e livros reunidos pela equipa pedagógica, sempre disponíveis."
          link={{ href: '/recursos', label: 'Ver recursos' }}
          marcador="Secção nova: as quatro pastas do Google Drive que já existem na página Recursos. É o que o estudante pode usar hoje, com a app em manutenção."
        />
        <div className="home-grelha home-grelha--4">
          {RECURSOS.map((r) => (
            <a className="home-recurso" key={r.titulo} href={r.href} target="_blank" rel="noreferrer">
              <span className="home-recurso__icone"><IconePasta /></span>
              <h3>{r.titulo}</h3>
              <p>{r.descricao}</p>
              <span className="home-recurso__abrir">Abrir pasta ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 6. Testemunhos ───────────────────────────────────────────────────────
// Exemplos. Os reais precisam de autorização do estudante (nome, foto, texto).
const TESTEMUNHOS = [
  {
    texto: 'As maratonas mostraram-me exactamente onde eu falhava. Na aula de correcção percebi erros que andava a repetir há meses.',
    nome: 'Estudante de Luanda',
    detalhe: 'Engenharia e Tecnologia',
  },
  {
    texto: 'Estudei pelo telemóvel, com dados móveis, e consegui acompanhar tudo. Ter questões de exames reais fez toda a diferença.',
    nome: 'Estudante de Benguela',
    detalhe: 'Ciências Sociais',
  },
  {
    texto: 'O melhor foi a comunidade: tirar dúvidas com outros estudantes e com os professores, no mesmo sítio.',
    nome: 'Estudante do Huambo',
    detalhe: 'Engenharia e Tecnologia',
  },
];

export function TestemunhosHome() {
  return (
    <section className="home-secao home-testemunhos">
      <div className="container">
        <Cabecalho
          rotulo="Testemunhos"
          titulo="O que dizem os estudantes"
          marcador="Secção nova (pedida a 14 Set 2026): testemunhos de estudantes da fase gratuita. Textos, nomes e fotos reais só com autorização do estudante."
        >
          <EtiquetaExemplo mostrar texto="Testemunhos de exemplo" />
        </Cabecalho>
        <div className="home-grelha home-grelha--3">
          {TESTEMUNHOS.map((t) => (
            <figure className="home-testemunho" key={t.nome}>
              <span className="home-testemunho__aspas" aria-hidden="true">“</span>
              <blockquote>{t.texto}</blockquote>
              <figcaption>
                <span className="home-testemunho__avatar" aria-hidden="true">
                  {t.nome.split(' ').pop()[0]}
                </span>
                <span>
                  <strong>{t.nome}</strong>
                  <span>{t.detalhe}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 7. Parceiros ─────────────────────────────────────────────────────────
export function ParceirosHome() {
  return (
    <section className="home-secao home-parceiros">
      <div className="container">
        <Cabecalho
          rotulo="Parceiros"
          titulo="Quem caminha connosco"
          texto="Escolas, universidades e empresas que apoiam a preparação dos estudantes angolanos."
          marcador="Secção nova (pedida a 14 Set 2026): logótipos dos parceiros. Os espaços tracejados são para os logótipos reais (SVG ou PNG com fundo transparente)."
        >
          <EtiquetaExemplo mostrar texto="Espaços para logótipos" />
        </Cabecalho>
        <div className="home-parceiros__grelha">
          {Array.from({ length: 6 }, (_, i) => (
            <div className="home-parceiros__logo" key={i}>Logótipo do parceiro</div>
          ))}
        </div>
        <p className="home-parceiros__convite">
          A tua instituição quer apoiar a MUKANDA PREPA? <Link to="/contactos">Fala connosco →</Link>
        </p>
      </div>
    </section>
  );
}

// ── 8. Perguntas frequentes ──────────────────────────────────────────────
const PERGUNTAS = [
  {
    p: 'A app MUKANDA PREPA está disponível?',
    r: 'A app web está temporariamente em manutenção, enquanto preparamos a app mobile. As maratonas e as aulas online retomam brevemente.',
  },
  {
    p: 'Quando voltam as maratonas e as aulas online?',
    r: 'A data ainda não foi anunciada. Vamos anunciá-la primeiro na MUKANDA Community e nas nossas redes sociais.',
  },
  {
    p: 'A MUKANDA PREPA é gratuita?',
    r: `Na fase gratuita de 2026 (${PERIODO_FASE_GRATUITA}) as maratonas e as aulas online foram totalmente gratuitas. As condições da próxima fase serão anunciadas aqui no site.`,
  },
  {
    p: 'O que muda com a app mobile?',
    r: 'Vamos passar de uma app web para uma app mobile, com mais funcionalidades. Os detalhes serão partilhados à medida que o lançamento se aproxima.',
  },
  {
    p: 'Posso continuar a estudar enquanto a app está em manutenção?',
    r: 'Sim. Na secção Recursos tens exames passados, materiais de preparação, tópicos dos testes e livros, em pastas de acesso livre.',
  },
  {
    p: 'Como entro na MUKANDA Community?',
    r: 'Carrega em “Entrar na comunidade”. É uma Comunidade do WhatsApp onde partilhamos as novidades das maratonas, das aulas e da nova app.',
  },
  {
    p: 'Como falo com a equipa?',
    r: `Pelo WhatsApp ${CONTACTO.telefoneLegivel}, pelo email ${CONTACTO.email} ou pelo formulário da página Contactos.`,
  },
];

export function PerguntasHome() {
  const [aberta, setAberta] = useState(0);
  return (
    <section className="home-secao home-faq">
      <div className="container home-faq__inner">
        <Cabecalho
          rotulo="Perguntas frequentes"
          titulo="Tens dúvidas? Começa por aqui"
          texto="As perguntas que mais recebemos desde que a app entrou em manutenção."
          marcador="Secção nova (pedida a 14 Set 2026): perguntas frequentes sobre a situação actual. Respostas escritas só com o que já foi decidido; a validar pela equipa."
        >
          <EtiquetaExemplo mostrar texto="Respostas a validar" />
        </Cabecalho>
        <div className="home-faq__lista">
          {PERGUNTAS.map((q, i) => (
            <div className={`home-faq__item${aberta === i ? ' is-aberta' : ''}`} key={q.p}>
              <button type="button" onClick={() => setAberta(aberta === i ? -1 : i)} aria-expanded={aberta === i}>
                {q.p}
                <span aria-hidden="true">{aberta === i ? '−' : '+'}</span>
              </button>
              {aberta === i && <p>{q.r}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 9. Comunidade (fecho) ────────────────────────────────────────────────
export function ComunidadeHome() {
  return (
    <section className="home-comunidade">
      <div className="container home-comunidade__inner">
        <div>
          <h2>
            A conversa continua na MUKANDA Community
            <MarcadorEsp
              esp="ESP-03"
              texto="Fecho da página. Substitui “Começa hoje, é grátis! / Criar Conta”: em vez de criar conta, convida a entrar na Comunidade do WhatsApp ou a falar com a equipa."
            />
          </h2>
          <p>
            Entra na Comunidade do WhatsApp para saberes em primeira mão quando as
            maratonas voltam e quando sai a app mobile.
          </p>
        </div>
        <div className="home-comunidade__botoes">
          <a href={linkComunidade()} target="_blank" rel="noreferrer" className="btn btn-white">
            <IconeComunidade /> Entrar na comunidade
          </a>
          <a href={whatsappCom(MENSAGEM_WHATSAPP_HERO)} target="_blank" rel="noreferrer" className="btn home-comunidade__whatsapp">
            <IconeWhatsApp /> {CONTACTO.telefoneLegivel}
          </a>
        </div>
      </div>
    </section>
  );
}
