import {Link} from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <span>LOOP</span>
                <p>Agência de eventos</p>
            </div>
            <ul className={styles.ul}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/Sobre">Sobre</Link></li>
                <li className={styles.item}><Link to="/Contato">Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Header