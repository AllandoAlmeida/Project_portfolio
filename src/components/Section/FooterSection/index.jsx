import gitHub from '../../../assets/github-icon.png';
import whatsApp from '../../../assets/whatsapp-icon.png';
import linkedin from '../../../assets/linkedin-icon.png';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { searchUser } from '../../RenderFunction/requests/requests.js';
import { contact } from '../../../data/contacts.js';

export const Footer = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await searchUser();
            setUser(userData);
        };

        fetchUser();
    }, []);

    if (!user) {
        return null;
    }

    return (
        <section className={styles.container}>
            <ul className={styles.contactSection}>
                <li className="title2">Contato</li>
                <li className={styles.icon}>
                    <a href={contact.whatssApp} target='_blank'>
                        <img src={whatsApp} alt="contate pelo whatsApp" />
                    </a>
                    <a href={contact.linkedin} target='_blank'>
                        <img src={linkedin} alt="linkedin" />
                    </a>
                    <a href={contact.gitHub} target='_blank'>
                        <img src={gitHub} alt="GitHub" />
                    </a>
                </li>
            </ul>
            <ul className={styles.reservationOfRights}>
                <li className={styles.reservationOfRightsTtile}>Todos os direitos reservados - {user.name}</li>
            </ul>
        </section>
    );
};





