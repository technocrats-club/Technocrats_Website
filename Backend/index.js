const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const Router = require("./Router");

dotenv.config({
  path: "./config.env",
});

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

require("../Backend/DB/dbconnect");

app.post("/register", Router);
app.get("/", Router);

app.listen(4000, () => {
  console.log(`Server is running on port ${4000}`);
});
