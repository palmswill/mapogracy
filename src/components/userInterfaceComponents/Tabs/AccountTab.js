import React, { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";

import axios from "axios";
import Regionalinputsection from "./AccountTabInputs/RegionalInputSection";
import { Button } from "@mui/material";
import Accountsectionwrapper from "./AccountTabInputs/AccountSectionWrapper";
import ProfileInputSection from "./AccountTabInputs/ProfileInputSection";
import { Box } from "@mui/system";
import DemographicInputSection from "./AccountTabInputs/DemographicInputSection";

export default function AccountTab() {
  const { user } = useAuth0();

  const [userInfo, setUserInfo] = useState({
    age: "",
    education: "",
    ethnicity: "",
    first_name: "",
    gender: "",
    id: user.email,
    income_range: "",
    industry: "",
    last_name: "",
    latitude: "",
    longitude: "",
    marital_status: "",
    religion: "",
    veteran: false,
  });

  let config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  };

  // when user change their info in input
  const handleUserInfoChange = (propName, value) => {
    setUserInfo((prev) => {
      return { ...prev, [propName]: value };
    });
  };

  // when user submit their information change
  const handleUserInfoSubmit = () => {
    axios
      .put(
        "http://mapocracy-api.azurewebsites.net/user/update",
        JSON.stringify(userInfo),
        config
      )
      .then((res) => res.data)
      .then(alert("Change Submitted!"))
      .then((result) =>
        setUserInfo((prev) => {
          return { ...prev, ...result };
        })
      )
      .then(console.log("submitted"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!user) return;
    axios
      .get(`http://mapocracy-api.azurewebsites.net/user/${user.email}`)
      .then((res) => res.data)

      .then((result) => setUserInfo(result))
      .catch((err) => console.log(err));
  }, [user]);

  if (!user) return <></>;

  const sectionList = [
    {
      title: "Regional Setting",
      description:
        "Please let us know where you are so we can represent you on the map.",
      key: "regions",
      Component: Regionalinputsection,
    },
    {
      title: "Profile Information",
      description:
        "Please let us know your name so we can let others know who started the poll.",
      key: "profile",
      Component: ProfileInputSection,
    },
    {
      title: "Demographic Data",
      description:
        "Please let us know who you are so present you as a voice that respresents your group. ",
        key:"demographic",
      Component: DemographicInputSection,
    },
  ];

  return (
    <>
      <Accountsectionwrapper
        {...{ sectionList, userInfo, handleUserInfoChange }}
      />
      <Box sx={{ display: "flex" }}>
        <Button
          sx={{ marginLeft: "auto",height:"50px" }}
          onClick={handleUserInfoSubmit}
          variant="contained"
        >
          Submit Change
        </Button>
      </Box>
    </>
  );
}
