import React from "react";
import { Container, Typography } from "@mui/material";
// import TournamentForm from "./TournamentForm";
// import TeamForm from "./TeamForm";
// import TournamentList from "./TournamentList";
// import TeamList from "./TeamList";

function Home() {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Football Tournament Manager
      </Typography>

      {/* <TournamentForm />
      <TeamForm />

      <Typography variant="h5" gutterBottom>
        Tournaments
      </Typography>
      <TournamentList /> */}

      <Typography variant="h5" gutterBottom>
        Teams
      </Typography>
      {/* <TeamList /> */}
    </Container>
  );
}

export default Home;
