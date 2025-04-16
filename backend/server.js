import express from "express";
import mssql from "mssql";
import cors from "cors";
import dotenv from "dotenv";
import authenLog from "./routes/authenLog.js";
import authenRegis from "./routes/authenRegis.js";
import dbConfig from "./config/dbConfig.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mssql
  .connect(dbConfig)
  .then(() => {
    console.log("Kết nối cơ sở dữ liệu thành công!");
  })
  .catch((err) => {
    console.error("Lỗi kết nối DB: ", err);
  });

app.use("/api/auth", authenLog);
app.use("/api/auth", authenRegis);
app.get("/", (req, res) => {
  res.send("API đang chạy...");
});

app.listen(3000, () => {
  console.log("Server đang chạy ở cổng 3000");
});
