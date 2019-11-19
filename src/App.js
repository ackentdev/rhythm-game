import React from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Contact from './Components/Contact';
import DefenseConsole from './Components/DefenseConsole';
import Instructions from './Components/Instructions';
import Landing from './Components/Landing';
import PrivateRoute from './Components/PrivateRoute';
import SignIn from './Components/SignIn';
import { connect } from 'react-redux';
import { setUser } from './redux/reducer';
import "./Reset.css";
import "./App.css";

class App extends React.Component{

  componentDidMount() {
    this.userSession();
  }

  userSession = async () => {
    const userSession = await axios.get('/api/userSession').catch(err => console.log(err))
    this.props.setUser(userSession.data);
  }

  render(){
    return <div className="App">
    <Switch>
      <Route exact path="/" component={Landing}/>
      <PrivateRoute path="/defense-console" component={DefenseConsole}/>
      <PrivateRoute path="/for-teachers" component={Instructions}/>
      <PrivateRoute path="/contact" component={Contact}/>
      <Route path="/sign-in" component={SignIn}/>
    </Switch>
  </div>
  }
}

function mapReduxStateToProps(reduxState){
  return reduxState;
}

const mapDispatchToProps = {
  setUser
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(App);