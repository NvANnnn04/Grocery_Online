const express = require("express");
const mssql = require("mssql");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

mssql
  .connect(dbConfig)
  .then(() => {
    console.log("Thanh cong");
  })
  .catch((err) => {
    console.log("Loo ket noi:", err);
  });
