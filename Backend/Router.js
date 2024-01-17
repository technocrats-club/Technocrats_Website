const express = require("express");
const app = express();
const router = app.use(express.Router());
const mongoose = require("mongoose");

const HandleUser = mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: Number,
  branch: String,
  year: String,
});

const User = mongoose.model("User", HandleUser);

router.post("/register", async (req, res) => {
  const { name, email, phoneNumber, branch, year } = req.body;
  const Person = new User({ name, email, phoneNumber, branch, year });
  await Person.save();
});

router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
