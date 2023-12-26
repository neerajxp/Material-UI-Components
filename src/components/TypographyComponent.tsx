import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function TypographyComponent() {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#f4a261",
          minHeight: "100vh",
        }}
      >
        <Stack sx={{ width: "200px", margin: "auto" }} spacing={1}>
          <Typography variant="h1">hi</Typography>
          <Typography variant="h2">I am h2</Typography>
          <Typography variant="subtitle1">I am subtitle1</Typography>
          <Typography variant="subtitle2">I am subtitle2</Typography>
          <Typography variant="body1">I am body1</Typography>
          <Typography variant="body2">I am body2</Typography>
          <Typography variant="caption">Caption Text</Typography>
          <Typography variant="overline" color="primary">
            Overline Text
          </Typography>
          <Typography variant="h4" style={{ color: "#2a9d8f" }}>
            I am body 2
          </Typography>
          <Typography variant="h4" component="div">
            I am div
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
