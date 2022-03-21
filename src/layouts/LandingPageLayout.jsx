import React from "react";

const LandingPageLayout = ({ children }) => {
  return (
    <div id="landing-page">
      <section className="top-poll">
        {children[0]}
      </section>
      <section className="poll-browse">
        {children[1]}
      </section>
    </div>
  );
};

export default LandingPageLayout;
