import Stack from "@mui/material/Stack";
import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

export default function LinkComponent() {
  return (
    <Box>
      <Box>
        <Stack sx={{ width: "200px", margin: "50px auto" }} spacing={1}>
          {/* <Link> Default Link</Link>
          <Link underline="none"> Underline none</Link>
          <Link underline="hover"> Underline hover</Link>
          <Link underline="always"> Underline always</Link>
          <Link color="error" variant="h5">
            {" "}
            Underline always
          </Link>
          <Link href="http://www.google.com"> Google Link</Link>
          <Link target="_blank" rel="noopener">
            {" "}
            Target Blank
          </Link> */}
          <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <Link component={RouterLink} to="/">
              Home
            </Link>
            <Link component={RouterLink} to="about">
              About
            </Link>
            <Link component={RouterLink} to="contact">
              Contract
            </Link>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
