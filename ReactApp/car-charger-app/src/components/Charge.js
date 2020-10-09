import React from 'react'
import styles from './Charge.module.css'
import ChargerSelection from './ChargerSelection'

export default function Charge(props) {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <a >Select charger...</a>
                {props.charger.map((chargers, index)=> 
                    <ChargerSelection  onChargerSelect={props.onChargerSelect} id={props.id} key={chargers.id} {...chargers}  />)
                }
            </div>
            <input className={styles.input} type="text" placeholder="Activation code" onChange={(event)=>props.onActivationCodeChange(event)}></input>
            <button className={styles.button} onClick={()=>props.startCharging()}>
                Start charging
            </button>
            <button className={styles.button} onClick={()=> props.stopCharging(props.currentUser)}>
                Stop charging
            </button>
            <div>Charging time: {props.elapsedtime}s</div>
            <div >Charging price: {Math.round((props.selectedCharger.price * props.elapsedtime)*100)/100} €</div>
        </div>
    )
}
