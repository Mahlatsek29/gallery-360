// Login.js
import React from 'react';
import '../styles/login.css'; // Ensure the path is correct

function Login() {
  return (
    <div className="loginContainer">
      <div className="logoSection">
        <div className="logo"></div>
        <h1 className="title">Gallery 360 Africa</h1>
      </div>
      <div className="formSection">
        <h2 className="signIn">Sign In</h2>
        <form className="loginForm">
          <input type="email" placeholder="Email" className="input" required />
          <input type="password" placeholder="Password" className="input" required />
          <a href="#" className="forgotPassword">Forgot password?</a>
          <button type="submit" className="signInButton">SIGN IN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
