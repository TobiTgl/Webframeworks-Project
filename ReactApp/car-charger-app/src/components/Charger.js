import React from 'react'
import style from './Charger.module.css'

export default function Charger(props) {
    return (
        <div className={style.location}>
            
            <b> {props.City}&nbsp;</b>
            <b> {props.Street}&nbsp;</b>
           
        </div>
    )
}
