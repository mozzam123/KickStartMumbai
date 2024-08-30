import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";

function TeamForm() {
  const [team, setTeam] = useState({ name: "", manager: "", players: "" });

  const handleChange = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/teams", {
        ...team,
        players: team.players
          .split(",")
          .map((player) => ({ name: player.trim(), age: 25 })), // Mock age for now
      });
      console.log(response);
      alert("Team Created Successfully!");
    } catch (error) {
      alert("Error Creating Team");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={3}>
      <TextField
        label="Team Name"
        name="name"
        value={team.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Manager"
        name="manager"
        value={team.manager}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Players (Comma-separated names)"
        name="players"
        value={team.players}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Team
      </Button>
    </Box>
  );
}

export default TeamForm;
