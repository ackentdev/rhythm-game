import React from "react";
import "./Button.css"

export default function Button(props) {
    return(
        <button onClick={() => props.addAvenger(props.id, props.avenger)}><img alt="" src={props.icon}/></button>
    )
}