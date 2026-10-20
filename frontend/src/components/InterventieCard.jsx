// Un singur element din listă, primit prin props.
const ETICHETE_TIP = { mecanica: "Mecanică", electronica: "Electronică", estetica: "Estetică" };

export default function InterventieCard({ interventie }) {
    return (
        <li className={interventie.efectuata ? "item-card done" : "item-card"}>
            <div>
                <h3>{interventie.titlu}</h3>
                <span className={`badge badge-${interventie.tip}`}>
                    {ETICHETE_TIP[interventie.tip]}
                </span>
            </div>
            <span className="status">{interventie.efectuata ? "Efectuată" : "În așteptare"}</span>
        </li>
    );
}