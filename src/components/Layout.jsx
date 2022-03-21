import { AppBar,Box,Toolbar,Typography} from '@mui/material';
import Usernavsection from './UserNavSection';
import Arcmap from './map/Arcmap';

const Layout = function(props) {
  const {user, category, polls_id } = props
  return (
      <div class="mapView">
        <Arcmap height="400px" voteList={[{cords:[-118.244, 34.052]}]}/>
      </div>
  );
}

export default Layout;
