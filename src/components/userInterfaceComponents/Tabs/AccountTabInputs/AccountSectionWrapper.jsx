import { Typography, Paper } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";

const Accountsectionwrapper = ({
  sectionList = [],
  userInfo,
  handleUserInfoChange,
}) => {
  return (
    <>
      {sectionList.map((section) => {
        const { title, description, Component, key } = section;

        return (
          <Box sx={{ marginBlock: "20px" }} key={key}>
            <Typography key={title+"h4"} variant="h4" sx={{ marginBottom: "20px" }}>
              {title}
            </Typography>
            <Typography key={title+"h6"} variant="h6" sx={{ marginBottom: "20px" }}>
              {description}
            </Typography>
            <Paper sx={{ padding: "3%", borderRadius: 2 }}>
              <Component {...{ userInfo, handleUserInfoChange }} />
            </Paper>
          </Box>
        );
      })}
    </>
  );
};

export default Accountsectionwrapper;
