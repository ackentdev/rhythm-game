import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser } from '../redux/reducer';

class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            newUser: false,
            username: '',
            password: ''
        }
    }
   
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    alterNewUser = (value) => {
        this.setState({
            newUser: value
        })
    }

    clearState = () => {
        this.setState({
            username: '',
            password: ''
        })
    }

    login = async (username, password) => {
        const response = await axios.post("/auth/login", {username, password})
        this.props.setUser(response.data)
        this.props.history.push('/defense-console')
 
     }
     
    register = async (username, password) => {
        const response = await axios.post("/auth/register", {username, password})
        this.props.setUser(response.data)
        this.props.history.push('/defense-console')
     }

    render(){
        const {username, password, newUser} = this.state
    return(
        <div className="sign-in">
            <form onSubmit={(e) => {
                e.preventDefault();
                !newUser 
                ? 
                this.login(username, password) &&  this.clearState() 
                : 
                this.register(username, password) && this.clearState();
            }}>
                <input 
                    type="text" 
                    name="username" 
                    value={username}
                    onChange={e => this.changeHandler(e)}/>
                <input 
                    type="password" 
                    name="password" 
                    value={password}
                    onChange={e => this.changeHandler(e)}/>
                {!newUser 
                ?
                <div className="sign-in buttons"> 
                    <input className="login-submit" type="submit" value="Login"/>
                    <button onClick={() => this.alterNewUser(true)}>Create an Account</button> 
                </div>
                : 
                <div className="sign-in buttons"> 
                    <input className="login-submit" type="submit" value="Register"/>
                    <button onClick={() => this.alterNewUser(false)}>Sign In</button>
                </div>}
            </form>
        </div>
    )}
}

function mapReduxStateToProps(reduxState){
    return reduxState;
}

const mapDispatchToProps = {
    setUser
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(SignIn);