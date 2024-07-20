const Team = require("./../models/teamModel");

exports.CreateTeam = async (req, res) => {
  const { name, manager, players } = req.body;

  try {
    const existingTeam = await Team.findOne({ name });
    if (existingTeam) {
      return res.status(400).json({ error: "Team already exists" });
    }

    if (players.length < 3) {
      return res
        .status(400)
        .json({ error: "Atleast 3 players should be present in the team" });
    }

    // Create a new team instance
    const newTeam = new Team({
      name,
      manager,
      players,
    });

    // Save the team to the database
    const savedTeam = await newTeam.save();

    // Respond with the saved team
    res.status(201).json(savedTeam);
  } catch (error) {
    res.status(500).json({ message: error.errors });
  }
};

// Get All Teams
exports.GetAllTeams = async (req, res) => {
  try {
    const allTeams = await Team.find();
    return res.status(200).json(allTeams);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

// Delete Team
exports.deleteTeam = async (req, res) => {
  try {
    const teamId = req.params.id;
    const existingTeam = await Team.findById(teamId);

    if (!existingTeam) {
      return res.status(404).json({ error: "Team not found" });
    }

    await Team.findByIdAndDelete(teamId);

    return res.status(200).json({ message: "Team deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};

//Update Team
exports.updateTeam = async (req, res) => {
  try {
    const players = req.body.players
    if (players){
        if(players.length <3){
            return res.status(400).json({error: "Please add atleast 3 players"})
        }
    }
    const tour = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "Tournament Updated Successfully",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};
