import React from "react";
import "./AvengerWindow.css"
export default function AvengerWindow(props) {
    let mappedAvengers
    if(props.answers.length) {
    mappedAvengers = props.answers[props.currentProblem].answer.map(elem => {
        console.log("laskdjflka", elem);
        return(
            <div >
                <img src={elem}/>
            </div>
        )
    })}
    // return (
    //     <div id="target">
    //         {mappedAvengers};
    //     </div>
    // )
    console.log(props)
    return (
        <div id="avenger-window">
            {props.answers? <div>{mappedAvengers}</div> : null}
        {/* {props.answers[props.currentProblem] && <div>{mappedAvengers}</div>} */}
        </div>
    )
    }