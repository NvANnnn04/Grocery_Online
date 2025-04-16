export const validateRegisterForm = (form) => {
  const errors = {};
  if (!form.gmail) {
    errors.gmail = "Email không được để trống!";
  } else if (!/\S+@\S+\.\S+/.test(form.gmail)) {
    {
      /*\S+ là chuỗi 1 ký tự trở đi
      + với @ + \S+ . \S+ 
      ví dụ :  annguyen@gmail.comcom   
      test(string) hàm kiểm tra input có khớp đk không */
    }
    errors.gmail = "Email không hợp lệ!";
  }
  if (!form.username) {
    errors.username = " Vui lòng điền tài khoản!";
  } else if (/\s/.test(form.username)) {
    // \s là regex cho ký tự trắng
    errors.username = "Tên không được có chứa ký tự trắng!";
  }
  if (!form.password) {
    errors.password = " Vui lòng điền password!";
  } else if (form.password.length < 6) {
    errors.password = " Mật khẩu phải ít nhất 6 ký tự";
  } else if (/\s/.test(form.password)) {
    errors.password = "Mât khẩu không được có chứa ký tự trắng!";
  }

  return errors;
};
