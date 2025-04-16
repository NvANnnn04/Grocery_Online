import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validateRegisterForm } from "../utils/validateForm";

const useRegister = () => {
  const navigate = useNavigate();
  //Xét form
  const [form, setForm] = useState({
    username: "",
    password: "",
    gmail: "",
  });
  //Xét lỗi
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  //Xét đăng ký, thông báo lỗilỗi
  const handleSubmit = async (e) => {
    e.preventDefault(); //
    const validateErrors = validateRegisterForm(form);
    if (Object.keys(validateErrors).length > 0) {
      //lỗi trong validateErrors có thì báo lỗilỗi
      setErrors(validateErrors);
      return;
    }
    //Gọi api
    try {
      console.log("Dữ liệu gửi đi:", form);
      const res = await axios.post(
        "http://localhost:3000/api/auth/dangky",
        form
      );
      setForm({ username: "", password: "", gmail: "" });
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Đăng ký thất bại!";
      alert(errorMessage);
    }
  };
  return {
    form,
    errors,
    handleChange,
    handleSubmit,
  };
};
export default useRegister;
