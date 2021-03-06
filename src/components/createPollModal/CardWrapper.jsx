import { Button, Typography, Box } from "@mui/material";
import React from "react";

const Cardwrapper = ({
  name,
  last,
  children,
  first,
  handleNext,
  handlePrevious,
  handleSubmit,
}) => {
  const buttonStyle = {
    width: "100px",
  };

  return (
    <Box
      sx={{
        paddingTop: "2%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        gap:"20px"
      }}
    >
      <Typography textAlign={"center"} variant="h4">{name}</Typography>
      {children}
      <Box
        sx={{
          display: "flex",
          flexDirection: last ? "column" : "row",
          gap: "20px",
        }}
      >
        {last && (
          <Button
            sx={buttonStyle}
            size="large"
            variant="contained"
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        )}
        {!first && (
          <Button
            sx={buttonStyle}
            variant="contained"
            color="common"
            onClick={handlePrevious}
          >
            PREVIOUS
          </Button>
        )}

        {!last && (
          <Button sx={buttonStyle} variant="contained" onClick={handleNext}>
            NEXT
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Cardwrapper;
