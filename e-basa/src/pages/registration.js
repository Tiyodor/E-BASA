import React from 'react';
import './login.css'; // Assuming you have a CSS file for styling

function registration() {
  return (
    <>
     <div className='loginbot'>
      <img src={process.env.PUBLIC_URL + '/assets/imgs/loginbot.png'}  />
    </div>
        <div className="loginbg">
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

      <div className="container">
        <div className="reg-container">
            
          <div className="Lcontainer">
            <input type="text" placeholder="School: " name="school" required />
            <input type="text" placeholder="First Name: " name="Fname" required />
            <input type="text" placeholder="Last Name: " name="Lname" required />
          </div>

          <div className="Rcontainer">
            <input type="text" placeholder="Username: " name="username" required />
            <input type="text" placeholder="Password: " name="password" required />
            <input type="text" placeholder="Confirm Password: " name="confirmpass" required />
          </div>
          
          <div className='Bcontainer'>
          <input type="text" placeholder="MI: " name="Mname" required />
            <input type="text" placeholder="Age: " name="age" required />
            <input type="text" placeholder="Gender: " name="gender" required />
          </div>
        
        </div>
        <a href="/signin">
          <button type="submit">Register</button>
        </a>
        <p>Already have an account? <a href="/signin">Login here</a></p>
      </div>
    </div>
    </>
  );
}

export default registration;
