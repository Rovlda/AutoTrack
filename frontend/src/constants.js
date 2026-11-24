// Valorile fixe ale modelului, comune formularului, cardului și detaliului.
export const TIPURI = [
  { value: "mecanica", label: "Mecanică" },
  { value: "electronica", label: "Electronică" },
  { value: "estetica", label: "Estetică" },
];
export const ETICHETE_TIP = Object.fromEntries(TIPURI.map((tip) => [tip.value, tip.label]));
export const TITLU_MAX = 100;
