// Competition.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const styles = `
  .competition-container {
    /* Stilurile generale pentru containerul de competitie */
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
   

  .link {
    color: black; 
    text-decoration: none;
  }

  .input-box {
    /* Stilurile pentru cutia de input */
    margin-bottom: 15px;
    position: relative;
  }
  

  .input-box input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  .input-box i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    font-size: 18px;
  }

  /* Alte stiluri pentru restul elementelor */
  .remember-forgot {
    margin-bottom: 15px;
    color: gray;
  }

  

  .btn {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .register-link {
    text-align: center;
  }
`;

const Competition = () => {
  return (
    <div>
      <Header />
    <div className="competition-container">
      <style>{styles}</style>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className="bx bx-user"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a  style={{ color: 'black' }} className="link"href="#">Forgot password</a>
        </div>
        <button type="submit" className="btn">
        <Link to="/ContactComp" style={{ color: 'black' }} className="link">Log In</Link  >
        </button>
          <div className="register-link">
            <p>
              Don't have an account? <Link to="/reguster" style={{ color: 'black' }} className="link">
  Register
</Link>
  

            </p>
          </div>
            
        
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default Competition;
