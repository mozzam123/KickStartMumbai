const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
