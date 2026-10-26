import { useState } from "react";
import InterventieList from "./components/InterventieList.jsx";
import { CarFront } from "lucide-react";

// Valoarea de pornire
const INTERVENTII_INITIALE = [
  { id: 1, titlu: "Segmentare bloc motor și reparație chiuloasă", efectuata: true, tip: "mecanica" },
  { id: 2, titlu: "Instalare cameră marșarier", efectuata: false, tip: "electronica" },
  { id: 3, titlu: "Schimb ulei cutie DSG", efectuata: false, tip: "mecanica" }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [interventii, setInterventii] = useState(INTERVENTII_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  // Funcție imutabilă cu map
  function handleToggle(id) {
    setInterventii((prev) =>
      prev.map((i) => (i.id === id ? { ...i, efectuata: !i.efectuata } : i))
    );
  }

  // Funcție imutabilă cu filter
  function handleDelete(id) {
    setInterventii((prev) => prev.filter((i) => i.id !== id));
  }

  // Comutarea temei pe elementul html
  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const inAsteptare = interventii.filter((i) => !i.efectuata).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <CarFront size={40} />
          <h1 style={{ margin: 0 }}>AutoTrack</h1>
        </div>
        <p>Gestionează mentenanța și modificările mașinii tale.</p>
        <p className="app-count">
          {interventii.length} intervenții, dintre care {inAsteptare} în așteptare
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Lista mea</h2>
          <InterventieList 
            interventii={interventii} 
            onToggle={handleToggle} 
            onDelete={handleDelete} 
          />
        </section>
      </main>
    </>
  );
}