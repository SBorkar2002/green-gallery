import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === 'admin@gmail.com' && password === 'admin') {
      window.location.href = '/'; // Redirect to homepage
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <section className="Rsection">
      <header className="Rheader">
        <div className="navbar">
          <div className="Rtitle">
            <NavLink to="/">Green Gallery</NavLink>
          </div>
        </div>
      </header>
      <div className="Rlogin-page">
        <div className="Rform-box">
          <div className="Rbutton-box">
            <div id="btn"></div>
            <center>
              <button type="button" className="Rtoggle-btn" disabled>
                LOGIN
              </button>
            </center>
          </div>

          <form
            id="login"
            className="Rinput-group-login"
            onSubmit={handleLogin}
          >
            <input
              type="email"
              className="Rinput-field"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="Rinput-field"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errorMessage && <div className="Rerror-message">{errorMessage}</div>}
            <button type="submit" className="Rsubmit-btn">
              Login
            </button>
            <br />
            <center>
              <div className="Rforgot">
                <NavLink to="/">Login as Guest</NavLink>
              </div>
            </center>
            <br />
          </form>
        </div>
      </div>
      <div className="RimgL1">
        <img
          src="https://jooinn.com/images/green-leaf-plant-18.jpg"
          alt="Green Leaf Plant"
        />
      </div>
    </section>
  );
};

export default Register;
