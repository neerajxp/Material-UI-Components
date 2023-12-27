import { Stack } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import sponge_bob from "../assets/sponge_bob.png";

export default function BoxComponent() {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#f8e490", minHeight: "50vh" }}>
        <Stack sx={{ width: "200px", margin: "auto" }} spacing={1}>
          <Box>I am box</Box>
          <Box sx={{ bgcolor: "primary.main" }}>I am primary color text</Box>
          <Box sx={{ bgcolor: "secondary.main" }}>
            I am box with secondary color text
          </Box>
          <Box sx={{ m: 2 }}>Margin 1</Box>
          <Box sx={{ p: 1 }}>I am box</Box>
          <Box component="span">I am span</Box>
          <Box component="img" src={sponge_bob}></Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {[1, 2, 3, 4, 5].map((_, index) => {
              return (
                <Box>
                  <Box
                    component="img"
                    src={sponge_bob}
                    sx={{ maxHeight: "50px", boxShadow: 5 }}
                  />
                </Box>
              );
            })}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {[1, 2, 3, 4].map((_, index) => {
              return (
                <Box>
                  <Box
                    component="img"
                    src={sponge_bob}
                    sx={{ maxHeight: "50px", boxShadow: 3 }}
                  />
                </Box>
              );
            })}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
