import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

const Regionalinputsection = ({ userInfo, handleUserInfoChange }) => {
  const { longitude, latitude } = userInfo;

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      handleUserInfoChange("latitude", latitude);
      handleUserInfoChange("longitude", longitude);
    });
  };

  return (
    <section className="regional-inputs">
      <Box
        sx={{
          paddingBlock: "25px",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <Typography variant="h5">{`Your Known Location : [ ${
          latitude ? latitude : "?"
        } , ${longitude ? longitude : "?"} ]`}</Typography>
        <Button
          onClick={handleGetLocation}
          variant="contained"
          sx={{ width: "200px", height: "40px" }}
        >
          Get Current Location
        </Button>
      </Box>
    </section>
  );
};

export default Regionalinputsection;
