import React from "react";

import "components/styles.scss";
import Header from "components/PollsVotes/Header";
import MapView from "components/PollsVotes/MapView";
import VoteButton from "../../../../../reserve/components/VoteButton";

const MAPVIEW = "MAPVIEW";

const CONFIRM = "CONFIRM";


export default function PollsVote(props) {
  const { choice } = props;

  function onClose() {
    transition(MAPEVIEW, false);
  }

  return (
    <article className="mapview">
      <VoteButton />
      <MapView  />
    </article>
  );
}
