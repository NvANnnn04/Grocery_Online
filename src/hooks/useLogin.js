import { use, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validateLoginForm } from "../utils/validateLoginForm";

const useLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [err, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = validateLoginForm(form);
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        form
      );
      localStorage.setItem("token", res.data.token || "");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Đăng nhập thất bại!";
      setErrors(errorMessage);
    }
  };
  return {
    form,
    err,
    handleChange,
    handleSubmit,
  };
};
export default useLogin;
