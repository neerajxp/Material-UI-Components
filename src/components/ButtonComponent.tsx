import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Box, Button, ButtonGroup, Stack } from "@mui/material";
export default function ButtonComponent() {
  return (
    <Box
      sx={{
        backgroundColor: "#BCF4F5",
        minHeight: "80vh",
      }}
    >
      <Stack sx={{ width: "200px", margin: "auto" }} spacing={1}>
        <Button> Click Me!! </Button>
        <Button variant="contained">Simple</Button>
        <Button disabled>Disabled</Button>
        <Button href="#">Link </Button>
        <Button onClick={() => alert("Button Clicked")}>OnClick</Button>
        <Button variant="contained" size="small">
          {" "}
          Contained small
        </Button>
        <Button variant="contained" size="large" color="secondary">
          {" "}
          Contained large
        </Button>
        <Button
          variant="contained"
          style={{ fontSize: "11px", background: "#D9F2B4", color: "black" }}
        >
          {" "}
          Contained fontsize 11 px
        </Button>
        <Button variant="contained" startIcon={<AddIcon />}>
          {" "}
          Start Icon
        </Button>
        <Button variant="contained" endIcon={<AddIcon />}>
          {" "}
          End Icon
        </Button>

        <ButtonGroup>
          <Button variant="contained" color="success" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button
            variant="contained"
            color="warning"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" color="success">
          <Button startIcon={<EditIcon />}> Edit</Button>
          <Button startIcon={<DeleteIcon />}> Delete</Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
}
