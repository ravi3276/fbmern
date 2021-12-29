import React, { useState } from 'react'
import './Login.css';
function Login() {
    const [reg, setReg] = useState(true)
    const register=(e)=>{
        e.preventDefault();
        setReg(!reg)
    }

    const backToLogin=(e)=>{
        e.preventDefault();
        setReg(true)
    }
  return (
    <div className="login">
        <div className="login__left">
            <h1>facebook</h1>
            <p>
            Connect with friends and the world around you on Facebook.
            </p>
        </div>
       
        <div className="login__right">
        {
            reg ? (
            <form className="login__form">
                <input placeholder="username"/>
                <input placeholder="password"/>
                <button className="loginBtn" type="submit">Login</button>
                <span className="login__forgot">forgot password?</span>
                <button className="loginReg" type="submit" onClick={register}>create new account</button>
            </form>
            ):(
                <form className="login__form">
                <input placeholder="Username"/>
                <input placeholder="E-Mail"/>
                <input placeholder="Password"/>
                <input placeholder="Re-enter password"/>
                <button className="loginBtn" type="submit">SignUp</button>
                <button className="loginReg" type="submit" onClick={backToLogin}>Login to account</button>
            </form>
            )
        }
        </div>
    </div>
  )
}

export default Login
