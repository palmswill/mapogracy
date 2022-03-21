import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./UserAuth/LogOutButton"
import LoginButton from "./UserAuth/LoginButton"

const UserNavSection = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <h5>
          {user.email}
          <LogoutButton />
        </h5>
      )}
      {!isAuthenticated && <LoginButton />}
    </>
  );
};

export default UserNavSection;