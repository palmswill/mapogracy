import "./styles/default.scss";
import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserInterface from "./pages/UserInterface";
import PollDisplay from "./pages/PollDisplay";
import { useAuth0 } from "@auth0/auth0-react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import NavBar from "./components/NavBar";
import { CssBaseline } from "@mui/material";

function App() {
  const { isAuthenticated } = useAuth0();

  const appTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#9147FF",
      },
      secondary: {
        main: "#3A3A3D",
      },
      common: {
        black: "#18181B",
      },
      background:{
        paper:"#18181B"
      }
    },
    
    typography: {
      button: {
        textTransform: "none",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <NavBar />
        <CssBaseline />
        <main>
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
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
