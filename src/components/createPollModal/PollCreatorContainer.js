import React, { useState, useRef, useEffect } from "react";
import CardWrapper from "./CardWrapper";
import { Button } from "@mui/material";
import Quesioncard from "./cards/QuestionCard";
import Multiinputcard from "./cards/MultiInputCard";
import DrawableMap from "../map/DrawableMap";
import EmailListCard from "./cards/EmailListCard";
import VisibilityCard from "./cards/VisibilityCard";
import DateCard from "./cards/DateCard";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default React.memo(function PollCreatorContainer({ toggleModal }) {
  const { user } = useAuth0();
  const [userInfo, setUserInfo] = useState({});

  const poll = useRef({
    user_id: user.email,
    visibility:true,
    emailList:[]
  });

  if (userInfo.longitude) {
    poll.current.center = [userInfo.latitude, userInfo.longitude];
  }

  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://mapocracy-api.azurewebsites.net/user/${user.email}
    `
      )
      .then((res) => res.data)
      .then((result) => setUserInfo(result));
  }, [user]);

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
          cat
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
          mapCenter={
            poll.current.center
              ? [poll.current.center[1], poll.current.center[0]]
              : [-118.244, 34.052]
          }
          poll={poll}
          area={{
            radius: poll.current.radius ? poll.current.radius : 500,
            points: poll.current.center
              ? [[poll.current.center[1], poll.current.center[0]]]
              : [[-118.244, 34.052]],
          }}
        />
      ),
    },
    // {
    //   name: "WHO DO YOU WANT TO ASK?",
    //   card: (
    //     <EmailListCard
    //       key="emailList"
    //       handleSetState={handleSetState}
    //       poll={poll}
    //     />
    //   ),
    // },
    // {
    //   name: "DO YOU WANT OTHERS TO KNOW WHEN THEY VOTE?",
    //   card: (
    //     <VisibilityCard
    //       key="visibility"
    //       handleSetState={handleSetState}
    //       poll={poll}
    //     />
    //   ),
    // },
    {
      name: "",
      card: (
        <DateCard key="dates" poll={poll} handleSetState={handleSetState} />
      ),
    },
  ];

  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setIndex((prev) => prev - 1);
  };
  const handleSubmit = () => {
    const currentContext = poll.current;
    const {
      user_id,
      category,
      name,
      region,
      radius,
      description,
      start_at,
      end_at,
      answers,
    } = currentContext;

    if (!category) {
      console.log("cat missing");
    }
    if (!name) {
      console.log("question missing");
    }
    if (!region) {
      console.log("region missing");
    }
    if (!radius) {
      console.log("radius missing");
    }
    if (!description) {
      console.log("description missing");
    }
    if (!start_at || !end_at) {
      console.log("time missing");
    }

    if (!answers.length) {
      console.log("answers needed");
    }

    if (!user_id) {
      console.log("id missing");
    }

    if (
      user_id &&
      answers.length &&
      start_at &&
      end_at &&
      description &&
      radius &&
      region &&
      name &&
      category
    ) {
      console.log("pass");
      console.log(currentContext);
      axios
        .post(`http://mapocracy-api.azurewebsites.net/poll/new`, currentContext)
        .then((res) => console.log(res))
        .then(alert("Poll Created!"))
        .catch((err) => console.log(err));
      toggleModal();
    }
  };
  if (!userInfo) return <>Now Loading</>;
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
})
