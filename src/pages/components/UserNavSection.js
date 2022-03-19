import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogOutButton";
import LoginButton from "./LoginButton";

const Usernavsection = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);

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

export default Usernavsection;
