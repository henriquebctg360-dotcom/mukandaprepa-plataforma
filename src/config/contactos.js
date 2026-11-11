// Contactos oficiais do MUKANDA PREPA, num sítio só.
//
// Estavam espalhados por Footer, Contactos e Planos — e com dois números
// diferentes, o que obrigava a caçar ocorrências sempre que mudavam. Alterar
// aqui muda em todo o site.

// Formato internacional, só dígitos (usado em links wa.me e tel:)
const TELEFONE_DIGITOS = '244945370874';

export const CONTACTO = {
  // Como aparece escrito ao visitante
  telefoneLegivel: '+244 945 370 874',
  // Para o atributo href="tel:"
  telefoneLink: `tel:+${TELEFONE_DIGITOS}`,
  // Conversa de WhatsApp
  whatsappLink: `https://wa.me/${TELEFONE_DIGITOS}`,
  // Endereço real e activo. O domínio próprio ainda não existe — quando a
  // Fluxo o entregar, muda-se AQUI (e só aqui) para geral@mukandaprepa.ao.
  email: 'mukandaprepa@gmail.com',
  // Caixa de apoio aos estudantes (Edital do Reforço Universitário, Nov 2026).
  emailSuporte: 'mukandaprepasuporte@gmail.com',
};

// WhatsApp com mensagem já preenchida — para os botões de "falar connosco".
export const whatsappCom = (mensagem) =>
  mensagem
    ? `${CONTACTO.whatsappLink}?text=${encodeURIComponent(mensagem)}`
    : CONTACTO.whatsappLink;

// ── Comunidade (ESP-02) ─────────────────────────────────────────────────────
// Link de convite da MUKANDA Community — a Comunidade do WhatsApp.
// ESP-21 (08 Nov 2026): preenchido com o endereço oficial, o mesmo que consta
// das notícias e do Edital do Reforço Universitário. Até aqui estava vazio e
// o botão "Entrar na comunidade" abria uma conversa com a equipa.
export const COMUNIDADE_URL = 'https://chat.whatsapp.com/CI2jGDNAewi3RHqBRSptjm';

export const linkComunidade = () =>
  COMUNIDADE_URL || whatsappCom('Olá! Quero entrar na MUKANDA Community.');

export const MENSAGEM_WHATSAPP_HERO = 'Olá! Vim pelo site da MUKANDA PREPA e tenho uma pergunta.';

// Mensagens já preenchidas para a página de Contactos (ESP-21).
export const MENSAGEM_WHATSAPP_CONTACTO = 'Olá! Vim pela página de contactos do site da MUKANDA PREPA.';
export const ASSUNTO_EMAIL_CONTACTO = 'Contacto pelo site da MUKANDA PREPA';

// mailto: com o assunto já preenchido.
export const emailCom = (endereco, assunto) =>
  `mailto:${endereco}${assunto ? `?subject=${encodeURIComponent(assunto)}` : ''}`;

// ── Redes sociais (ESP-33) ──────────────────────────────────────────────────
// Perfis oficiais, confirmados pela equipa a 3-4 Ago 2026 e reconfirmados pela
// direcção a 11 Nov 2026. Estavam escritos à mão dentro do Footer.jsx, e os
// dois primeiros repetidos noutro formato em noticias.js — alterar um endereço
// obrigava a caçar ocorrências. Agora mudam-se aqui, e só aqui.
//
// A ordem é a que aparece no site. O `id` escolhe o ícone (ver IconesRedes.jsx).
export const REDES = [
  {
    id: 'instagram',
    nome: 'Instagram',
    conta: '@mukandaprepa',
    url: 'https://www.instagram.com/mukandaprepa/',
  },
  {
    id: 'facebook',
    nome: 'Facebook',
    conta: 'MUKANDA PREPA',
    url: 'https://www.facebook.com/profile.php?id=61591268696768',
  },
  {
    id: 'tiktok',
    nome: 'TikTok',
    conta: '@mukandaprepa',
    url: 'https://www.tiktok.com/@mukandaprepa',
  },
  {
    // O endereço público da página. O /admin/dashboard que circulou
    // internamente só funciona para quem a administra.
    id: 'linkedin',
    nome: 'LinkedIn',
    conta: 'MUKANDA PREPA',
    url: 'https://www.linkedin.com/company/mukanda-prepa/',
  },
];

export const redePorId = (id) => REDES.find((r) => r.id === id);
