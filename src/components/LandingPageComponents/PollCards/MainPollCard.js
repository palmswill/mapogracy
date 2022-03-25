import React, { useMemo } from "react";
import {
  Grid,
  Typography,
  List,
  Box,
  ListItemText,
  ListItem,
} from "@mui/material";
import Arcmap from "../../map/Arcmap";
// import { calculteAnswers } from "../../../helpers/pollHelper";

const Mainpollcard = ({ poll }) => {
  const { name, longitude, latitude } = poll[0];
  const {user_id}=poll[1];
  const { answers } = poll[2];
  const voteList = poll.votes ? poll.votes : [];

  let totalVotes = useMemo(() => {
    let count = 0;
    answers.forEach((answer) => (count += answer.vote_count));
    return count;
  }, [answers]);

  const sortedAnswers = answers
    .slice()
    .sort((a, b) => b.vote_count - a.vote_count);

  const center = [ latitude,longitude];

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Typography variant="h6" marginLeft="2%">
          {`${name} - hosted by `}
          <Box component="span" sx={{ color: "primary.main" }}>
            {user_id}
          </Box>
        </Typography>
        <Box
          component="span"
          sx={{
            marginLeft: "auto",
            marginRight: "1%",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <i className="fa-solid fa-user"></i>
          {<span>{totalVotes}</span>}
        </Box>
      </Box>

      <Grid
        sx={{ height: "90%", margin: "5px" }}
        wrap="wrap-reverse"
        container
        spacing={1}
      >
        <Grid item xs={9}>
          <Arcmap
            style={{ minHeight: "300px" }}
            center={center}
            voteList={answers}
            zoom={5}
          />
        </Grid>
        <Grid sx={{ minWidth: "150px" }} item xs={3}>
          <List sx={{ width: "100%", bgcolor: "inherit", marginTop: "10%" }}>
            {sortedAnswers.map((answer, index) => {
              return (
                <ListItem
                  key={index}
                  sx={{
                    paddingBlock: 0,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <ListItemText>
                    <Typography variant="h6">{answer.content}</Typography>
                    <Typography variant="body2">
                      <Box
                        component="span"
                        sx={{
                          marginLeft: "auto",
                          marginRight: "1%",
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <i className="fa-solid fa-user"></i>
                        {<span>{answer.vote_count}</span>}
                        {!index && <i className="fa-solid fa-crown"></i>}
                      </Box>
                    </Typography>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(Mainpollcard);
