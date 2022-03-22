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
import { calculteAnswers } from "../../../helpers/pollHelper";

const Mainpollcard = ({ poll }) => {
  const { votes, answers, name, user } = poll;
  const voteList = poll.votes ? poll.votes : [];

  const results = useMemo(() => {
    return calculteAnswers(answers, votes);
  }, [answers, votes]);

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Typography variant="h6" marginLeft="2%">
          {`${name} - hosted by `}
          <Box component="span" sx={{ color: "primary.main" }}>
            {user}
          </Box>
        </Typography>
        <Box component="span" sx={{ marginLeft: "auto", marginRight: "1%" }}>
          {votes.length}
        </Box>
      </Box>

      <Grid sx={{ height: "90%", margin: "5px" }} container spacing={2}>
        <Grid item xs={9}>
          <Arcmap
            style={{ minHeight: "300px" }}
            center={[-118.244, 34.052]}
            voteList={voteList}
            zoom={5}
          />
        </Grid>
        <Grid item xs={3}>
          <List sx={{ width: "100%", bgcolor: "inherit" }}>
            {results.map((result, index) => {
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
                    <Typography variant="body1">{result.name}</Typography>
                    <Typography variant="body2">{result.vote}</Typography>
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

export default Mainpollcard;
