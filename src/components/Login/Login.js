import React from "react";
import './Login.css';
import {Link} from 'react-router-dom';
function Login(){
    return(
        <div className='main-login'>
        <Link to= '/Register' >Move to Register Page</Link>
        <div className="login-contain">

        </div>
        <div className="Login1">
            <p className="p1">Explore The Best Tours... Hurry up!!</p>
            <input placeholder="Email Address" type="email" id="input"></input>
            <input placeholder="Password" type="password" id="pass"></input>
            <button id="Login-btn">Login</button>
            <label className="frg-pass">Forgot Password?</label>
            <p className="p2">or</p>
           
        </div>
        <div>
        <button className="icon2"></button>
        <button id="icon3"></button>
        <p className="create">Don't have an account?<span className="sin-up">Sign Up</span></p>
        </div>
        
        <div className="icon"></div>
        <div className="Logo"></div>
        </div>
    )
}

export default Login;