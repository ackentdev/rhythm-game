import React from "react";
import "./EnemyWindow.css";

export default function EnemyWindow(props) {
        return(
            <div id="enemy-component">
      {props.problems && <img alt='' src={props.problems[props.currentProblem].img}/>}
            </div>
        );
}