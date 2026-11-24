import { Link } from "react-router-dom";
import { Wrench, Zap, Sparkles, CheckCircle2, Circle } from "lucide-react";
import { ETICHETE_TIP } from "../constants.js";
import styles from "./InterventieCard.module.css";

const ICONITE_TIP = { mecanica: Wrench, electronica: Zap, estetica: Sparkles };

export default function InterventieCard({ interventie, onToggle, onDelete, busy = false }) {
  const IconitaTip = ICONITE_TIP[interventie.tip] ?? Wrench;
  return (
    <li data-testid="item" data-id={interventie.id} aria-busy={busy}
      className={interventie.efectuata ? `${styles.card} ${styles.done}` : styles.card}>
      <div className={styles.main}>
        <input type="checkbox" data-testid="item-toggle" disabled={busy}
          checked={interventie.efectuata} onChange={() => onToggle(interventie.id)}
          aria-label={`Marchează ${interventie.titlu}`} />
        <div>
          <h3><Link to={`/interventii/${encodeURIComponent(interventie.id)}`} className={styles.title} data-testid="item-link">
            {interventie.titlu}
          </Link></h3>
          <span className={`badge badge-${interventie.tip}`}>
            <IconitaTip size={14} aria-hidden="true" />{ETICHETE_TIP[interventie.tip] ?? interventie.tip}
          </span>
        </div>
      </div>
      <div className={styles.actions}>
        <span className={styles.status} role="img" aria-label={interventie.efectuata ? "Efectuată" : "În așteptare"}>
          {interventie.efectuata ? <CheckCircle2 size={18} /> : <Circle size={18} />}
        </span>
        <button className="btn-danger" type="button" data-testid="item-delete" disabled={busy}
          onClick={() => onDelete(interventie.id)} aria-label={`Șterge ${interventie.titlu}`}>Șterge</button>
      </div>
    </li>
  );
}
