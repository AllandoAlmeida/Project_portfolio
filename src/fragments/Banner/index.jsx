import bannerImage from '../../assets/banner-img.png';
import styles from './styles.module.css';

export const Banner = () => {
    return (
        <figure>
            <img src={bannerImage} alt='Banner' className={styles.banner} />
        </figure>
    )
}