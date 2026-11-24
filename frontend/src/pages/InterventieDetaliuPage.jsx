import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchInterventie } from "../api.js";
import { ETICHETE_TIP } from "../constants.js";
import styles from "./InterventieDetaliuPage.module.css";

export default function InterventieDetaliuPage() {
  const { id } = useParams();
  // Asociem răspunsul cu id-ul cerut: schimbarea URL-ului nu arată datele vechi.
  const [rezultat, setRezultat] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    fetchInterventie(id, { signal: controller.signal })
      .then((interventie) => {
        if (!controller.signal.aborted) setRezultat({ id, interventie, error: null });
      })
      .catch((error) => {
        if (!controller.signal.aborted) setRezultat({ id, interventie: null, error });
      });
    return () => controller.abort();
  }, [id]);

  if (!rezultat || rezultat.id !== id) {
    return <p className="info" role="status" data-testid="loading">Se încarcă intervenția...</p>;
  }
  const { interventie, error } = rezultat;
  if (error) {
    return (
      <section className={`panel ${styles.detail}`}>
        <h2>Intervenție indisponibilă</h2>
        <p className="error" role="alert" data-testid="error">
          {error.status === 404
            ? "Intervenția cerută nu există (404)."
            : "Intervenția nu a putut fi încărcată. Verifică dacă serverul API este pornit și încearcă din nou."}
        </p>
        <Link to="/" className={styles.back}>Înapoi la listă</Link>
      </section>
    );
  }
  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>Înapoi la listă</Link>
      <h2 className={interventie.efectuata ? styles.done : undefined} data-testid="detail-title">{interventie.titlu}</h2>
      <dl className={styles.fields}>
        <dt>Tip</dt><dd><span className={`badge badge-${interventie.tip}`}>{ETICHETE_TIP[interventie.tip] ?? interventie.tip}</span></dd>
        <dt>Status</dt><dd>{interventie.efectuata ? "Efectuată" : "În așteptare"}</dd>
        <dt>ID</dt><dd>{interventie.id}</dd>
        <dt>Sistem</dt><dd>{interventie.sistem || "Nespecificat"}</dd>
        <dt>Descriere</dt><dd>{interventie.descriere || "Nu a fost adăugată o descriere pentru această intervenție."}</dd>
      </dl>
    </section>
  );
}
