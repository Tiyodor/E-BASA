import React from 'react';
import './login.css';

function Login() {
  return (
    <>
      <div className='loginbot'>
      <img src={process.env.PUBLIC_URL + '/assets/imgs/loginbot.png'}  />
    </div>
    <div className='loginbg'>
      <div className="clouds">
        <img src={process.env.PUBLIC_URL + '/assets/imgs/clouds1.png'} className="clouds-img" alt="Clouds" />
      </div>

      <img src={process.env.PUBLIC_URL + '/assets/imgs/nav-logo.png'} alt="Centered Image" className="centered-image" />

      <div className="button-container">
        <a href="/registration">
          <button type="button">CREATE AN ACCOUNT</button>
        </a>
        <a href="/signin">
          <button type="button">LOG IN</button>
        </a>
      </div>
    </div>
   
    </>
  );
}

export default Login;
