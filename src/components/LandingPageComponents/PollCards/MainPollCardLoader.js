import React from "react";
import { Grid, Box, Skeleton } from "@mui/material";

const MainpollcardLoader = () => {
  // const { name, longitude, latitude } = poll[0];
  // const {user_id}=poll[1];
  // const { answers } = poll[2];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "5px",
          marginLeft: "2%",
        }}
      >
        <Skeleton animation="wave" variant="text" width="50%" height="50px" />
        <Skeleton
          sx={{ marginLeft: "auto" }}
          animation="wave"
          variant="text"
          width="10%"
          height="25px"
        />
      </Box>
      <Skeleton
        sx={{ marginLeft: "2%" }}
        animation="wave"
        variant="text"
        width="20%"
        height="25px"
      />

      <Grid
        sx={{ margin: "5px", height: "90%" }}
        wrap="wrap-reverse"
        container
        spacing={1}
      >
        <Grid item xs={9}>
          <Skeleton
            variant="rectangular"
            animation="wave"
            height="360px"
            width="100%"
          />
        </Grid>
        <Grid sx={{ minWidth: "150px", position: "relative" }} item xs={3}>
          <Skeleton
            variant="reactangular"
            animation="wave"
            height="360px"
            width="100%"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MainpollcardLoader;
