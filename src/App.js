import React, { useState } from "react";

// import RNRestart from 'react-native-restart';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserInterface from "./pages/UserInterface";
import PollDisplay from "./pages/PollDisplay";
import { useAuth0 } from "@auth0/auth0-react";
import PollCreatorModal from "./components/createPollModal/PollCreatorModal";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import NavBar from "./components/NavBar";
import { CssBaseline } from "@mui/material";

import "./styles/default.scss";
import "./styles/app.scss";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

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
      font: {
        color: "#FFFFFF",
      },
      background: {
        paper: "#18181B",
      },
    },

    typography: {
      button: {
        textTransform: "none",
      },
    },
  });
  const [modalOpen, setModelOpen] = useState(false);

  const toggleModal = () => {
    setModelOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <NavBar {...{ toggleModal }} />
        {isAuthenticated && (
          <PollCreatorModal {...{ modalOpen, toggleModal }} />
        )}

        <CssBaseline />
        {isLoading ? (
          <>Now Loading</>
        ) : (
          <main>
            <Routes>
              {/* landing page link:"/"*/}
              <Route absolute path="/" element={<LandingPage />} />
              {/* page showing the user interface linke eg. "/user" */}
              <Route path="/user" element={<UserInterface />} />
              {/* page showing individual poll link eg. "/polls/1"*/}
              <Route path="/polls/:pollid" element={<PollDisplay />} />
              {/* route wheen nothing exist */}
              <Route path="*" element={<>Route Not Found</>} />
            </Routes>
          </main>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
