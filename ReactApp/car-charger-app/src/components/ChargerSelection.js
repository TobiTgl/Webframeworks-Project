import React from 'react'

export default function ChargerSelection(props) {
    return (
        <a onClick={props.onChargerSelect(props.id)}>
            {props.City +' '} 
            {props.Charger_Type}
            
        </a>
    )
}
