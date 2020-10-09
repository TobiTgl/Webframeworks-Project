import React from 'react'

export default function HistoryElement(props) {
    return (
        <div>
            <p>
                Date: {props.Date} <br/>
                Location: {props.Location}<br/>
                Charger type: {props.Charger_Type}<br/>
                Duration: {props.duration}s<br/>
                Price: {props.price}€
            </p>
        </div>
    )
}
