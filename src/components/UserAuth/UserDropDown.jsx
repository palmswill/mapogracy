import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import axios from "axios";

export default function UserDropDown() {
  const { user, logout } = useAuth0();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [userName, setUserName] = React.useState("");

  React.useEffect(() => {
    axios
      .get(`http://mapocracy-api.azurewebsites.net/user/${user.email}`)
      .then((res) => res.data)
      .then((result) => setUserName(result.first_name));
  }, [user.email]);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="demo-positioned-button"
        variant="contained"
        color="secondary"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Box sx={{ fontSize: "24px", marginRight: "10px" }}>
          <i className="fa-solid fa-circle-user"></i>
        </Box>
        {userName?userName:user.email}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/user");
          }}
        >
          User Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
