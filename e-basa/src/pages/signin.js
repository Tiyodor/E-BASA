import React from 'react';
import './login.css';

function Signin() {
  return (
    <>
     <div className='loginbot'>
      <img src={process.env.PUBLIC_URL + '/assets/imgs/loginbot.png'}  />
    </div>
    <div className='loginbg'>
      <div className="clouds">
        <img src={process.env.PUBLIC_URL + '/assets/imgs/clouds1.png'} className="clouds-img" alt="Clouds" />
      </div>

      <a href="/login">
        <img
          src={process.env.PUBLIC_URL + '/assets/imgs/nav-logo.png'}
          alt="Centered Image"
          className="centered-image"
        />
      </a>

      <div className="login-container">
        <input type="text" id="username" placeholder="Username" name="username" required />
        <input type="password" id="password" placeholder="Password" name="password" required />
        <a href="/Home">
          <button type="submit">LOG IN</button>
        </a>
        <p>Don't have an account? <a href="/registration">Click here</a></p>
      </div>
    </div>
    
    </>
  );
}

export default Signin;
