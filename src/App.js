import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Contact from './Components/Contact';
import DefenseConsole from './Components/DefenseConsole';
import Instructions from './Components/Instructions';
import Landing from './Components/Landing';
import "./Reset.css";
import "./App.css";

export default function App(){
  return <div className="App">
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/defense-console" component={DefenseConsole}/>
      <Route path="/for-teachers" component={Instructions}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  </div>
}