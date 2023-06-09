import { Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import ActionAreaCard from "../../components/Card";


export default function () {
  return (
    <>
      <Container maxWidth="lg">
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            margin: "10px 0",
            padding: "auto"
            // justifyContent: "space-between",
          }}
        >
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
        </Box>
      </Container>
    </>
  );
}
