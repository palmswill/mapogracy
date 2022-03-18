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
        {/* landing page */}
        <Route absolute path="/" element={<LandingPage/>} />
        {/* page showing the user interface */}
        <Route path="/user" element={<UserInterface/>}/>
        {/* page showing individual poll */}
        <Route path="/polls/:pollid" element={<PollDisplay/>}/>
      </Routes>
    </div>
  );
}

export default App;
