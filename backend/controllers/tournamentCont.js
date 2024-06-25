const Tournament = require("./../models/tournamentModel");
const User = require("./../models/userModel");

exports.CreateTournament = async (req, res) => {
  const { name, date, location, organizer } = req.body;

  // Validate required fields
  if (!name || !date || !location || !organizer) {
    return res.status(400).json({
      error: `Missing required field(s): ${[
        !name && "name",
        !date && "date",
        !location && "location",
        !organizer && "organizer",
      ]
        .filter(Boolean)
        .join(", ")}`,
    });
  }

  try {
    // Check if the organizer exists
    const existingUser = await User.findById(organizer);
    if (!existingUser) {
      return res.status(404).json({ error: "Organizer ID is not correct" });
    }

    const existingTournament = await Tournament.find({
      name: name,
      location: location,
    });

    if (existingTournament) {
      return res.status(400).json({ error: "Tournament already exist" });
    }

    // Create a new tournament
    const newTournament = new Tournament({
      name,
      date,
      location,
      organizer,
    });

    // Save the tournament to the database
    await newTournament.save();

    return res.status(201).json({
      message: "Tournament created successfully",
      result: newTournament,
    });
  } catch (error) {
    // Handle any errors that occur during the process
    return res.status(500).json({
      error: "An error occurred while creating the tournament",
      details: error.message,
    });
  }
};


// Get All Tournaments
exports.getAllTournaments = async (req, res) => {
  try {
    allTournaments = await Tournament.find();
    return res.status(200).json(allTournaments)
  } catch (err) {
    return res.status(400).json({"error": err})
  }
};
