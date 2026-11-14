// Carrega o Google Analytics, e só depois de haver autorização (ESP-39).
//
// Não é um componente que se veja: não desenha nada. Vive no topo da
// aplicação a fazer três coisas.
//
// 1. CARREGAR, UMA VEZ SÓ. O código da Google só é pedido quando há
//    identificador configurado e a pessoa disse que sim. Sem isso, o
//    navegador não chega a falar com os servidores deles.
//
// 2. CONTAR AS PÁGINAS CERTAS. Este site é uma aplicação de página única: o
//    navegador carrega o HTML uma vez e daí em diante troca o conteúdo sem
//    recarregar. O Analytics, deixado por sua conta, contaria uma visita à
//    entrada e mais nenhuma — quem lesse seis notícias apareceria como tendo
//    visto uma página.
//
// 3. CONTÁ-LAS COM O NOME CERTO. Aqui esteve um defeito que só se viu a
//    testar: `/contactos` era contada com o título da página inicial. As
//    páginas são carregadas à parte, e na primeira visita a uma delas o
//    <head> ainda tem o título da anterior quando a rota já mudou. Por isso
//    não se adivinha o momento — espera-se pelo aviso do `useMeta`.
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { EVENTO_META } from '../config/seo';
import { GA_ID, EVENTO_CONSENTIMENTO, podeMedir } from '../config/analytics';

// Rede de segurança: se por alguma razão o aviso do título não chegar, a
// visita é contada na mesma passado este tempo, com o título que houver.
// Mais vale uma visita com o nome errado do que uma visita perdida.
const ESPERA_MAXIMA = 800;

function carregarGoogle() {
  if (document.getElementById('ga-script')) return;

  const s = document.createElement('script');
  s.id = 'ga-script';
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  // Tem de ser `arguments` e não (...args): é assim que o gtag da Google
  // espera receber as chamadas, e passar um array em vez disso parte-o.
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  // send_page_view: false porque somos nós a enviar, com o caminho e o
  // título certos. Sem isto, a entrada era contada duas vezes.
  window.gtag('config', GA_ID, { send_page_view: false });
}

export default function Analytics() {
  const { pathname, search } = useLocation();
  // O que já foi enviado, para o aviso do título e a rede de segurança não
  // contarem a mesma página duas vezes.
  const ultimoEnvio = useRef(null);

  useEffect(() => {
    const enviar = () => {
      if (!podeMedir()) return;

      const marca = `${pathname}${search}|${document.title}`;
      if (marca === ultimoEnvio.current) return;
      ultimoEnvio.current = marca;

      carregarGoogle();
      window.gtag?.('event', 'page_view', {
        page_path: pathname + search,
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    const aPrazo = setTimeout(enviar, ESPERA_MAXIMA);
    window.addEventListener(EVENTO_META, enviar);
    // Quem aceita a meio da visita tem de ser contado já, e não só na
    // página seguinte.
    window.addEventListener(EVENTO_CONSENTIMENTO, enviar);

    return () => {
      clearTimeout(aPrazo);
      window.removeEventListener(EVENTO_META, enviar);
      window.removeEventListener(EVENTO_CONSENTIMENTO, enviar);
    };
  }, [pathname, search]);

  return null;
}
