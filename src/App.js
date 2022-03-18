import './styles/default.scss';
import { Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import UserInterface from './pages/UserInterface';
import PollDisplay from './pages/PollDisplay';
import Navbar from './pages/components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* landing page link:"/"*/}
        <Route absolute path="/" element={<LandingPage/>} />
        {/* page showing the user interface linke eg. "/user" */}
        <Route path="/user" element={<UserInterface/>}/>
        {/* page showing individual poll link eg. "/polls/1"*/}
        <Route path="/polls/:pollid" element={<PollDisplay/>}/>
      </Routes>
    </div>
  );
}

export default App;
