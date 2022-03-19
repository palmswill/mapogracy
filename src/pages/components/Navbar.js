import { AppBar,Box,Toolbar,IconButton,Typography} from '@mui/material';
import Usernavsection from './UserNavSection';

const Navbar = () => {

  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ marginRight:"auto" }}>
            Mapocracy
          </Typography>
          <Usernavsection/>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default Navbar;
