import './styles/default.scss';
import { Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import UserInterface from './pages/UserInterface';
import PollDisplay from './pages/PollDisplay';
import Navbar from './pages/components/Navbar';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isAuthenticated} =useAuth0();
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* landing page link:"/"*/}
        <Route absolute path="/" element={<LandingPage/>} />
        {/* page showing the user interface linke eg. "/user" */}
        <Route path="/user" element={isAuthenticated?<UserInterface/>:<></>}/>
        {/* page showing individual poll link eg. "/polls/1"*/}
        <Route path="/polls/:pollid" element={<PollDisplay/>}/>
      </Routes>
    </div>
  );
}

export default App;
