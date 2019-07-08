import React from "react";
import pow from "../media/pow.png"

export default function PutButton(props) {
    return(
        <button onClick={() => props.assembleAvengers()}><img alt='' src={pow}/></button>
    )
}