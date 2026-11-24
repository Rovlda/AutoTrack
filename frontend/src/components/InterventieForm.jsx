import { useRef, useState } from "react";

import { TIPURI, TITLU_MAX } from "../constants.js";
import styles from "./InterventieForm.module.css";

export default function InterventieForm({ onAdd, disabled = false }) {
  const [titlu, setTitlu] = useState("");
  const [tip, setTip] = useState("mecanica");
  const [eroare, setEroare] = useState("");
  const [campInvalid, setCampInvalid] = useState("");
  const [trimite, setTrimite] = useState(false);
  const inCurs = useRef(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (inCurs.current || disabled) return;
    const titluCurat = titlu.trim();
    let mesaj = "";
    let camp = "";
    if (!titluCurat) {
      mesaj = "Titlul intervenției este obligatoriu.";
      camp = "titlu";
    } else if (titluCurat.length > TITLU_MAX) {
      mesaj = `Titlul poate avea maximum ${TITLU_MAX} de caractere.`;
      camp = "titlu";
    } else if (!TIPURI.some((t) => t.value === tip)) {
      mesaj = "Alege un tip valid de intervenție.";
      camp = "tip";
    }
    setEroare(mesaj);
    setCampInvalid(camp);
    if (mesaj) return;

    inCurs.current = true;
    setTrimite(true);
    try {
      // Nu trimitem id: acesta este atribuit de server.
      await onAdd({ titlu: titluCurat, tip, efectuata: false });
      setTitlu("");
      setTip("mecanica");
    } catch (err) {
      setEroare(`Intervenția nu a fost salvată: ${err.message}`);
    } finally {
      inCurs.current = false;
      setTrimite(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate
      data-testid="form" aria-busy={trimite}>
      <label htmlFor="interventie-titlu">Titlul intervenției</label>
      <input id="interventie-titlu" type="text" value={titlu}
        onChange={(e) => setTitlu(e.target.value)}
        placeholder="Ex: Schimb ulei motor" required
        disabled={trimite || disabled}
        aria-invalid={campInvalid === "titlu"}
        aria-describedby={campInvalid === "titlu" ? "form-error" : "titlu-ajutor"}
        data-testid="form-title" />
      <small id="titlu-ajutor">Maximum 100 de caractere, fără spațiile de la capete.</small>
      <label htmlFor="interventie-tip">Tipul intervenției</label>
      <select id="interventie-tip" value={tip}
        onChange={(e) => setTip(e.target.value)} disabled={trimite || disabled}
        aria-invalid={campInvalid === "tip"}
        aria-describedby={campInvalid === "tip" ? "form-error" : undefined}
        data-testid="form-tip">
        {TIPURI.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
      </select>
      {eroare && <p id="form-error" className="error" role="alert"
        data-testid="form-error">{eroare}</p>}
      <button className="btn" type="submit" disabled={trimite || disabled} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă intervenția"}
      </button>
    </form>
  );
}
