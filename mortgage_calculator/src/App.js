import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import Navbar from "./Components/Navbar"

function App() {
  return <div className="App">
    <Navbar></Navbar>
    <Container maxWidth="xl" sx={{marginTop:4}}>
      <Gridcontainer spacing={5} alignItems="center">
        <GridItem ></GridItem>
      </Gridcontainer>

    </Container>

  </div>;
}

export default App;
