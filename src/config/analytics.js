// Medição de visitantes (ESP-39).
//
// Até aqui o site não media nada: sabíamos quem chegava pela pesquisa da
// Google, pelo Search Console, e mais nada — nem quantas pessoas entram, nem
// que páginas lêem, nem de onde vêm. A direcção decidiu a 14 Nov 2026 passar
// a medir, com o Google Analytics.
//
// ── Onde se põe o identificador ────────────────────────────────────────────
// O GA4 dá um identificador com o formato G-XXXXXXXXXX. Escreve-se AQUI, e
// só aqui. Enquanto estiver vazio o site não carrega nada da Google e não
// mostra o aviso de cookies — fica exactamente como estava.
//
// Não é um segredo: vai parar ao JavaScript que o navegador descarrega, como
// tudo o que é VITE_* neste projecto. Identifica a conta, não dá acesso a ela.
export const GA_ID = '';

// ── Consentimento ──────────────────────────────────────────────────────────
// O Analytics guarda cookies no computador de quem visita, por isso só entra
// depois de a pessoa dizer que sim. Enquanto não disser, não se carrega uma
// única linha de código da Google — não basta não enviar dados, não se chama
// sequer o servidor deles.
//
// A escolha fica no navegador da própria pessoa, em localStorage. Não é uma
// definição do site: cada visitante tem a sua, e muda-a quando quiser.
export const CHAVE_CONSENTIMENTO = 'mukandaprepa:cookies';

// O aviso de cookies e o Analytics vivem em sítios diferentes da árvore de
// componentes e não se conhecem. Quando a pessoa aceita, o aviso dispara
// este evento no navegador e o Analytics acorda. Sem isto, quem aceitasse só
// começava a ser contado na página seguinte.
export const EVENTO_CONSENTIMENTO = 'mukandaprepa:consentimento';

// A escolha desta visita, fora do localStorage. Serve para a janela privada
// e para quem bloqueia os dados do sítio: aí o `setItem` rebenta, e sem isto
// a pessoa carregava em "Aceitar" e nada acontecia. Assim vale para esta
// visita; na próxima, como nada ficou guardado, o aviso volta a aparecer.
let escolhaDestaVisita = null;

// Em janela privada, com os dados do sítio bloqueados ou apagados, o
// localStorage pode rebentar à leitura. Daí os try/catch: um site não pode
// deixar de funcionar porque não conseguiu ler uma preferência.
export function lerConsentimento() {
  if (escolhaDestaVisita) return escolhaDestaVisita;
  try {
    const v = localStorage.getItem(CHAVE_CONSENTIMENTO);
    return v === 'sim' || v === 'nao' ? v : null;
  } catch {
    return null;
  }
}

export function guardarConsentimento(valor) {
  escolhaDestaVisita = valor;
  try {
    localStorage.setItem(CHAVE_CONSENTIMENTO, valor);
  } catch {
    // Sem onde guardar, fica só a escolha desta visita e o aviso volta a
    // aparecer da próxima vez. É incómodo, mas é o comportamento certo:
    // na dúvida, perguntar.
  }
  // Fora do try de propósito: a escolha vale mesmo que não se consiga
  // guardar, e o Analytics tem de saber dela já.
  window.dispatchEvent(new Event(EVENTO_CONSENTIMENTO));
}

// O Analytics só entra se houver identificador E consentimento.
export const podeMedir = () => Boolean(GA_ID) && lerConsentimento() === 'sim';
