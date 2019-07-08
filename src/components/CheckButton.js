import React from "react";
import pow from "../media/pow.png"

export default function CheckButton(props) {
    return(
        <button onClick={() => props.answerChecker()}><img alt='' src={pow}/></button>
    )
}