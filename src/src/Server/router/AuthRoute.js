const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Vlogers = mongoose.model("Vlogers");
const { jwtkey } = require("../keys");

router.post("/vloger", async (req, res) => {
  const { uname, email } = req.body;
  try {
    const vlogers = new Vlogers({
      uname,
      email,
    });
    await vlogers.save();

    const token = jwt.sign({ userId: vlogers._id }, jwtkey);

    res.send({ token: token });
  } catch (e) {
    res.status(422).send(e.message);
  }
});

module.exports = router;
