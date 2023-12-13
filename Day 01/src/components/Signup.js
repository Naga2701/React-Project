import React from 'react';
import './Signup.css';
function Signup() {
  return (
    <div className='signup_css'>
      
      <h2>Sign Up</h2>
      <form>
        <input type='text' placeholder='First Name' className='inpt'/>
        <p></p>
        <input type='text' placeholder='Last Name' className='inpt'/>
        <p></p>
        <input type='email' placeholder='E-mail' className='inpt'/>
        <p></p>
 
        <input type='password' placeholder='Password' className='inpt'/>
        <p></p>
        <input type='text' placeholder='Confirm Password' className='inpt'/>
        <p></p>
        <p><input type='checkbox'/><span>I read and agree to</span><span><a href='#.com' className='link'> Terms & Condition</a></span></p>
        <button type='button' className='btn'>Create Account</button>
      </form>
      
    </div>
  );
}
export default Signup;