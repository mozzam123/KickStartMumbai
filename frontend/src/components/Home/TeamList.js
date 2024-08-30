import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";

function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchTeams() {
      const response = await axios.get("/api/teams");
      setTeams(response.data);
    }
    fetchTeams();
  }, []);

  return (
    <List>
      {teams.map((team) => (
        <ListItem key={team._id}>
          <ListItemText
            primary={team.name}
            secondary={`Manager: ${team.manager}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default TeamList;
