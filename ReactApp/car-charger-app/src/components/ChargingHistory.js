import React from 'react'
import styles from './ChargingHistory.module.css'
import HistoryElement from './HistoryElement'

export default function ChargingHistory(props) {
    return (
        <div className={styles.history}>
            <p>Charging History: <br/>
            </p>
            {props.history.map((element, index) =><HistoryElement key={element.Date} {...element} id={index} />)}

            <button /*onClick={props.onChargeStarter()}*/>Charge</button>
        </div>
    )
}
