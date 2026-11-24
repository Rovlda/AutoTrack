import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CarFront } from "lucide-react";
import styles from "./Layout.module.css";

function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Layout() {
  const [tema, setTema] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  useEffect(() => { document.documentElement.dataset.theme = tema; }, [tema]);

  return (
    <>
      <a href="#continut" className={styles.skip}>Sari la conținut</a>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.brand}><CarFront size={40} aria-hidden="true" /><h1>AutoTrack</h1></div>
          <p>Gestionează mentenanța și modificările mașinii tale.</p>
          <nav className={styles.nav} data-testid="nav" aria-label="Navigație principală">
            <NavLink to="/" end className={navClass}>Intervenții</NavLink>
            <NavLink to="/despre" className={navClass}>Despre</NavLink>
          </nav>
          <button className={styles.themeToggle} type="button" aria-pressed={tema === "dark"}
            onClick={() => setTema((actuala) => actuala === "dark" ? "light" : "dark")}>
            {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
          </button>
        </div>
      </header>
      <main id="continut" className={styles.main}><Outlet /></main>
      <footer className={styles.footer}>AutoTrack · Proiect Tehnologii Web · Vlad Robert-Daniel, 633AB</footer>
    </>
  );
}
