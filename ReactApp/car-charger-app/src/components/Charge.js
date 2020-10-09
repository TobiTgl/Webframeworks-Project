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
            <input type="text" placeholder="Activation code" onChange={(event)=>props.onActivationCodeChange(event)}></input>
            <button onClick={()=>props.startCharging()}>Start charging</button>
           
            <button onClick={()=> props.stopCharging(props.currentUser)}>Stop charging</button>
            <div>Charging time: {props.elapsedtime}s</div>
            <div >Charging price: {Math.round((props.selectedCharger.price * props.elapsedtime)*100)/100} €</div>
        </div>
    )
}
