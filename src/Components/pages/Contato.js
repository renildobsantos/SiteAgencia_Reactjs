import styles from './Contato.module.css'

function Contato () {
    return (

        <form className={styles.formulario}>
            <h1>Contato</h1>
            <input placeholder="Nome" className={styles.input}></input>
            <input placeholder="Email" className={styles.input}></input>
            <input placeholder="Telefone" className={styles.input}></input>
            <input placeholder="Assunto" className={styles.assunto}></input>
            <button>Enviar</button>
        </form>
    )
}
export default Contato