import './Hero.css';
import './hero/HeroVariantes.css';
import HeroNumeros from './hero/HeroNumeros';

// ESP-02 / ESP-26 — a hero mostra os números da edição 2026, com contacto
// por WhatsApp e entrada na comunidade. Deixou de pedir inscrição na app,
// que está em manutenção.
//
// Houve três propostas em comparação durante o protótipo. A direcção ficou
// com esta. As outras duas estão no histórico do git, no ramo `prototipo`,
// até ao commit da ESP-25.
export default function Hero() {
  return <HeroNumeros />;
}
