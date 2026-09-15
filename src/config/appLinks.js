// Ligações do site para a APP.
//
// NOVA VERSÃO (ESP-01): a app web está em manutenção enquanto a MUKANDA PREPA
// passa para uma app mobile. Todos os botões que antes abriam a app web
// (Login, Inscrever-me, Criar conta…) levam agora para uma página interna do
// site que explica a situação. Quando a app mobile sair, muda-se AQUI o
// destino — por exemplo, para a página de download ou para as lojas.

export const ROTA_ENTRAR_NA_APP = '/entrar-na-app';

// Mantidos por compatibilidade com os componentes existentes: apontam todos
// para a página de manutenção.
export const APP_URL = ROTA_ENTRAR_NA_APP;
export const APP_LOGIN = ROTA_ENTRAR_NA_APP;
export const APP_REGISTO = ROTA_ENTRAR_NA_APP;
export const appRegisto = () => ROTA_ENTRAR_NA_APP;

// Links externos abrem num separador novo; links internos navegam no mesmo.
export const ehLinkExterno = (href) => /^https?:\/\//i.test(String(href || ''));

// Espalhar sobre um <a>: <a href={x} {...propsLink(x)}>
export const propsLink = (href) =>
  ehLinkExterno(href) ? { target: '_blank', rel: 'noreferrer' } : {};
