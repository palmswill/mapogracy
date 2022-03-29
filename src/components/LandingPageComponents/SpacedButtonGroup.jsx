import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SpacedButtonGroup = ({ groupItems, currentIndex, setCurrentIndex }) => {
  return (
    <>
      <Box
        sx={{
          disaplay: "flex",
          flexWrap: "wrap",
          gap: "5%",
          marginBlock: "10px",
        }}
      >
        {groupItems.map((itemText, index) => {
          const isActive = currentIndex === index;
          return isActive ? (
            <Button
              size="medium"
              key={index + itemText}
              sx={{ bgcolor: "primary.main", margin: "1%" }}
              variant="contained"
              onClick={() => setCurrentIndex(index)}
            >
              {" "}
              {itemText}{" "}
            </Button>
          ) : (
            <Button
              size="medium"
              key={index + itemText}
              sx={{ bgcolor: "secondary.main", margin: "1%" }}
              variant="contained"
              onClick={() => setCurrentIndex(index)}
            >
              {" "}
              {itemText}{" "}
            </Button>
          );
        })}
      </Box>
    </>
  );
};

export default SpacedButtonGroup;
