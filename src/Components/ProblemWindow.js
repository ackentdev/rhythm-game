import React from 'react';

export default function ProblemWindow(props) {
    return <div className="problem-window">
        <img alt={`problem-${props.index}`} src={props.url}/>
        <button onClick={() => props.nextProblem()}>Next</button>
        <button onClick={() => props.prevProblem()}>Previous</button>
    </div>
}