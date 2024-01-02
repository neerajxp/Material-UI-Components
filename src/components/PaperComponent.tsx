import { Box } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";

export default function PaperComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": { m: 1, width: 128, height: 128 },
      }}
    >
      <Paper elevation={3}>Paper text</Paper>
    </Box>
  );
}
