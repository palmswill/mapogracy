import React from "react";
import { useParams, Link } from "react-router-dom";
import Mainpollpanel from "../components/PollsVote/components/MainPollPanel";

const Polldisplay = () => {
  const pollId = useParams().pollid;

  return (
    <div>
      <h1>Poll Id:{pollId}</h1>
      <Link to="/">Go back</Link>
      <Mainpollpanel />
    </div>
  );
};

export default Polldisplay;
