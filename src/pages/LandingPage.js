import React from "react";
import LandingPageLayout from "../layouts/LandingPageLayout";
import TopPoll from "../components/LandingPageComponents/TopPoll";
import PollBrowser from "../components/LandingPageComponents/PollBrowser";

import "../styles/app.scss";

const Landingpage = () => {


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
