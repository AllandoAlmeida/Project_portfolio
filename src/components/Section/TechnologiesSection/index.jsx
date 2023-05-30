import styles from './styles.module.css'

export const TechCard = ({ technology }) => {
    return (
        <div className={styles.card}>
            <img src={technology.img} alt={technology.name} />
            <h3>{technology.name}</h3>
        </div>
    );
};


