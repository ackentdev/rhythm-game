import React from 'react';
import quarter from '../media/QuarterNote.jpg';
import half from '../media/HalfNote.jpg';
import dottedHalf from '../media/DottedHalfNote.jpg';
import whole from '../media/WholeNote.jpg';
import eighth from '../media/EighthNotes.jpg';
import correct from '../media/Correct.svg';
import wrong from '../media/Wrong.svg';

export default class AnswerWindow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answer:[]
        }
    }

    setAnswer = (value) => {
        this.state.answer.length < 4
        ?
        this.setState({
            answer: [...this.state.answer, value]
        })
        :
        this.setState({
            answer: []
        })
    }

    render(){
    const mappedAnswer = this.state.answer.map((note, index) => {
        return <img key={index} alt={note} src={note} onClick={() => {this.state.answer.splice(index, 1)}}/>
    })
    return<div className="answer-window">
        {!mappedAnswer.length ? <h1>Create your answer</h1> : mappedAnswer}
        {this.props.problem.correct ? <img alt="correct" src={correct}/> : <img alt="wrong" src={wrong}/>}
        <button onClick={() => {this.props.addToAnswer("A"); this.setAnswer(quarter)}}>BANG</button>
        <button onClick={() => {this.props.addToAnswer("E"); this.setAnswer(eighth)}}>PEW PEW</button>
        <button onClick={() => {this.props.addToAnswer("B"); this.setAnswer(half)}}>LASER</button>
        <button onClick={() => {this.props.addToAnswer("C"); this.setAnswer(dottedHalf)}}>EMP</button>
        <button onClick={() => {this.props.addToAnswer("D"); this.setAnswer(whole)}}>NUCLEAR BOM</button>
        <button onClick={() => {this.props.submitAnswer(); this.setState({answer: []})}}>LAUNCH</button>
    </div>
    }
}