import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";

function TournamentList() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    async function fetchTournaments() {
      const response = await axios.get("/api/tournaments");
      setTournaments(response.data);
    }
    fetchTournaments();
  }, []);

  return (
    <List>
      {tournaments.map((tournament) => (
        <ListItem key={tournament._id}>
          <ListItemText
            primary={tournament.name}
            secondary={`Date: ${tournament.date}, Location: ${tournament.location}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default TournamentList;
