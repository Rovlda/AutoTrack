import { useEffect, useRef, useState } from "react";
import InterventieList from "../components/InterventieList.jsx";
import InterventieForm from "../components/InterventieForm.jsx";
import { createInterventie, deleteInterventie, fetchInterventii, updateInterventie } from "../api.js";
import styles from "./InterventiiPage.module.css";

export default function InterventiiPage() {
  const [interventii, setInterventii] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busyIds, setBusyIds] = useState([]);
  const operatii = useRef(new Set());

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

  async function handleAdd(interventie) {
    const creat = await createInterventie(interventie);
    setInterventii((prev) => [...prev, creat]);
  }

  // Blocăm operațiile concurente asupra aceluiași card.
  async function modificaInterventie(id, sterge = false) {
    const interventie = interventii.find((i) => i.id === id);
    if (!interventie || operatii.current.has(id)) return;
    operatii.current.add(id);
    setBusyIds((prev) => [...prev, id]);
    setError(null);
    try {
      if (sterge) {
        await deleteInterventie(id);
        setInterventii((prev) => prev.filter((i) => i.id !== id));
      } else {
        const actualizat = await updateInterventie(id, { efectuata: !interventie.efectuata });
        setInterventii((prev) => prev.map((i) => i.id === id ? actualizat : i));
      }
    } catch (err) {
      setError(`Modificarea nu a fost salvată: ${err.message}`);
    } finally {
      operatii.current.delete(id);
      setBusyIds((prev) => prev.filter((busyId) => busyId !== id));
    }
  }

  function handleToggle(id) {
    return modificaInterventie(id);
  }

  function handleDelete(id) {
    return modificaInterventie(id, true);
  }


  const inAsteptare = interventii.filter((i) => !i.efectuata).length;
  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Adaugă intervenție</h2>
        <InterventieForm onAdd={handleAdd} disabled={loading} />
      </section>
      <section className="panel">
        <h2>Lista mea</h2>
        <p className={styles.summary}>{interventii.length} intervenții, dintre care {inAsteptare} în așteptare</p>
        {loading && <p className="info" role="status" data-testid="loading">Se încarcă lista de intervenții...</p>}
        {error && <p className="error" role="alert" data-testid="error">{error}</p>}
        {!loading && <InterventieList interventii={interventii} onToggle={handleToggle} onDelete={handleDelete} busyIds={busyIds} />}
      </section>
    </div>
  );
}
