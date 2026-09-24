import './HomeSections.css';

import { FUNDADORES, DIRECTORES } from '../config/equipa.jsx';

const COMMUNITY_URL =
  'https://wa.me/244945370874?text=Ol%C3%A1!%20Quero%20entrar%20na%20MUKANDA%20Community.';

const WHATSAPP_URL =
  'https://wa.me/244945370874?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20MUKANDA%20PREPA%20e%20tenho%20uma%20pergunta.';


/* =========================================================
   ICONES
========================================================= */

function Arrow() {
  return (
    <span aria-hidden="true">
      →
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="home-arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="home-check" aria-hidden="true">
      ✓
    </span>
  );
}

function FolderIcon() {
  return (
    <svg
      className="resource-folder-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 7.5C3.5 6.67 4.17 6 5 6h4l2 2h8c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H5c-.83 0-1.5-.67-1.5-1.5v-10Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg
      className="community-btn__icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3.8 18.2c.4-2.5 2.2-4 4.7-4s4.3 1.5 4.7 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M15.2 10.5a2.5 2.5 0 1 0 0-5M15.2 13.8c2.1 0 3.8 1.2 4.2 3.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      className="community-btn__icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 4.5a7.5 7.5 0 0 0-6.5 11.25L4.5 20l4.4-1a7.5 7.5 0 1 0 3.1-14.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 9.2c.2-.3.4-.3.7-.3h.5c.2 0 .3.1.4.4l.5 1.1c.1.2.1.3 0 .5l-.4.5c.5 1 1.2 1.6 2.2 2.1l.5-.5c.2-.2.3-.2.5-.1l1.1.5c.3.1.4.3.3.6-.2.8-.8 1.1-1.5 1.1-1.2 0-2.7-.7-3.8-1.8-1.1-1.1-1.7-2.5-1.7-3.6 0-.3.2-.5.7-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}


/* =========================================================
   EQUIPA — FOTOGRAFIAS DA CONFIGURAÇÃO EXISTENTE
========================================================= */

const EQUIPA_HOME = [
  ...FUNDADORES,
  ...DIRECTORES,
].filter((pessoa) =>
  [
    'Henrique Catraio',
    'Walter Sampaio',
    'Armando Baptista',
  ].includes(pessoa.nome)
);


/* =========================================================
   COMPONENTE
========================================================= */

export default function HomeSections() {
  return (
    <main className="home-sections">

      {/* =====================================================
          QUEM SOMOS
      ===================================================== */}

      <section className="home-about section" id="sobre">
        <div className="container">

          <div className="section-heading-label">
            <span className="section-heading-label__text">
              QUEM SOMOS
            </span>
          </div>

          <div className="home-about__grid">

            <div className="home-about__content">

              <h2>
                A MUKANDA PREPA
                <br />
                prepara estudantes para
                <br />
                o acesso à universidade
              </h2>

              <p className="home-about__intro">
                Somos uma plataforma educativa angolana. Juntamos
                maratonas de exercícios com questões de exames reais e
                aulas ao vivo, para que nenhum estudante chegue ao exame
                de acesso sem preparação.
              </p>

              <div className="home-about__points">

                <div className="home-about__point">
                  <CheckIcon />

                  <div>
                    <strong>100% angolana</strong>
                    <p>
                      Conteúdos alinhados com os exames de acesso às
                      universidades angolanas.
                    </p>
                  </div>
                </div>

                <div className="home-about__point">
                  <CheckIcon />

                  <div>
                    <strong>Pensada para o telemóvel</strong>
                    <p>
                      Funciona com dados móveis e ecrãs pequenos,
                      onde quer que estejas.
                    </p>
                  </div>
                </div>

                <div className="home-about__point">
                  <CheckIcon />

                  <div>
                    <strong>Professores e estudantes lado a lado</strong>
                    <p>
                      Maratonas corrigidas por professores e aulas de
                      correcção ao vivo.
                    </p>
                  </div>
                </div>

              </div>

              <div className="home-about__actions">

                <a
                  href="#sobre"
                  className="home-btn home-btn--primary"
                >
                  Conhecer a MUKANDA PREPA
                  <ArrowIcon />
                </a>

                <a
                  href="/missao"
                  className="home-btn home-btn--secondary"
                >
                  A nossa missão
                  <ArrowIcon />
                </a>

              </div>

            </div>


            {/* =================================================
                EQUIPA
            ================================================= */}

            <div className="team-grid">

              {EQUIPA_HOME.map((pessoa) => (
                <article
                  className="team-card"
                  key={pessoa.nome}
                >

                  {pessoa.foto ? (
                    <img
                      className="team-avatar team-avatar--photo"
                      src={pessoa.foto}
                      alt={pessoa.nome}
                      width="600"
                      height="600"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="team-avatar"
                      aria-hidden="true"
                    >
                      {pessoa.nome
                        .split(' ')
                        .slice(0, 2)
                        .map((p) => p[0])
                        .join('')}
                    </div>
                  )}

                  <h3>{pessoa.nome}</h3>
                  <p>{pessoa.cargo}</p>

                </article>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          PONTO DE SITUAÇÃO
      ===================================================== */}

      <section className="status section" id="situacao">
        <div className="container">

          <div className="section-heading-label">
            <span className="section-heading-label__text">
              PONTO DE SITUAÇÃO
            </span>
          </div>

          <div className="section-header-row">

            <div>
              <h2>
                O que está a acontecer na MUKANDA PREPA
              </h2>
            </div>

            <a
              href="#situacao"
              className="text-link"
            >
              Saber mais sobre a nova app
              <Arrow />
            </a>

          </div>

          <div className="status__timeline">

            <article className="status-card status-card--done">

              <span className="status-card__tag">
                Concluída
              </span>

              <h3>Fase gratuita 2026</h3>

              <p>
                Maratonas e aulas online totalmente gratuitas,
                de 20 Ago – 15 Set 2026.
              </p>

            </article>


            <article className="status-card status-card--now">

              <span className="status-card__tag">
                Agora
              </span>

              <h3>App web em manutenção</h3>

              <p>
                As equipas de desenvolvimento estão a melhorar a
                plataforma. As maratonas e as aulas retomam brevemente.
              </p>

            </article>


            <article className="status-card status-card--soon">

              <span className="status-card__tag">
                Brevemente
              </span>

              <h3>App mobile MUKANDA PREPA</h3>

              <p>
                Da app web para uma app mobile, com mais funcionalidades.
              </p>

            </article>

          </div>
        </div>
      </section>


      {/* =====================================================
          NOTÍCIAS
      ===================================================== */}

      <section className="news section" id="noticias">
        <div className="container">

          <div className="section-heading-label">
            <span className="section-heading-label__text">
              NOTÍCIAS
            </span>
          </div>

          <div className="section-header-row">

            <div>
              <h2>As últimas novidades</h2>

              <p>
                Textos de exemplo
              </p>
            </div>

            <a
              href="#noticias"
              className="text-link"
            >
              Ver todas as notícias
              <Arrow />
            </a>

          </div>

          <div className="news-grid">

            <article className="news-card">
              <span>13 Set 2026</span>

              <h3>
                A app web MUKANDA PREPA entra em manutenção
              </h3>

              <p>
                Para preparar a próxima fase, a app web fica temporariamente
                em manutenção. As maratonas e as aulas online retomam brevemente.
              </p>
            </article>


            <article className="news-card">
              <span>13 Set 2026</span>

              <h3>
                Vem aí a app mobile MUKANDA PREPA
              </h3>

              <p>
                As equipas de desenvolvimento estão a trabalhar para passar
                da app web para uma app mobile, com mais funcionalidades.
              </p>
            </article>


            <article className="news-card">
              <span>15 Set 2026</span>

              <h3>
                Fase gratuita 2026: obrigado a todos os estudantes
              </h3>

              <p>
                Entre 20 de Agosto e 15 de Setembro, as maratonas e as aulas
                online foram totalmente gratuitas.
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* =====================================================
          ARTIGOS
      ===================================================== */}

      <section className="articles section" id="artigos">
        <div className="container">

          <div className="section-heading-label">
            <span className="section-heading-label__text">
              ARTIGOS
            </span>
          </div>

          <div className="section-header-row">

            <div>
              <h2>
                Dicas e explicações para o exame
              </h2>

              <p>
                Conteúdo pedagógico gratuito, organizado por matéria e nível.
              </p>
            </div>

            <a
              href="#artigos"
              className="text-link"
            >
              Ver todos os artigos
              <Arrow />
            </a>

          </div>

          <div className="articles-list">

            <article className="article-row">

              <div>
                <span className="article-subject">
                  Matemática
                </span>

                <span className="article-level">
                  Básico
                </span>
              </div>

              <h3>
                Como resolver equações do 2º grau sem erros
              </h3>

              <time dateTime="2026-07-02">
                02 Jul 2026
              </time>

              <ArrowIcon />

            </article>


            <article className="article-row">

              <div>
                <span className="article-subject">
                  Física
                </span>

                <span className="article-level">
                  Básico
                </span>
              </div>

              <h3>
                As leis de Newton explicadas com exemplos do dia-a-dia
              </h3>

              <time dateTime="2026-06-28">
                28 Jun 2026
              </time>

              <ArrowIcon />

            </article>


            <article className="article-row">

              <div>
                <span className="article-subject">
                  Química
                </span>

                <span className="article-level">
                  Básico
                </span>
              </div>

              <h3>
                Tabela periódica: truques para memorizar os elementos
              </h3>

              <time dateTime="2026-06-25">
                25 Jun 2026
              </time>

              <ArrowIcon />

            </article>

          </div>
        </div>
      </section>


      {/* =====================================================
          RECURSOS GRATUITOS
      ===================================================== */}

      <section className="resources section" id="recursos">
        <div className="container">

          <div className="section-heading-label">
            <span className="section-heading-label__text">
              RECURSOS GRATUITOS
            </span>
          </div>

          <div className="resources-header">

            <div className="resources-header__content">

              <h2>
                Continua a estudar enquanto
                <br />
                preparamos a nova app
              </h2>

              <p>
                Exames passados, materiais e livros reunidos pela equipa
                pedagógica, sempre disponíveis.
              </p>

            </div>

            <a
              href="#recursos"
              className="text-link resources-header__link"
            >
              Ver recursos
              <Arrow />
            </a>

          </div>


          <div className="resources-grid">

            {[
              {
                title: 'Exames passados',
                text:
                  'Provas de anos anteriores para praticares com o formato real do exame de acesso.',
              },
              {
                title: 'Materiais de preparação',
                text:
                  'Fichas, resumos e exercícios organizados por matéria, para estudares ao teu ritmo.',
              },
              {
                title: 'Tópicos dos testes',
                text:
                  'Os temas que saem nos testes de acesso, para saberes onde concentrar o estudo.',
              },
              {
                title: 'Livros',
                text:
                  'Manuais e livros de apoio às disciplinas de acesso, em formato digital.',
              },
            ].map(({ title, text }) => (

              <article
                className="resource-card"
                key={title}
              >

                <div className="resource-icon">
                  <FolderIcon />
                </div>

                <h3>
                  {title}
                </h3>

                <p>
                  {text}
                </p>

                <a
                  href="#recursos"
                  className="resource-card__link"
                >
                  Abrir pasta
                  <Arrow />
                </a>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          TESTEMUNHOS
      ===================================================== */}

      <section
        className="testimonials section"
        id="testemunhos"
      >
        <div className="container">

          <div className="section-heading-label">
            <span className="section-heading-label__text">
              TESTEMUNHOS
            </span>
          </div>

          <div className="testimonials-header">

            <div>
              <h2 id='est'>
                O que dizem os estudantes
              </h2>
            </div>

          </div>


          <div className="testimonials-grid">

            <article className="testimonial-card">

              <span
                className="quote-mark"
                aria-hidden="true"
              >
                “
              </span>

              <p>
                As maratonas mostraram-me exactamente onde eu falhava.
                Na aula de correcção percebi erros que andava a repetir
                há meses.
              </p>

              <div className="testimonial-author">

                <strong>
                  L
                </strong>

                <span>
                  Estudante de Luanda

                  <small>
                    Engenharia e Tecnologia
                  </small>
                </span>

              </div>

            </article>


            <article className="testimonial-card">

              <span
                className="quote-mark"
                aria-hidden="true"
              >
                “
              </span>

              <p>
                Estudei pelo telemóvel, com dados móveis, e consegui
                acompanhar tudo. Ter questões de exames reais fez toda
                a diferença.
              </p>

              <div className="testimonial-author">

                <strong>
                  B
                </strong>

                <span>
                  Estudante de Benguela

                  <small>
                    Ciências Sociais
                  </small>
                </span>

              </div>

            </article>


            <article className="testimonial-card">

              <span
                className="quote-mark"
                aria-hidden="true"
              >
                “
              </span>

              <p>
                O melhor foi a comunidade: tirar dúvidas com outros
                estudantes e com os professores, no mesmo sítio.
              </p>

              <div className="testimonial-author">

                <strong>
                  H
                </strong>

                <span>
                  Estudante do Huambo

                  <small>
                    Engenharia e Tecnologia
                  </small>
                </span>

              </div>

            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          PARCEIROS
      ===================================================== */}

      <section
        className="partners section"
        id="parceiros"
      >
        <div className="container">

          <div className="section-heading-label">
            <span className="section-heading-label__text">
              PARCEIROS
            </span>
          </div>

          <div className="partners__header">

            <h2>
              Quem caminha connosco
            </h2>

            <p>
              Escolas, universidades e empresas que apoiam a preparação
              dos estudantes angolanos.
            </p>

          </div>

          <div className="partners-grid">

            <div>Logótipo do parceiro</div>
            <div>Logótipo do parceiro</div>
            <div>Logótipo do parceiro</div>
            <div>Logótipo do parceiro</div>
            <div>Logótipo do parceiro</div>
            <div>Logótipo do parceiro</div>

          </div>

          <a
            href="/contactos"
            className="partners-link"
          >
            A tua instituição quer apoiar a MUKANDA PREPA?{' '}
            <strong>Fala connosco</strong>
            <Arrow />
          </a>

        </div>
      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section
        className="faq section"
        id="faq"
      >
        <div className="container">

          <div className="faq-layout">

            <div className="faq-intro">

              <div className="section-heading-label">
                <span className="section-heading-label__text">
                  PERGUNTAS FREQUENTES
                </span>
              </div>

              <h2>
                Tens dúvidas?
                <br />
                Começa por aqui
              </h2>

              <p>
                As perguntas que mais recebemos desde que a app
                entrou em manutenção.
              </p>

            </div>


            <div className="faq-list">

              <details open>

                <summary>
                  <span>
                    A app MUKANDA PREPA está disponível?
                  </span>

                  <b>−</b>
                </summary>

                <p>
                  A app web está temporariamente em manutenção,
                  enquanto preparamos a app mobile. As maratonas
                  e as aulas online retomam brevemente.
                </p>

              </details>


              <details>

                <summary>
                  <span>
                    Quando voltam as maratonas e as aulas online?
                  </span>

                  <b>+</b>
                </summary>

                <p>
                  A data ainda não foi anunciada.
                  Vamos anunciá-la primeiro na MUKANDA Community
                  e nas nossas redes sociais.
                </p>

              </details>


              <details>

                <summary>
                  <span>
                    A MUKANDA PREPA é gratuita?
                  </span>

                  <b>+</b>
                </summary>

                <p>
                  Na fase gratuita de 2026 (20 Ago – 15 Set 2026)
                  as maratonas e as aulas online foram totalmente
                  gratuitas. As condições da próxima fase serão
                  anunciadas aqui no site.
                </p>

              </details>


              <details>

                <summary>
                  <span>
                    O que muda com a app mobile?
                  </span>

                  <b>+</b>
                </summary>

                <p>
                  Vamos passar de uma app web para uma app mobile,
                  com mais funcionalidades. Os detalhes serão
                  partilhados à medida que o lançamento se aproxima.
                </p>

              </details>


              <details>

                <summary>
                  <span>
                    Posso continuar a estudar enquanto a app está em manutenção?
                  </span>

                  <b>+</b>
                </summary>

                <p>
                  Sim. Na secção Recursos tens exames passados,
                  materiais de preparação, tópicos dos testes
                  e livros, em pastas de acesso livre.
                </p>

              </details>


              <details>

                <summary>
                  <span>
                    Como entro na MUKANDA Community?
                  </span>

                  <b>+</b>
                </summary>

                <p>
                  Carrega em “Entrar na comunidade”.
                  É uma Comunidade do WhatsApp onde partilhamos
                  as novidades das maratonas, das aulas e da nova app.
                </p>

              </details>


              <details>

                <summary>
                  <span>
                    Como falo com a equipa?
                  </span>

                  <b>+</b>
                </summary>

                <p>
                  Pelo WhatsApp +244 945 370 874,
                  pelo email mukandaprepa@gmail.com
                  ou pelo formulário da página Contactos.
                </p>

              </details>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          COMMUNITY CTA
      ===================================================== */}

      <section
        className="community-cta"
        id="contactos"
      >

        <div className="container community-cta__inner">

          <div className="community-cta__content">

            <div className="section-heading-label section-heading-label--light">

             

            </div>

            <h2>
              A conversa continua na MUKANDA
              <br />
              Community
            </h2>

            <p>
              Entra na Comunidade do WhatsApp para saberes em primeira mão
              quando as maratonas voltam e quando sai a app mobile.
            </p>

          </div>


          <div className="community-cta__actions">

            <a
              href={COMMUNITY_URL}
              className="community-btn community-btn--primary"
              target="_blank"
              rel="noreferrer"
            >
              <CommunityIcon />
              <span>Entrar na comunidade</span>
              <ArrowIcon />
            </a>

            <a
              href={WHATSAPP_URL}
              className="community-btn community-btn--phone"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              <span>+244 945 370 874</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}