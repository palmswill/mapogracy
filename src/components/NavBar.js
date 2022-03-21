import React from 'react';
import { AppBar,Box,Toolbar,Typography} from '@mui/material';
import Usernavsection from './UserNavSection';

const NavBar = () => {

  return (
    <>
     <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" color="common" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ marginRight:"auto" }}>
            Mapocracy
          </Typography>
          <Usernavsection />
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default NavBar;
