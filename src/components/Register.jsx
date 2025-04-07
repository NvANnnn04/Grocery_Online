import React from "react";
import "../styles/components/Register.css";
const Register = () => {
  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Đăng ký</h2>
        <form id="login">
          <div className="input-item">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-item">
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-item">
            <input type="password" placeholder="Password" />
          </div>
          <div className="btn-dky">
            <button>Đăng ký</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
