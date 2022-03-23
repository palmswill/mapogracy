import React, { useState } from "react";
import { Box } from "@mui/system";
import CardWrapper from "./CardWrapper";
import { Button } from "@mui/material";

export default function PollCreatorContainer({toggleModal}) {
  const [poll, setPoll] = useState({});
  const [index, setIndex] = useState(0);

  const handleSetState = (props, newState) => {
    setPoll((prev) => {
      return { ...prev, [props]: newState };
    });
  };

  const cardList = [
    { name: "WHATS YOUR QUESTION?", card: <>TEST</> },
    { name: "WHATS YOUR CONTEXT?", card: <></> },
    { name: "LET US KNOW THE POSSIBILITIES", card: <></> },
    { name: "WHERE DO YOU WANT IT TO BE ASKED?", card: <></> },
    { name: "WHO DO YOU WANT TO ASK?", card: <></> },
    { name: "DO YOU WANT OTHERS TO KNOW WHEN THEY VOTE?", card: <></> },
    { name: "WHO DO YOU WANT TO ASK?", card: <></> },
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
          marginLeft: "95%",
          marginTop: "5px",
          fontSize: 25,
          color: "common.white",
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
