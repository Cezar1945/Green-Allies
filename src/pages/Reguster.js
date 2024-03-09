// Register.js
import React from 'react';
import { Link } from 'react-router-dom';

const styles = `
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Adăugăm pentru a centra și pe axa verticală */
  min-height: 100vh; /* Asigurăm centratul pe întreaga înălțime a ecranului */
}

.wrapp {
  width: 420px;
  background: transparent;
  border: 2px solid rgba(0, 0, 0, .2);
  backdrop-filter: blur(20px);
  color: #000;
  border-radius: 20px;
  padding: 30px 40px;
}

.wrapp h1 {
  font-size: 36px;
  text-align: center;
}

.wrapp .input-box {
  width: calc(100% - 40px); /* Reducem lungimea cu 40px */
  height: 50px;
  margin: 30px 0;
}

.input-box input {
  width: 100%;
  height: 1%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  font-size: 16px;
  color: #000;
  padding: 20px 45px 20px 20px;
}

.input-box input::placeholder {
  color: #000;
}

.input-box i {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
}

.wrapp .remember-forgot {
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;
}

.remember-forgot label input {
  accent-color: #000;
  margin-right: none;
}

.remember-forgot a {
  color: #000;
  text-decoration: none;
}

.remember-forgot a:hover {
  text-decoration: underline;
}

.wrapp .btn {
  width: 100%;
  height: 45px;
  background: #000;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px #000;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
}

.wrapp .register-link {
  font-size: 14.5px;
  text-align: center;
  margin: 20px;
}

.register-link p a {
  color: #000;
  text-decoration: none;
  font-weight: 600;
}

.register-link p a:hover {
  text-decoration: underline;
}
`;

const Register = () => {
  return (
    <div className="center-container">
      <style>{styles}</style>
      <div className="wrapp">
        <form action="">
          <h1>Register</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <Link to="/dashboard">
            <button type="submit" className="btn">
            <Link to="/competition">  Create account </Link>
            </button>
          </Link>
          <div className="register-link">
            <p>
              Already have an account? <Link to="/competition">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
