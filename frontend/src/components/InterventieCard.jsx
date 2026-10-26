import { Wrench, Zap, Sparkles, CheckCircle2, Circle } from "lucide-react";

const ETICHETE_TIP = { 
    mecanica: { text: "Mecanică", Icon: Wrench }, 
    electronica: { text: "Electronică", Icon: Zap }, 
    estetica: { text: "Estetică", Icon: Sparkles } 
};

export default function InterventieCard({ interventie, onToggle, onDelete }) {
    const IconitaTip = ETICHETE_TIP[interventie.tip].Icon;

    return (
        <li className={interventie.efectuata ? "item-card done" : "item-card"}>
            <label className="item-main" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', flex: 1 }}>
                <input 
                    type="checkbox" 
                    checked={interventie.efectuata}
                    onChange={() => onToggle(interventie.id)}
                    style={{ width: '18px', height: '18px', accentColor: '#d32f2f', cursor: 'pointer' }}
                />
                <div>
                    <h3 style={{ marginBottom: '6px' }}>{interventie.titlu}</h3>
                    <span className={`badge badge-${interventie.tip}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <IconitaTip size={14} />
                        {ETICHETE_TIP[interventie.tip].text}
                    </span>
                </div>
            </label>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span className="status" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {interventie.efectuata ? <CheckCircle2 size={18} color="#4caf50" /> : <Circle size={18} color="#a0a0a0" />}
                </span>
                <button 
                    className="btn-danger" 
                    onClick={() => onDelete(interventie.id)}
                    aria-label={`Șterge ${interventie.titlu}`}
                >
                    Șterge
                </button>
            </div>
        </li>
    );
}