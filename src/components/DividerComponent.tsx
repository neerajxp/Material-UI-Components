import React from "react";
import Box from "@mui/material/Box";
import MuiDivider from "@mui/material/Divider";

export default function DividerComponent() {
  return (
    <Box sx={{ padding: "10px", minHeight: "50vh" }}>
      <MuiDivider sx={{ backgroundColor: "#8ecae6", my: "50px" }} />
      <MuiDivider light sx={{ my: "50px" }} />
      <MuiDivider
        variant="inset"
        sx={{ backgroundColor: "#998087", borderBottomWidth: 5, my: "50px" }}
      />
      <MuiDivider
        variant="middle"
        sx={{ backgroundColor: "#219ebc", borderBottomWidth: 5, my: "50px" }}
      />
      <MuiDivider textAlign="left" sx={{ my: "50px" }}>
        {" "}
        LEFT{" "}
      </MuiDivider>

      <MuiDivider textAlign="right" sx={{ my: "50px" }}>
        {" "}
        RIGHT{" "}
      </MuiDivider>

      <Box sx={{ display: "flex" }}>
        <MuiDivider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: "red",
            borderRightWidth: 5,
            height: "100px",
            margin: "0 auto",
          }}
        ></MuiDivider>
      </Box>
      <MuiDivider component="li" sx={{ my: "50px" }} />
    </Box>
  );
}
