import styles from "./InterventieList.module.css";
import InterventieCard from "./InterventieCard.jsx";

export default function InterventieList({ interventii, onToggle, onDelete, busyIds = [] }) {
    if (interventii.length === 0) {
        return <p className="empty" data-testid="empty">Nu există nicio intervenție înregistrată.</p>;
    }

    return (
        <ul className={styles.list}>
            {interventii.map((interventie) => (
                <InterventieCard 
                    key={interventie.id} 
                    interventie={interventie} 
                    onToggle={onToggle}
                    onDelete={onDelete}
                    busy={busyIds.includes(interventie.id)}
                />
            ))}
        </ul>
    );
}
