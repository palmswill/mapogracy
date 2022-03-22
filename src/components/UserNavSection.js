import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button,Box } from "@mui/material";
import LoginButton from "./UserAuth/LoginButton";
import UserDropDown from "./UserAuth/UserDropDown";

const UserNavSection = () => {
  const {isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <h5>
          <Box sx={{ display: "flex",gap:"10px" }}>
            {" "}
            <Button variant="contained">Create Poll</Button>
            <UserDropDown />
          </Box>
        </h5>
      )}
      {!isAuthenticated && <LoginButton />}
    </>
  );
};

export default UserNavSection;
