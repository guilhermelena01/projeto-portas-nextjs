import PortaModel from "../../../model/porta"
import styles from "../../styles/porta.module.css"

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: any) {
    const porta = props.value
    const selecionada = props.selecionada ? styles.selecionada : ''

    const alternarSelecao = e => props.onChange(porta.alternarSelecao())
    const abrir = e => props.onChange(porta.abrir())

    function renderizarPorta() {
        return (
            <div className={`${styles.estrutura} ${selecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>{porta.numero}</div>
                    <div className={styles.macaneta} onClick={abrir}></div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            {porta.aberta ? false : renderizarPorta()}
            <div className={styles.chao}></div>
        </div>
    )
}