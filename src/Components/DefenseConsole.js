import React, {Component} from 'react';
import axios from 'axios';
import ProblemWindow from './ProblemWindow';
import SignIn from './SignIn';

export default class DefenseConsole extends Component{
    constructor(){
        super();
        this.state = {
            answerToSubmit: '',
            problems: [],
            problemInWindow: 0,
            user: null
        }
    }

    componentDidMount(){
        this.getProblems()
    }

    login = async (username, password) => {
        const response = await axios.post("/auth/login", {username, password})
        this.setState({user: response.data})
    }
    
    register = async (username, password) => {
        const response = await axios.post("/auth/register", {username, password})
        this.setState({user: response.data})
    }

    getProblems = async () => {
        const response = await axios.get('/api/get_problems');
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

    render(){
        const {problemInWindow, problems} = this.state;
        return(
            !this.state.user
                ?
            <SignIn login={this.login} register={this.register}/>
            :
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
            </div>
            )}
}