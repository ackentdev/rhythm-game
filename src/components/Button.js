import React from "react";
import "./Button.css"

export default function Button(props) {
    return(
        <button><img alt="" src={props.icon}/></button>
    )
}