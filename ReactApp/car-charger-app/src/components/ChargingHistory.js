import React from 'react'
import styles from './ChargingHistory.module.css'
import HistoryElement from './HistoryElement'

export default function ChargingHistory(props) {

    let histArr = props.history.reverse();
    console.log(histArr);

    return (
        <div className={styles.historyContainer}>
            Charging History:
            {histArr.map((element, index) =>
                <HistoryElement key={element.Date} {...element} id={index} />)
            }
        </div>
    )
}
