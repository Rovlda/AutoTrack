// frontend/src/components/InterventieCard.jsx

import { Wrench, Zap, Sparkles, CheckCircle2, Circle } from "lucide-react";

// Mapăm fiecare tip la textul dorit și la o iconiță specifică
const ETICHETE_TIP = { 
    mecanica: { text: "Mecanică", Icon: Wrench }, 
    electronica: { text: "Electronică", Icon: Zap }, 
    estetica: { text: "Estetică", Icon: Sparkles } 
};

export default function InterventieCard({ interventie }) {
    // Extragem iconița specifică tipului curent
    const IconitaTip = ETICHETE_TIP[interventie.tip].Icon;

    return (
        <li className={interventie.efectuata ? "item-card done" : "item-card"}>
            <div>
                <h3>{interventie.titlu}</h3>
                
                {/* Badge-ul are acum și o pictogramă mică */}
                <span className={`badge badge-${interventie.tip}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <IconitaTip size={14} />
                    {ETICHETE_TIP[interventie.tip].text}
                </span>
            </div>
            
            {/* Statusul are acum un cerculeț bifat sau gol */}
            <span className="status" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {interventie.efectuata ? <CheckCircle2 size={18} color="#4caf50" /> : <Circle size={18} color="#a0a0a0" />}
                {interventie.efectuata ? "Efectuată" : "În așteptare"}
            </span>
        </li>
    );
}