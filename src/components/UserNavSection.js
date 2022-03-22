import React from "react";
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./UserAuth/LogOutButton"
import LoginButton from "./UserAuth/LoginButton"
import UserDropDown from "./UserAuth/UserDropDown";

const UserNavSection = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <h5>
          <Button >Create Poll</Button>
          <UserDropDown/>
        </h5>
      )}
      {!isAuthenticated && <LoginButton />}
    </>
  );
};

export default UserNavSection;
