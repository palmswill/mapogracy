import { Skeleton } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";

export default function PollDisplayLoader() {
  return (
    <>
      <Skeleton variant="text" height="40px" width="50%" />
      <Skeleton variant="text" height="15px" width="10%" />
      <Skeleton sx={{marginBottom:"20px"}}variant="text" height="15px" width="30%" />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <Skeleton variant="rectangular" height="500px" width="65%" />
        <Skeleton  variant="rectangular" height="500px" width="30%" />
      </Box>
    </>
  );
}
