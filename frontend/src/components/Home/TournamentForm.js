import React, { useState, useEffect } from "react";
import { TextField, Button, Box, MenuItem } from "@mui/material";
import axios from "axios";

function TournamentForm() {
  const [tournament, setTournament] = useState({
    name: "",
    date: "",
    match_type: "",
    location: "",
    organizer: "",
    teams: [],
  });

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchTeams() {
      const response = await axios.get("/api/teams");
      setTeams(response.data);
    }
    fetchTeams();
  }, []);

  const handleChange = (e) => {
    setTournament({ ...tournament, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/tournaments", tournament);
      alert("Tournament Created Successfully!");
    } catch (error) {
      alert("Error Creating Tournament");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={3}>
      <TextField
        label="Tournament Name"
        name="name"
        value={tournament.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date"
        name="date"
        type="date"
        value={tournament.date}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Match Type"
        name="match_type"
        value={tournament.match_type}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Location"
        name="location"
        value={tournament.location}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        select
        label="Teams"
        name="teams"
        value={tournament.teams}
        onChange={handleChange}
        fullWidth
        margin="normal"
        SelectProps={{ multiple: true }}
      >
        {teams.map((team) => (
          <MenuItem key={team._id} value={team._id}>
            {team.name}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Create Tournament
      </Button>
    </Box>
  );
}

export default TournamentForm;
