import React from 'react'
import style from './Charger.module.css'

export default function Charger(props) {
    return (
        <div className={style.location}>
            
            <p> <b>Location: {props.City}&nbsp; 
                {props.Street}<br/></b>
                Charging type: {props.Charger_Type}<br/>
                Status: {props.Charger_availability}<br/>
                Price: {props.price}</p>
        </div>
    )
}
