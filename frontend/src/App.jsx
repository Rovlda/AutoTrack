import { useEffect, useState } from "react";
import InterventieList from "./components/InterventieList.jsx";
import { CarFront } from "lucide-react";
import { fetchInterventii } from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [interventii, setInterventii] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  useEffect(() => {
    let ignore = false;
    
    async function load() {
      try {
        const data = await fetchInterventii();
        if (!ignore) setInterventii(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    
    load();
    return () => { ignore = true; };
  }, []);

  function handleToggle(id) {
    setInterventii((prev) =>
      prev.map((i) => (i.id === id ? { ...i, efectuata: !i.efectuata } : i))
    );
  }

  function handleDelete(id) {
    setInterventii((prev) => prev.filter((i) => i.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const inAsteptare = interventii.filter((i) => !i.efectuata).length;

  return (
    <>
      <header className="app-header">
        <button className="theme-toggle" onClick={handleTema} aria-pressed={tema === "dark"}>
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
          
          {loading && <p className="info">Se încarcă lista de intervenții...</p>}
          
          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}
          
          {!loading && !error && (
            <InterventieList 
              interventii={interventii} 
              onToggle={handleToggle} 
              onDelete={handleDelete} 
            />
          )}
        </section>
      </main>
    </>
  );
}