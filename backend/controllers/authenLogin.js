import express from "express";
import sql from "mssql";
import dbConfig from "../config/dbConfig.js";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Thiếu tên đăng nhập hoặc mật khẩu!" });
  }
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool
      .request()
      .input("username", sql.NVarChar, username)
      .input("password", sql.NVarChar, password)
      .query(
        "SELECT * FROM Accouts WHERE username = @username AND password = @password"
      );
    if (result.recordset.length === 0) {
      return res
        .status(401)
        .json({ message: "Tài khoảng hoặc mật khẩu không chính xác!" });
    }
    const user = result.recordset[0];
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      message: "Đăng nhập thành công!",
      token,
      user: { id: user.id, username: user.username },
    });
  } catch (error) {
    console.log("Lỗi đăng nhập: ", error);
    return res.status(500).json({ message: "Lỗi server!" });
  }
};
