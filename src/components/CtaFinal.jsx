import './CtaFinal.css';
import { APP_REGISTO } from '../config/appLinks';
import { ComMarcador } from '../prototipo/NotasDev';

export default function CtaFinal() {
  return (
    <section className="cta-final">
      <div className="container cta-final__inner">
        <h2>Começa hoje, é grátis!</h2>
        <ComMarcador esp="ESP-01" texto="Antes abria a app web num separador novo. Agora leva à página /entrar-na-app (app em manutenção).">
          <a href={APP_REGISTO} className="btn btn-white">Criar Conta</a>
        </ComMarcador>
      </div>
    </section>
  );
}
