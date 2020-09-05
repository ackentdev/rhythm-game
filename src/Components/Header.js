import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import "./Header.scss"

export default function Header(props){

    const logout = () => {
     axios.post('/auth/logout')
    }

    return<nav className="navigation">
        <ul className="links">
            <NavLink className="nav-link" to="/sign-in" onClick={() => {logout()}}>logout</NavLink>
            <NavLink className="nav-link" to="/sign-in" >for teachers</NavLink>
            <NavLink className="nav-link" to="/sign-in" >contact</NavLink>
        </ul>
    </nav>
}