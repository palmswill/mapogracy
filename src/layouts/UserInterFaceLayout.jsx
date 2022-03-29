import React, { useState } from "react";
import { Box } from "@mui/system";
import {  Tab, Typography } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";


import { useAuth0 } from "@auth0/auth0-react";

import AccountTab from "../components/userInterfaceComponents/Tabs/AccountTab";
// import InvitationTab from "../components/userInterfaceComponents/Tabs/InvitationTab";
// import EmailListTab from "../components/userInterfaceComponents/Tabs/EmailListTab";
import UserPollTab from "../components/userInterfaceComponents/Tabs/UserPollTab";

export default function UserInterFaceLayout() {
  const {isAuthenticated,isLoading} =useAuth0();

  const [tabIndex, setCurrentTab] = useState("0");

  const tabs = [
    { name: "Account Setting", component: <AccountTab/> },
    { name: "Your polls", component: <UserPollTab/> },
    // { name: "Invitations", component: <InvitationTab/>},
    // { name: "Email Lists", component: <EmailListTab/> },
  ];

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
  if (isLoading){
    return <>Now Loading</>
  }

  if (!isAuthenticated){
    return <>Opps...Look Like Your Are Not logged in?</>
  }

  return (
    <>
      <Typography variant="h4">User Panel</Typography>
      <TabContext value={tabIndex}>
        <Box sx={{marginTop:"20px", borderBottom: 1, borderColor: "divider" }}>
          <TabList  onChange={handleChange}>
            {tabs.map((tab,index) => (
              <Tab sx={{fontSize:"20px",width:"15%"}} key={tab.name} label={tab.name} value={`${index}`} />
            ))}
          </TabList>
        </Box>
        {tabs.map((tab,index) => (
          <TabPanel key={tab.name} value={`${index}`} >
            {tab.component}
          </TabPanel>
        ))}
      </TabContext>
    </>
  );
}
