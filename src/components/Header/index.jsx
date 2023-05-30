import styles from './styles.module.css'

import portfolio from '../../assets/portfolio.png'
import { ContatoButton, HeaderRadioButton } from '../Buttons'
ContatoButton

export const Header = () => {
    return (
        <header className={styles.container}>
            <nav className={styles.navegationMenu}>
                <ul className={styles.logo}>
                    <li>
                        <img src={portfolio} alt="logo portólio" />
                    </li>
                </ul>
                <HeaderRadioButton />
                <ul >
                    <li>
                        <ContatoButton />
                    </li>
                </ul>
            </nav>
        </header>
    )
}