import React from 'react'
import styles from './ChargingHistory.module.css'

export default function HistoryElement(props) {
    return (
        <div>
            <p className={styles.history}>
                Date: {props.Date} <br/>
                Location: {props.Location}<br/>
                Charger type: {props.Charger_Type}<br/>
                Duration: {props.duration}s<br/>
                Price: {props.price}€
            </p>
        </div>
    )
}
