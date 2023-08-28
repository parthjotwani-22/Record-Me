const mongoose = require("mongoose");

const VlogersSchema = new mongoose.Schema({
  uname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
});

const VlogersModel = mongoose.model("Vlogers", VlogersSchema);

module.exports = VlogersModel;
