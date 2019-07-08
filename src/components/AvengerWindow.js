import React from "react";
import "./AvengerWindow.css"
export default function AvengerWindow(props) {
    const mappedAvengers = props.currentAnswer.map(elem => {
        return(
            <div key={props.currentAnswer.indexOf(elem)}>
                <img src={elem}/>
            </div>
        )
    })
    return (
        <div id="target">
            {mappedAvengers};
        </div>
    )
    }