// Hooks de leitura dos conteúdos (ESP-05). Actualizam-se sozinhos quando o
// painel publica alguma coisa, mesmo noutro separador.
import { useSyncExternalStore } from 'react';
import { EVENTO, lerConteudos } from './conteudos';

function subscrever(callback) {
  window.addEventListener(EVENTO, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(EVENTO, callback);
    window.removeEventListener('storage', callback);
  };
}

export function useConteudos() {
  return useSyncExternalStore(subscrever, lerConteudos, lerConteudos);
}

// Só o que o visitante do site pode ver.
export function usePublicados(tipo) {
  return useConteudos().filter((c) => c.tipo === tipo && c.estado === 'publicado');
}
