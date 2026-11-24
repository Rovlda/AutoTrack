import styles from "./DesprePage.module.css";

export default function DesprePage() {
  return (
    <section className={`panel ${styles.about}`}>
      <h2>Despre AutoTrack</h2>
      <p>AutoTrack este o aplicație pentru evidența mentenanței, reparațiilor și modificărilor unei mașini, realizată în cadrul proiectului de Tehnologii Web.</p>
      <p>Poți adăuga intervenții de mecanică, electronică sau estetică, le poți marca drept efectuate și le poți șterge. Titlul fiecărei intervenții deschide pagina sa de detaliu.</p>
      <p>Aplicația folosește React, Vite, React Router și CSS Modules. Datele sunt păstrate în db.json și accesate prin API-ul de test json-server.</p>
      <p>Autor: Vlad Robert-Daniel · Grupa 633AB</p>
    </section>
  );
}
