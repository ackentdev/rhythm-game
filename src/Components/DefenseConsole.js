import React, {Component} from 'react';
import axios from 'axios';
import ProblemWindow from './ProblemWindow';
import AnswerWindow from './AnswerWindow';

import { connect } from 'react-redux';
import { setUser } from '../redux/reducer';

class DefenseConsole extends Component{
    constructor(){
        super();
        this.state = {
            answerCode: [],
            problems: [],
            problemInWindow: 0,
            user: null
        }
    }

    componentDidMount(){
        this.getProblems()
    }


    getProblems = async () => {
        const response = await axios.get('/api/get_problems');
        console.log(response.data)
        const doTheShuffle = (array) => {
            for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
          }
          return array
          }
        this.setState({
            problems: doTheShuffle(response.data)
        })
    }

    nextProblem = () => {
        this.state.problemInWindow < 13
        ?
        this.setState({
            problemInWindow: this.state.problemInWindow + 1
        })
        :
        this.setState({
            problemInWindow: 0
        })
    }

    prevProblem = () => {
        this.state.problemInWindow > 0
        ?
        this.setState({
            problemInWindow: this.state.problemInWindow - 1
        })
        :
        this.setState({
            problemInWindow: 13
        })
    }

    addToAnswer = (letter) => {
        this.state.answerCode.length < 4
        ?
        this.setState({
            answerCode: [...this.state.answerCode, letter]
        })
        :
        this.setState({
            answerCode: []
        })
    }

    submitAnswer = () => {
        const { answerCode, problems, problemInWindow } = this.state;
        if(answerCode.join('') !== problems[problemInWindow].answer_code){
            alert("Incorrect answer! Please try again")
            this.setState({answerCode: []})
        } else {
            alert("Congratulations! You've saved another piece of rhythm from the aliens!")
            this.setState({answerCode: []});
            this.nextProblem();
        }
    }



    render(){
        console.log("from redux2: ", this.props.user)
        const {problemInWindow, problems} = this.state;
        // const answerStatus = (
        //     problems[problemInWindow].correct
        //     ?
        //     <img alt="correct" src={correct}/>
        //     :
        //     <img alt="wrong" src={wrong}/>
        //     )
        
        return(
            <div className="defense-console">
                <h1>This is the defense console</h1>
                {!problems.length 
                    ? 
                <h1>LOADING WINDOW</h1>
                    :
                <ProblemWindow 
                    nextProblem={this.nextProblem}
                    prevProblem={this.prevProblem}
                    url={problems[problemInWindow].img}
                    index={problemInWindow}/>}
                
                <AnswerWindow
                    problem={problems[problemInWindow]} 
                    addToAnswer={this.addToAnswer}
                    submitAnswer={this.submitAnswer}/>
            </div>
            )}
}

function mapReduxStateToProps(reduxState){
    return reduxState;
}

const mapDispatchToProps = {
    setUser
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(DefenseConsole);