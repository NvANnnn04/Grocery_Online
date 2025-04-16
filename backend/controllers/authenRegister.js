import mssql from "mssql";
import dbConfig from "../config/dbConfig.js";

export const registerUser = async (req, res) => {
  const { username, password, gmail } = req.body;

  try {
    const pool = await mssql.connect(dbConfig);
    const checkEmail = await pool
      .request()
      .input("gmail", mssql.NVarChar, gmail)
      .query("SELECT * FROM Accouts WHERE gmail = @gmail");

    if (checkEmail.recordset.length > 0) {
      return res.status(400).json({ message: "Gmail đã được sử dụng!" });
    }
    const checkUser = await pool
      .request()
      .input("username", mssql.NVarChar, username)
      .query("SELECT * FROM Accouts WHERE username = @username");
    if (checkUser.recordset.length > 0) {
      return res.status(400).json({ message: "Username đã được sử dụng!" });
    }

    await pool
      .request()
      .input("username", mssql.NVarChar, username)
      .input("password", mssql.NVarChar, password)
      .input("gmail", mssql.NVarChar, gmail)
      .query(
        "INSERT INTO Accouts (username, password, gmail, time_create) VALUES (@username, @password, @gmail, GETDATE())"
      );
    res.status(201).json({ message: "Đăng ký thành công!" });
  } catch (err) {
    console.error("Lỗi đăng ký: ", err);
    res.status(500).json({ message: "Lỗi đăng ký!" });
  }
};
