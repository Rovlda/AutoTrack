import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <section className={`panel ${styles.notFound}`} data-testid="not-found">
      <p className={styles.code}>404</p>
      <h2>Pagina nu există</h2>
      <p className="info">Adresa cerută nu corespunde unei pagini AutoTrack.</p>
      <Link to="/">Înapoi la intervenții</Link>
    </section>
  );
}
