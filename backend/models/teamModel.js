const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  age: {
    type: Number,
    required: [true, "age field is required"],
  },
});

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name field is required"],
    },
    manager: {
      type: String,
      required: [true, "manager field is required"],
    },
    players: [playerSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);
