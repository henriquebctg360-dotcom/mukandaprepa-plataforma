import './HomeSections.css';

const COMMUNITY_URL =
  'https://wa.me/244945370874?text=Ol%C3%A1!%20Quero%20entrar%20na%20MUKANDA%20Community.';

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function CheckIcon() {
  return (
    <span className="home-check" aria-hidden="true">
      ✓
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

export default function HomeSections() {
  return (
    <main className="home-sections">

      {/* =========================
          QUEM SOMOS
      ========================== */}
      <section className="home-about section" id="sobre">
        <div className="container">

          <div className="section-heading-label">
            <span className="section-heading-label__text">QUEM SOMOS</span>
         
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
                <a href="#missao" className="home-btn home-btn--primary">
                  Conhecer a MUKANDA PREPA
                  <ArrowIcon />
                </a>

                <a href="#missao" className="home-btn home-btn--secondary">
                  A nossa missão
                  <ArrowIcon />
                </a>
              </div>

            </div>

            <div className="team-grid">

              <article className="team-card">
                <div className="team-avatar">
                  HC
                </div>
                <h3>Henrique Catraio</h3>
                <p>CEO &amp; Fundador</p>
              </article>

              <article className="team-card">
                <div className="team-avatar">
                  WS
                </div>
                <h3>Walter Sampaio</h3>
                <p>Co-fundador e Gestor de Redes Sociais</p>
              </article>

              <article className="team-card">
                <div className="team-avatar">
                  AB
                </div>
                <h3>Armando Baptista</h3>
                <p>Director de Administração e Gestão</p>
              </article>

              <article className="team-card">
                <div className="team-avatar">
                  TE
                </div>
                <h3>Tadeu Epalanga</h3>
                <p>Director de Marketing</p>
              </article>

            </div>

          </div>
        </div>
      </section>


      {/* =========================
    PONTO DE SITUAÇÃO
========================== */}
<section className="status section" id="situacao">
  <div className="container">

    <div className="section-heading-label">
      <span className="section-heading-label__text">
        PONTO DE SITUAÇÃO
      </span>

    
    </div>

    <div className="section-header-row">
      <div>
        <h2>O que está a acontecer na MUKANDA PREPA</h2>
      </div>

      <a href="#app" className="text-link">
        Saber mais sobre a nova app <Arrow />
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

      {/* =========================
          NOTÍCIAS
      ========================== */}
      <section className="news section" id="noticias">
        <div className="container">

          <div className="section-heading-label">
            <span className="section-heading-label__text">NOTÍCIAS</span>
           
          </div>

          <div className="section-header-row">
            <div>
              <h2>As últimas novidades</h2>
              <p>Textos de exemplo</p>
            </div>

            <a href="#noticias" className="text-link">
              Ver todas as notícias <Arrow />
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


      {/* =========================
          ARTIGOS
      ========================== */}
      <section className="articles section" id="artigos">
        <div className="container">

          <div className="section-heading-label">
            <span className="section-heading-label__text">ARTIGOS</span>
          
          </div>

          <div className="section-header-row">
            <div>
              <h2>Dicas e explicações para o exame</h2>
              <p>
                Conteúdo pedagógico gratuito, organizado por matéria e nível.
              </p>
            </div>

            <a href="#artigos" className="text-link">
              Ver todos os artigos <Arrow />
            </a>
          </div>

          <div className="articles-list">

            <article className="article-row">
              <div>
                <span className="article-subject">Matemática</span>
                <span className="article-level">Básico</span>
              </div>

              <h3>Como resolver equações do 2º grau sem erros</h3>

              <time>02 Jul 2026</time>

              <ArrowIcon />
            </article>

            <article className="article-row">
              <div>
                <span className="article-subject">Física</span>
                <span className="article-level">Básico</span>
              </div>

              <h3>
                As leis de Newton explicadas com exemplos do dia-a-dia
              </h3>

              <time>28 Jun 2026</time>

              <ArrowIcon />
            </article>

            <article className="article-row">
              <div>
                <span className="article-subject">Química</span>
                <span className="article-level">Básico</span>
              </div>

              <h3>
                Tabela periódica: truques para memorizar os elementos
              </h3>

              <time>25 Jun 2026</time>

              <ArrowIcon />
            </article>

          </div>
        </div>
      </section>


      {/* =========================
          RECURSOS
      ========================== */}
      <section className="resources section" id="recursos">
        <div className="container">

          <div className="section-heading-label">
            <span className="section-heading-label__text">
              RECURSOS GRATUITOS
            </span>
        
          </div>

          <div className="section-header-row">
            <div>
              <h2>
                Continua a estudar enquanto preparamos a nova app
              </h2>

              <p>
                Exames passados, materiais e livros reunidos pela equipa
                pedagógica, sempre disponíveis.
              </p>
            </div>

            <a href="#recursos" className="text-link">
              Ver recursos <Arrow />
            </a>
          </div>

          <div className="resources-grid">

            {[
              [
                '01',
                'Exames passados',
                'Provas de anos anteriores para praticares com o formato real do exame de acesso.',
              ],
              [
                '02',
                'Materiais de preparação',
                'Fichas, resumos e exercícios organizados por matéria, para estudares ao teu ritmo.',
              ],
              [
                '03',
                'Tópicos dos testes',
                'Os temas que saem nos testes de acesso, para saberes onde concentrar o estudo.',
              ],
              [
                '04',
                'Livros',
                'Manuais e livros de apoio às disciplinas de acesso, em formato digital.',
              ],
            ].map(([number, title, text]) => (
              <article className="resource-card" key={number}>
                <div className="resource-icon">{number}</div>

                <h3>{title}</h3>

                <p>{text}</p>

                <a href="#recursos">
                  Abrir pasta <Arrow />
                </a>
              </article>
            ))}

          </div>
        </div>
      </section>


      {/* =========================
          TESTEMUNHOS
      ========================== */}
      <section className="testimonials section" id="testemunhos">
        <div className="container">

          <div className="section-heading-label">
            <span className="section-heading-label__text">
              TESTEMUNHOS
            </span>
       
          </div>

          <div className="section-header-row">
            <div>
              <h2>O que dizem os estudantes</h2>
              <p>Testemunhos de exemplo</p>
            </div>
          </div>

          <div className="testimonials-grid">

            <article className="testimonial-card">
              <span className="quote-mark">“</span>

              <p>
                As maratonas mostraram-me exactamente onde eu falhava.
                Na aula de correcção percebi erros que andava a repetir
                há meses.
              </p>

              <div>
                <strong>L</strong>
                <span>
                  Estudante de Luanda
                  <small>Engenharia e Tecnologia</small>
                </span>
              </div>
            </article>

            <article className="testimonial-card">
              <span className="quote-mark">“</span>

              <p>
                Estudei pelo telemóvel, com dados móveis, e consegui
                acompanhar tudo. Ter questões de exames reais fez toda
                a diferença.
              </p>

              <div>
                <strong>B</strong>
                <span>
                  Estudante de Benguela
                  <small>Ciências Sociais</small>
                </span>
              </div>
            </article>

            <article className="testimonial-card">
              <span className="quote-mark">“</span>

              <p>
                O melhor foi a comunidade: tirar dúvidas com outros
                estudantes e com os professores, no mesmo sítio.
              </p>

              <div>
                <strong>H</strong>
                <span>
                  Estudante do Huambo
                  <small>Engenharia e Tecnologia</small>
                </span>
              </div>
            </article>

          </div>
        </div>
      </section>


      {/* =========================
          PARCEIROS
      ========================== */}
      <section className="partners section" id="parceiros">
        <div className="container">

          <div className="section-heading-label">
            <span className="section-heading-label__text">PARCEIROS</span>
            
          </div>

          <div className="partners__header">
            <h2>Quem caminha connosco</h2>

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
          </div>

          <a href="#contactos" className="partners-link">
            A tua instituição quer apoiar a MUKANDA PREPA?
            <Arrow />
          </a>

        </div>
      </section>


      {/* =========================
          FAQ
      ========================== */}
      <section className="faq section" id="faq">
        <div className="container">

          <div className="section-heading-label">
            <span className="section-heading-label__text">
              PERGUNTAS FREQUENTES
            </span>
   
          </div>

          <div className="section-header-row">
            <div>
              <h2>Tens dúvidas? Começa por aqui</h2>

              <p>
                As perguntas que mais recebemos desde que a app entrou
                em manutenção.
              </p>
            </div>
          </div>

          <div className="faq-list">

            <details open>
              <summary>
                <span>A app MUKANDA PREPA está disponível?</span>
                <b>−</b>
              </summary>

              <p>
                A app web está temporariamente em manutenção, enquanto
                preparamos a app mobile. As maratonas e as aulas online
                retomam brevemente.
              </p>
            </details>

            <details>
              <summary>
                <span>Quando voltam as maratonas e as aulas online?</span>
                <b>+</b>
              </summary>
            </details>

            <details>
              <summary>
                <span>A MUKANDA PREPA é gratuita?</span>
                <b>+</b>
              </summary>
            </details>

            <details>
              <summary>
                <span>O que muda com a app mobile?</span>
                <b>+</b>
              </summary>
            </details>

            <details>
              <summary>
                <span>
                  Posso continuar a estudar enquanto a app está em manutenção?
                </span>
                <b>+</b>
              </summary>
            </details>

            <details>
              <summary>
                <span>Como entro na MUKANDA Community?</span>
                <b>+</b>
              </summary>
            </details>

            <details>
              <summary>
                <span>Como falo com a equipa?</span>
                <b>+</b>
              </summary>
            </details>

          </div>
        </div>
      </section>


      {/* =========================
          COMMUNITY CTA
      ========================== */}
      <section className="community-cta" id="contactos">
        <div className="container community-cta__inner">

          <div>
            <div className="section-heading-label section-heading-label--light">
              <span className="section-heading-label__text">
                A CONVERSA CONTINUA NA MUKANDA COMMUNITY
              </span>
             
            </div>

            <h2>Entra na Comunidade do WhatsApp</h2>

            <p>
              Entra na Comunidade do WhatsApp para saberes em primeira
              mão quando as maratonas voltam e quando sai a app mobile.
            </p>
          </div>

          <a
            href={COMMUNITY_URL}
            className="home-btn home-btn--white"
            target="_blank"
            rel="noreferrer"
          >
            Entrar na comunidade
            <ArrowIcon />
          </a>

        </div>
      </section>

    </main>
  );
}