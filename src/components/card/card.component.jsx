import React from "react";
import './card.styles.css'

export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt='monster' src={`https://robohash.org/${props.monster.id}/?set=set2&size=250x250`} />
            <h2> {props.monster.name} </h2>
            <p> {props.monster.email} </p>
        </div>
    )
}