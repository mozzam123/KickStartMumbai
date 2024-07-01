const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  date: {
    type: Date,
    required: [true, "date is required"],
  },
  match_type: {
    type: Number,
    required: [true, "match_type is required"],
  },
  location: {
    type: String,
    required: [true, "location is required"],
  },
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
    },
  ],
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "organizer is required"],
  },
}, { timestamps: true });

module.exports = mongoose.model('Tournament', tournamentSchema);
