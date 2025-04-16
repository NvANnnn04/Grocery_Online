export const validateLoginForm = (form) => {
  const errors = {};
  if (!form.username) {
    errors.username = "Hãy điền tên tài khoản!";
  }
  if (!form.password) {
    errors.password = "Hãy điền mật khẩu!";
  }
  return errors;
};
