import { createContext, useContext } from 'react';

export const NotasContext = createContext({ ativas: true, alternar: () => {} });
export const useNotas = () => useContext(NotasContext);
