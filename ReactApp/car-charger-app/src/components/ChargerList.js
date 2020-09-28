import React from 'react'
import Charger from './Charger'
import styles from './ChargerList.module.css'

export default function ChargerList(props) {
    return (
        <div className={styles.heading}>
            <h3>Charging Stations:</h3>
            {props.chargers.map((chargers, index) => <Charger key={chargers.id} {...chargers} id={index} />)}

        </div>
    )
}
