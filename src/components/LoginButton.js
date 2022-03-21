import React from "react";
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
        <Button
          onClick={() => loginWithRedirect({ returnTo: window.location.origin })}
          variant="contained"
          color="primary"
        >
          Log in
        </Button>
  );
};

export default LoginButton;
