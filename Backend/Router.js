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
  college: String,
});

const user = mongoose.model("User", HandleUser);

router.post("/register", async (req, res) => {
  const { name, email, phoneNumber, branch, year, college } = req.body;
  try {
    const Person = new user({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      branch: branch,
      year: year,
      college: college,
    });
    await Person.save();
    res.status(200).json({ message: "details saved " });
  } catch (err) {
    console.log(err);
  }
});

router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
