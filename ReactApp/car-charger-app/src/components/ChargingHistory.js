import React from 'react'
import styles from './ChargingHistory.module.css'
import HistoryElement from './HistoryElement'



export default function ChargingHistory(props) {
    
    
    
    let output = null
    
    if(props.history !== undefined ||props.history !== ""||props.history !== null){
    
    let histArr = props.history;
    console.log(histArr);
    output = histArr.map((element, index) =>
    <HistoryElement key={element.Date} {...element} id={index} />);
    }
    return (
        <div className={styles.historyContainer}>
            Charging History:
            {output}
        </div>
    )
}
