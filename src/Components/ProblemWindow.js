import React from 'react';
import correct from '../media/Correct.svg';
import wrong from '../media/Wrong.svg';
import ufo from '../media/ufo.svg';
import "./ProblemWindow.scss"

export default function ProblemWindow(props) {
    return <div className="problem-window">
        <img alt='ufo' src={ufo} className="ufo"/>
        <div className="problem-container">
            <button className="prev-btn" onClick={() => props.prevProblem()}></button>
            <img alt={`problem-${props.index}`} src={props.url} className="problem"/>
            <button className="next-btn" onClick={() => props.nextProblem()}></button>
        </div>
        {!props.problem ? <h1>Loading...</h1> : props.problem.correct ?  <img alt="correct" className="answer-status" src={correct}/> : <img alt="wrong" className="answer-status" src={wrong}/>}
    </div>
}