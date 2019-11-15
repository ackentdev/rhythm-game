import React, {useState} from 'react';

export default function SignIn(props){
    const [newUser, setNewUser] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="sign-in">
            <form onSubmit={(e) => {
                e.preventDefault();
                !newUser ? props.login(username, password) && setUsername('') && setPassword('') : props.register(username, password) && setUsername('') && setPassword('')
            }}>
                <input 
                    type="text" 
                    name="username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}/>
                <input 
                    type="password" 
                    name="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                {!newUser 
                ?
                <div className="sign-in buttons"> 
                    <input className="login-submit" type="submit" value="Login"/>
                    <button onClick={() => setNewUser(true)}>Create an Account</button> 
                </div>
                : 
                <div className="sign-in buttons"> 
                    <input className="login-submit" type="submit" value="Register"/>
                    <button onClick={() => setNewUser(false)}>Sign In</button>
                </div>}
            </form>
        </div>
    )
}