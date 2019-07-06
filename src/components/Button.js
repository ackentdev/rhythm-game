import React from "react";
import "./Button.css"

export default function Button(props) {
    return(
        <button onClick={()=>props.clicksta()}><img alt="" src={props.icon}/></button>
    )
}