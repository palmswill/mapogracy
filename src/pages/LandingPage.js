import React, { useState } from "react";
import axios from "axios";
import LandingPageLayout from "../layouts/LandingPageLayout";
import TopPoll from "../components/LandingPageComponents/TopPoll";
import PollBrowser from "../components/LandingPageComponents/PollBrowser";

import "../styles/app.scss";

const Landingpage = (props) => {
  const [poll, setPoll] = useState({});


  return (
    <>
      <LandingPageLayout>
        <TopPoll/>
        <PollBrowser />
      </LandingPageLayout>
    </>
  );
};

export default Landingpage;
