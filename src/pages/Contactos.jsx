import './Contactos.css';
import {
  CONTACTO,
  MENSAGEM_WHATSAPP_CONTACTO,
  ASSUNTO_EMAIL_CONTACTO,
  COMUNIDADE_URL,
  whatsappCom,
  emailCom,
} from '../config/contactos';
import { IconeComunidade, IconeWhatsApp } from '../components/hero/partes';
import { MarcadorEsp, NotaDev } from '../prototipo/NotasDev';

// ESP-21 — o formulário saiu.
//
// O site passou a ser informativo, sem ligação ao backend: não havia quem
// recebesse as mensagens do formulário sem reacender a API. Por decisão da
// direcção (08 Nov 2026), quem quiser falar connosco usa o WhatsApp — que é
// o canal onde a equipa já responde todos os dias — ou o e-mail.
export default function Contactos() {
  return (
    <>
      <section className="contactos-hero">
        <div className="container">
          <h1>Contacta-nos</h1>
          <p>Tens dúvidas sobre as maratonas, as aulas ou a nova app? Fala connosco.</p>
        </div>
      </section>

      <section className="contactos-conteudo">
        <div className="container contactos-conteudo__grid">
          <div className="contactos-falar">
            <h2>
              Como falar connosco
              <MarcadorEsp
                esp="ESP-21"
                balao="direita"
                texto="Saiu o formulário. O site deixou de ter backend, por isso ninguém receberia as mensagens. Fica o WhatsApp, onde a equipa responde todos os dias, e o e-mail."
              />
            </h2>
            <p className="contactos-falar__texto">
              O WhatsApp é o caminho mais rápido — é onde a equipa está todos os dias.
              Se preferires escrever, o e-mail também chega a nós.
            </p>

            <div className="contactos-falar__botoes">
              <a
                href={whatsappCom(MENSAGEM_WHATSAPP_CONTACTO)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary contactos-falar__principal"
              >
                <IconeWhatsApp /> Falar no WhatsApp
              </a>
              <a
                href={emailCom(CONTACTO.emailSuporte, ASSUNTO_EMAIL_CONTACTO)}
                className="btn btn-outline contactos-falar__secundario"
              >
                Enviar e-mail
              </a>
            </div>

            <div className="contactos-falar__comunidade">
              <p>Queres acompanhar tudo em primeira mão?</p>
              <a href={COMUNIDADE_URL} target="_blank" rel="noreferrer">
                <IconeComunidade /> Entrar na MUKANDA Community
              </a>
            </div>
          </div>

          <div className="contactos-info">
            <div className="contactos-info__card">
              <h3>Morada</h3>
              <p>Luanda, Angola</p>
            </div>
            <div className="contactos-info__card">
              <h3>WhatsApp</h3>
              <a href={CONTACTO.whatsappLink} target="_blank" rel="noreferrer">
                {CONTACTO.telefoneLegivel}
              </a>
            </div>
            <div className="contactos-info__card">
              <h3>Apoio ao estudante</h3>
              <a href={`mailto:${CONTACTO.emailSuporte}`}>{CONTACTO.emailSuporte}</a>
            </div>
            <div className="contactos-info__card">
              <h3>E-mail geral</h3>
              <a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a>
            </div>

            <div className="contactos-mapa">
              <iframe
                title="Localização MUKANDA PREPA"
                src="https://www.google.com/maps?q=Luanda,Angola&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container contactos-nota">
        <NotaDev esp="ESP-21" titulo="Formulário retirado">
          <ul>
            <li>O site deixou de depender de <code>api.mukandaprepa.com</code>. O ficheiro <code>src/config/api.js</code> foi apagado — não havia mais nada a usá-lo.</li>
            <li>Sem backend, não há caixa de entrada a receber mensagens nem CORS para configurar. Um link de WhatsApp não avaria.</li>
            <li>Mensagens e assuntos já preenchidos em <code>src/config/contactos.js</code>, para se mudarem num sítio só.</li>
          </ul>
        </NotaDev>
      </div>
    </>
  );
}
