import React from "react";
import { Grid, Paper, Box, Skeleton } from "@mui/material";

export default function PollDisplayerLoadingSection({ cardNumber = 9 }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ minHeight: "500px" }}
    >
      {Array.from(new Array(cardNumber)).map((_, index) => (
        <Grid item xs={4} sm={4} md={4} key={index}>
          <Paper
            key={index}
            // variant="rectangular"
            sx={{ width: "100%", minHeight: "200px", padding: "20px" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Skeleton animation="wave" variant="text" width="80%" height="30px" />
              <Box sx={{ display: "flex" }}>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="30%"
                  height="30px"
                />
                <Skeleton
                  animation="wave"
                  variant="text"
                  sx={{ marginLeft: "auto" }}
                  width="10%"
                  height="30px"
                />
              </Box>
              <Skeleton animation="wave" variant="rectangular" height="75px" />
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
