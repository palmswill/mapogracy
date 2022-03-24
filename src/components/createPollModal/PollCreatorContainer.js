import React, { useState, useRef } from "react";
import CardWrapper from "./CardWrapper";
import { Button } from "@mui/material";
import Quesioncard from "./cards/QuestionCard";
import Multiinputcard from "./cards/MultiInputCard";
import DrawableMap from "../map/DrawableMap";
import EmailListCard from "./cards/EmailListCard";
import VisibilityCard from "./cards/VisibilityCard";
import DateCard from "./cards/DateCard";

export default function PollCreatorContainer({ toggleModal }) {
  const poll = useRef({});
  const [index, setIndex] = useState(6);

  const handleSetState = (propName, newState) => {
    poll.current = { ...poll.current, [propName]: newState };
  };

  const cardList = [
    {
      name: "WHATS YOUR QUESTION?",
      card: (
        <Quesioncard
          key="name"
          propName="name"
          poll={poll}
          handleSetState={handleSetState}
        />
      ),
    },
    {
      name: "WHATS YOUR CONTEXT?",
      card: (
        <Quesioncard
          key="description"
          propName="description"
          poll={poll}
          handleSetState={handleSetState}
        />
      ),
    },
    {
      name: "LET US KNOW THE POSSIBILITIES",
      card: (
        <Multiinputcard
          key="answer"
          propName="answers"
          {...{ poll, handleSetState }}
        />
      ),
    },
    {
      name: "WHERE DO YOU WANT IT TO BE ASKED?",
      card: (
        <DrawableMap
          handleSetState={handleSetState}
          key="location"
          width="80%"
          height="20vw"
          mapCenter={poll.current.center?poll.current.center:[-118.244, 34.052]}
          poll={poll}
          area={{
            radius: poll.current.radius ? poll.current.radius : 500,
            points: poll.current.center
              ? [poll.current.center]
              : [[-118.244, 34.052]],
          }}
        />
      ),
    },
    {
      name: "WHO DO YOU WANT TO ASK?",
      card: <EmailListCard key="emailList" handleSetState={handleSetState} poll={poll} />,
    },
    {
      name: "DO YOU WANT OTHERS TO KNOW WHEN THEY VOTE?",
      card: <VisibilityCard key="visibility" handleSetState={handleSetState} poll={poll} />,
    },
    { name: "", card: <DateCard key="dates" poll={poll} handleSetState={handleSetState}/> },
  ];

  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setIndex((prev) => prev - 1);
  };
  const handleSubmit = () => {
    setIndex(0);
  };

  return (
    <>
      <Button
        sx={{
          marginLeft: "94%",
          marginTop: "5px",
          fontSize: 25,
          color: "common.white",
          bgcolor: "transparent",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent",
          },
        }}
        onClick={toggleModal}
      >
        <i className="fa-solid fa-xmark"></i>
      </Button>
      <CardWrapper
        {...{ handleNext, handlePrevious, handleSubmit }}
        first={index === 0}
        name={cardList[index].name}
        last={index === cardList.length - 1}
      >
        {cardList[index].card}
        <></>
      </CardWrapper>
    </>
  );
}
