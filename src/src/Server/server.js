const express = require("express");
const { mongoUrl } = require("./keys");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
const server = express();
const bodyParser = require("body-parser");
require("./model/Vlogers");

const requireToken = require("./middleware/requireToken");
const authRoute = require("./router/AuthRoute");
server.use(cors());
server.use(bodyParser.json());
server.use(authRoute);
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("Some error Ocurred", err);
});

server.get("/login", requireToken, (req, res) => {
  res.send("Your name is" + req.Vlogers.uname);
});

server.listen(PORT, () => {
  console.log("Server Running" + PORT);
});
