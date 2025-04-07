import React from "react";
import { Link } from "react-router-dom";
import "../styles/page/Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Đăng nhập</h2>
        <form id="login">
          <div className="login-item">
            <input id="tk" type="text" placeholder="Username" />
          </div>
          <div className="login-item">
            <input id="mk" type="password" placeholder="Password" />
          </div>
          <div className="login-button">
            <button>Đăng nhập</button>
          </div>
        </form>
        <p>
          Bạn chưa có tài khoảng?,
          <Link to="/dangky"> Đăng ký ngay</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
