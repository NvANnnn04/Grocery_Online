import React from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin.js";
import "../styles/page/Login.css";

const Login = () => {
  const { form, err, handleChange, handleSubmit } = useLogin();
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Đăng nhập</h2>
        <form id="login" onSubmit={handleSubmit}>
          <div className="login-item">
            <input
              name="username"
              id="tk"
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              style={{ borderColor: err.username ? "red" : undefined }}
            />
          </div>
          <div className="login-item">
            <input
              name="password"
              id="mk"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              style={{ borderColor: err.password ? "red" : undefined }}
            />
            {err.username && <p className="error-text">{err.username}</p>}
            {err.password && <p className="error-text">{err.password}</p>}
          </div>
          <div className="login-button">
            <button type="submit">Đăng nhập</button>
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
