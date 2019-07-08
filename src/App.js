import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import './Reset.css'
import hulk from "./media/hulk.png";
import ironman from './media/ironman.png';
import hawkeye from "./media/hawkeye.png";
import thor from "./media/thor.png";
import quarter from "./media/quarter-thor.png";
import half from "./media/half-hawkeye.jpg";
import dotted from "./media/dottedhalf-ironman.png";
import whole from "./media/whole-hulk.jpg";

import Menu from "./components/Menu";
import EnemyWindow from "./components/EnemyWindow";
import AvengerWindow from "./components/AvengerWindow";
import Button from "./components/Button";
import PostButton from './components/PostButton';
import DeleteButton from "./components/DeleteButton"

class App extends Component {
  constructor() {
    super()
    this.state = {
      problems: null,
      currentProblem: 0,
      answers: [],
      currentAnswer: []
    }
    this.getProblems = this.getProblems.bind(this);
    this.changeProblem = this.changeProblem.bind(this);
    this.addAvenger = this.addAvenger.bind(this);
    this.disassembleAvengers = this.disassembleAvengers.bind(this);
  }

  componentDidMount() {
    this.getProblems();
    this.getAnswers();
  }

getProblems() {
  axios.get("/api/problems")
  .then((response) => {
    this.setState({
      problems:response.data
    })
  })
  .catch((err) => {
    console.log(err)
  });
}

changeProblem(x) {
  this.setState({
    currentProblem: x
  })
}

addAvenger(id, avenger) {
  console.log(avenger);
  axios.put(`/api/answers/${id}`, {avenger})
  .then(response => {
    this.setState({
      answers: response.data
    })
  })
}

getAnswers() {
  axios.get("/api/answers")
  .then((response) => {
    this.setState({
      answers:response.data
    })
  })
  .catch((err) => {
    console.log(err)
  });
}

assembleAvengers() {
  axios.post("/api/answers", this.state.currentAnswer)
  .then(response => {
    this.setState({ 
      answers: response.data,
      currentAnswer: []
    });
  });
}

disassembleAvengers(id) {
  axios.delete(`/api/answers/${id}`)
  .then(response => {
    this.setState({
      answers:response.data
    })
  })
}
  
  render () {
    // console.log(this.state.answers[this.state.currentProblem].answer)
    const {answers, currentAnswer, currentProblem, problems} = this.state;
  return (
    <div className="App">
      <nav>
      <Menu problems={problems} currentProblem={currentProblem}  changeProblem={this.changeProblem}></Menu>
      </nav>
      <div className ="enemies">
      <EnemyWindow problems={problems} currentProblem={currentProblem}/>
      {/* <PlayButton.js/> */}
      </div>
      <div className="avengers">
        <AvengerWindow answers={answers} currentAnswer={currentAnswer} currentProblem={currentProblem}/>
      </div>
      <div className="ui">
        <DeleteButton disassembleAvengers={this.disassembleAvengers} id={currentProblem+1}/>
        <Button className="thor" icon={thor} avenger={quarter} addAvenger={this.addAvenger} id={currentProblem+1}/>
        <Button className="hawkeye" icon={hawkeye} avenger={half} addAvenger={this.addAvenger} id={currentProblem+1}/>
        <Button className="ironman" icon={ironman} avenger={dotted} addAvenger={this.addAvenger} id={currentProblem+1}/>
        <Button className="hulk" icon={hulk} avenger={whole} addAvenger={this.addAvenger} id={currentProblem+1}/>
        <PostButton assembleAvengers={this.assembleAvengers} currentAnswer={currentAnswer} id={currentProblem+1}/>
      </div>

    </div>
  );
  }
  }

export default App;
