import React from "react";
import LeftPage from "../pages/LeftPage";
import CenterPage from "../pages/CenterPage";
import RightPage from "../pages/RightPage";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

export default function LayoutComponent({ children }) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ backgroundColor: "yellow", minHeight: "200px" }}>
            <h1>Left Page</h1>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ backgroundColor: "cyan", minHeight: "400px" }}>
            <h1>Center Page</h1>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ backgroundColor: "magenta", minHeight: "200px" }}>
            <h1>Right Page</h1>
          </Box>
          <Box sx={{ backgroundColor: "gray", minHeight: "200px" }}>
            <h1>Right Page</h1>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
