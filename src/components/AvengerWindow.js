import React from "react";
import "./AvengerWindow.css"
export default function AvengerWindow(props) {
    const mappedAvengers = props.currentAnswer.map(elem => {
        debugger;
        return(
            <div key={}>
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