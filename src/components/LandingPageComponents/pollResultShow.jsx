import React from "react";
import { Grid, Paper } from "@mui/material";

const Pollresultshow = ({result=Array.from(Array(6))}) => {
 
  
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {result.map((_, index) => (
        <Grid item xs={4} sm={4} md={4} key={index}>
          <Paper sx={{ height: "200px" }}>
            
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Pollresultshow;
