
import InterventieList from "./components/InterventieList.jsx";

const interventii = [
  { id: 1, titlu: "Segmentare bloc motor și reparație chiuloasă", efectuata: true, tip: "mecanica" },
  { id: 2, titlu: "Instalare cameră marșarier", efectuata: false, tip: "electronica" },
  { id: 3, titlu: "Schimb ulei cutie DSG", efectuata: false, tip: "mecanica" }
];

export default function App() {
  const inAsteptare = interventii.filter((i) => !i.efectuata).length;

  return (
    <>
      <header className="app-header">
        <h1>AutoTrack</h1>
        <p>Gestionează mentenanța și modificările mașinii tale.</p>
        <p className="app-count">
          {interventii.length} intervenții, dintre care {inAsteptare} în așteptare
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Lista mea</h2>
          <InterventieList interventii={interventii} />
        </section>
      </main>
    </>
  );
}