import React from 'react'
import styles from './Charge.module.css'
import ChargerSelection from './ChargerSelection'

export default function Charge(props) {
    return (
        <div>
            Select Charger:
            <div className={styles.menu}>
                
                <a >Select charger...</a>
                {props.charger.map((chargers, index)=> <ChargerSelection  onChargerSelect={props.onChargerSelect} id={props.id} key={chargers.id} {...chargers}  />)}
                
            </div>
            <input type="text" placeholder="Activation code"></input>
            <button onClick={props.chargeTimer()}>Start charging</button>
           
            <button >Stop charging</button>
            <div>Charging time: {props.elapsedtime}s</div>
            <div >Charging price: {props.charger.price} €</div>
        </div>
    )
}
