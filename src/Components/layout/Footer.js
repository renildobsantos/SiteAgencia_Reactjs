import styles from './Footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer() {
    return (
        <footer> 
            <ul className={styles.midia_social}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
           
            <div className={styles.rodape}> 
            <p>Desenvolvido por Renildo Santos <span>&copy; 2023</span> | Todos os direitos reservados</p> 
            </div>
        </footer>
    )
}

export default Footer