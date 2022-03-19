import "./styles/default.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserInterface from "./pages/UserInterface";
import PollDisplay from "./pages/PollDisplay";
import Navbar from "./components/PollsVote/components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const { isAuthenticated } = useAuth0();

  const appTheme = createTheme({
    palette: {
      mode:"dark",
      primary: {
        main: "#9147FF",
      },
      secondary: {
        main: "#3A3A3D",
      },
      common:{
        black:"#18181B"
      },

      background: {
        default: "#0E0E10",
        paper:"#0E0E10"
      },
    },
    typography: {
      button: {
        textTransform: 'none'
      }
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <Navbar />
        <Routes>
          {/* landing page link:"/"*/}
          <Route absolute path="/" element={<LandingPage />} />
          {/* page showing the user interface linke eg. "/user" */}
          <Route
            path="/user"
            element={isAuthenticated ? <UserInterface /> : <></>}
          />
          {/* page showing individual poll link eg. "/polls/1"*/}
          <Route path="/polls/:pollid" element={<PollDisplay />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
