import React from 'react';
import './Login.css';
function Login(){
    return (
        <div>
        <h1>Stockzz</h1>
        <form className='login_css'>
            <h2 >Login ur Stockzz </h2>
            <input type='email ' placeholder='E-mail' className='inpt'/>
            <p></p>
            <input type='password' placeholder='Password' className='inpt'/>
            <p></p>
            <p className='pa_css'><input type='checkbox'/><span>Remember Me</span></p>

            <button type='button' className='btn'>Login</button>
            <p></p>
            <a href='#.com' className='link'>Forgot Password ?</a>
            <a href='#.com' className='link'>Sign up</a>
            <p></p>
            </form>
            </div>

    );
}
export default Login;