import { useSearchParams } from 'react-router-dom';
import './Hero.css';
import './hero/HeroVariantes.css';
import HeroNumeros from './hero/HeroNumeros';
import HeroClassica from './hero/HeroClassica';
import HeroComunidade from './hero/HeroComunidade';
import { lerVarianteHero } from '../prototipo/varianteHero';

// ESP-02 — a hero deixa de pedir inscrição na app (em manutenção) e passa a
// mostrar os números da fase gratuita, com contacto por WhatsApp e entrada
// na comunidade. Há três propostas em comparação; a barra do protótipo
// alterna entre elas (?hero=a|b|c). Escolhida uma, as outras saem.
//
// A hero anterior (texto + imagem + "Inscrever-me agora gratuitamente")
// está no histórico do git, na versão de produção de 16 Ago 2026.
const VARIANTES = { a: HeroNumeros, b: HeroClassica, c: HeroComunidade };

export default function Hero() {
  const [params] = useSearchParams();
  const Variante = VARIANTES[lerVarianteHero(params)];
  return <Variante />;
}
