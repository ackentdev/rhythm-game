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
import PutButton from './components/PutButton';

class App extends Component {
  constructor() {
    super()
    this.state = {
      problems: null,
      currentProblem: 0,
      currentAnswer: [],
      previousAnswers: [],
      answerkey: ''
    }
    this.getProblems = this.getProblems.bind(this);
    this.changeProblem = this.changeProblem.bind(this);
    this.addAvenger = this.addAvenger.bind(this);
    this.assembleAvengers = this.assembleAvengers.bind(this);
  }

  componentDidMount() {
    this.getProblems();
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

addAvenger(avenger) {
  this.setState({
    currentAnswer: [...this.state.currentAnswer, avenger]
  })
}

assembleAvengers() {
  const team = this.state.currentAnswer;
  axios.post(`/api/problems`, team)
  .then((response) => {
    this.setState({
      previousAnswers: response.data,
      currentAnswer: []
    })
  })
}

  
  render () {
    const {currentAnswer, currentProblem, problems} = this.state;
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
        <AvengerWindow currentAnswer={currentAnswer}/>
      </div>
      <div className="ui">
        <Button className="thor" icon={thor} avenger={quarter} addAvenger={this.addAvenger}/>
        <Button className="hawkeye" icon={hawkeye} avenger={half} addAvenger={this.addAvenger}/>
        <Button className="ironman" icon={ironman} avenger={dotted} addAvenger={this.addAvenger}/>
        <Button className="hulk" icon={hulk} avenger={whole} addAvenger={this.addAvenger}/>
        <PutButton assembleAvengers={this.assembleAvengers} id={currentProblem} currentAnswer={currentAnswer}/>
      </div>

    </div>
  );
  }
  }

export default App;
