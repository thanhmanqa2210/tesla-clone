const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const {
  generateOTPToken,
  generateQRCode,
  verifyOTPToken,
  generateUniqueSecret,
} = require("../server/helpers/TFA");

const app = express();
app.use(cors());

// Cho phép lý dữ liệu từ form method POST
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function (req, res) {
  res.send(" Chưa có dữ liệu gì cả !");
});

const server = app.listen(PORT, () => {
  console.log(`server start on port ${PORT}`);
});
