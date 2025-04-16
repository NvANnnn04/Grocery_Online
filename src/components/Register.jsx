import React from "react";
import useRegister from "../hooks/useRegister";
import "../styles/components/Register.css";

const Register = () => {
  const { form, errors, handleChange, handleSubmit } = useRegister();

  return (
    <div className="register-page">
      <h1>Đăng ký tài khoản mua hàng của bạn </h1>
      <p>Tận hưởng các ưu đãi và khuyến mãi của grocery_online</p>
      <div className="register-box">
        <h2>Đăng ký</h2>

        <form id="login" onSubmit={handleSubmit}>
          <div className="input-item">
            <input
              type="email"
              name="gmail"
              placeholder="Email"
              value={form.gmail}
              onChange={handleChange}
              style={{ borderColor: errors.gmail ? "red" : undefined }}
            />
            {errors.gmail && <span className="error-text">{errors.gmail}</span>}
          </div>
          <div className="input-item">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              style={{ borderColor: errors.username ? "red" : undefined }}
            />
            {errors.username && (
              <span className="error-text">{errors.username}</span>
            )}
          </div>
          <div className="input-item">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              style={{ borderColor: errors.password ? "red" : undefined }}
            />
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>
          <div className="btn-dky">
            <button type="submit">Đăng ký</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
