import React, {Component} from 'react';
import axios from "axios";
import './App.css';
import './Reset.css'
import logo from "./media/a-logo.png";
import hulk from "./media/hulk.png";
import ironman from "./media/ironman.png";
import hawkeye from "./media/hawkeye.png";
import thor from "./media/thor.png";

// import EnemyWindow from "./components/EnemyWindow";
import Button from "./components/Button";

class App extends Component {
  constructor() {
    super()
    this.state = {
      problems: [],
      currentAnswer: [],
    }
    this.clicksta = this.clicksta.bind(this);
  }

  componentDidMount() {
    this.getProblems()
  }

clicksta() {
  console.log("my button works!");
}
  
  render () {
    const {currentAnswer} = this.state;
  return (
    <div className="App">
      <nav>
        <img alt='' src={logo}/>
        <div className="history"></div>
      </nav>
      <div className ="enemies">
      {/* <EnemyWindow/> */}
      {/* <PlayButton.js/> */}
      </div>
      <div className="avengers">
        {/* <AvengerWindow.js/> */}
      </div>
      <div className="ui">
        <Button className="thor" icon={thor} clicksta={this.clicksta}/>
        <Button className="hawkeye" icon={hawkeye}/>
        <Button className="ironman" icon={ironman}/>
        <Button className="hulk" icon={hulk}/>
        {/* <PostButton/> */}
      </div>

    </div>
  );
  }
  }

export default App;
