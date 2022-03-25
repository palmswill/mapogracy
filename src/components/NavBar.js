import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import Usernavsection from "./UserNavSection";
import { useNavigate } from "react-router-dom";

const NavBar = ({ toggleModal }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="common" enableColorOnDark>
          <Toolbar>
            <Button
              sx={{ marginRight: "auto" }}
              onClick={() => {
                navigate("/");
              }}
            >
              <Typography variant="h5" color="common.white">
                Mapocracy
              </Typography>
            </Button>
            <Usernavsection {...{ toggleModal }} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
