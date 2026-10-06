// 1. Datele de test și valorile permise
const interventii = [
    { id: 1, titlu: "Segmentare bloc motor și reparație chiuloasă", efectuata: true, tip: "mecanica" },
    { id: 2, titlu: "Instalare cameră marșarier", efectuata: false, tip: "electronica" },
    { id: 3, titlu: "Schimb ulei cutie DSG", efectuata: false, tip: "mecanica" }
];

const TIPURI = ["mecanica", "electronica", "estetica"];

// 2. Funcțiile de bază (Imutabile)
function listeazaTitluri(lista) {
    return lista.map((i) => i.titlu);
}

function numaraInAsteptare(lista) {
    return lista.filter((i) => !i.efectuata).length;
}

function cautaDupaTitlu(lista, text) {
    return lista.filter((i) => i.titlu.toLowerCase().includes(text.toLowerCase()));
}

function nextId(lista) {
    return lista.reduce((max, i) => Math.max(max, i.id), 0) + 1;
}

function adaugaInterventie(lista, titlu, tip = "mecanica") {
    const titluCurat = titlu.trim();
    
    // Validare
    if (!titluCurat) {
        console.log("Eroare: Titlul nu poate fi gol.");
        return lista;
    }
    if (!TIPURI.includes(tip)) {
        console.log(`Eroare: Tipul invalid. Permise: ${TIPURI.join(", ")}`);
        return lista;
    }

    const nou = { 
        id: nextId(lista), 
        titlu: titluCurat, 
        efectuata: false, 
        tip: tip 
    };
    return [...lista, nou];
}

function comutaEfectuata(lista, id) {
    return lista.map((i) => i.id === id ? { ...i, efectuata: !i.efectuata } : i);
}

function stergeInterventie(lista, id) {
    return lista.filter((i) => i.id !== id);
}

// 3. Testele manuale în consolă
console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(interventii).join(", "));
console.log("În așteptare (active):", numaraInAsteptare(interventii));
console.log("Căutare 'ulei':", listeazaTitluri(cautaDupaTitlu(interventii, "ulei")).join(", "));

console.log("--- Adăugare ---");
let lista = adaugaInterventie(interventii, "Schimb plăcuțe frână", "mecanica");
console.log("Lista nouă:", lista.length, "intervenții");
console.log("Originalul a rămas cu:", interventii.length, "intervenții");

console.log("--- Modificare și ștergere ---");
lista = comutaEfectuata(lista, 2);
console.log("După bifarea id 2 (Cameră), în așteptare:", numaraInAsteptare(lista));

lista = stergeInterventie(lista, 3);
console.log("După ștergerea id 3 (Ulei DSG):", listeazaTitluri(lista).join(", "));

console.log("--- Validare ---");
adaugaInterventie(lista, "   ");
adaugaInterventie(lista, "Folie geamuri", "tuning");