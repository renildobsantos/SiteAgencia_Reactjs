
import styles from './Home.module.css'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className={styles.container}>
        
            <div className={styles.title}>
                <h1>Sejam bem vindo!</h1>
                <span>LOOP</span>
                <p>Agência de eventos</p>
            </div>

            <div className={styles.texto}>
                <h1>O Sucesso do seu evento começa aqui.</h1>
                <ul className={styles.ul}>
                    <li className={styles.li}><Link to="#">Eventos Corporativos</Link></li> 
                    <li className={styles.li}><Link to="#">Eventos Sociais</Link></li>
                    <li className={styles.li}><Link to="#">Eventos Esportivos</Link></li> 
                    <li className={styles.li}><Link to="#">Eventos Culturais</Link></li> 
                </ul>
            </div>
        </div>
    )
}
export default Home