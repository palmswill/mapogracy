import React, { useMemo } from "react";
import {
  Grid,
  Typography,
  List,
  Box,
  ListItemText,
  ListItem,
  Avatar,
} from "@mui/material";
import Arcmap from "../../map/Arcmap";
import { dotColor } from "../../../helpers/mapHelpers";

const Mainpollcard = ({ poll }) => {
  // const { name, longitude, latitude } = poll[0];
  // const {user_id}=poll[1];
  // const { answers } = poll[2];

  const { name, longitude, latitude, user_id, answers, first_name, last_name } =
    poll;

  let totalVotes = useMemo(() => {
    let count = 0;
    answers.forEach((answer) => (count += answer.vote_count));
    return count;
  }, [answers]);

  const sortedAnswers = answers
    .slice()
    .sort((a, b) => b.vote_count - a.vote_count);

  const color = dotColor; /// imported color list from map helper

  const center = [longitude, latitude];

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Typography variant="h4" marginLeft="2%">
          {`${name}`}
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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "end",
          gap: "1ch",
          marginLeft: "2%",
        }}
      >
        <Typography variant="h6">{`hosted by`}</Typography>
        <Typography variant="h6" color="primary.main">
          {!first_name && !last_name && ` ${user_id}`}
          {(first_name || last_name) && `${first_name}  ${last_name}`}
        </Typography>
      </Box>

      <Grid
        sx={{ width:"100%", height: "90%" }}
        wrap="wrap-reverse"
        container
        spacing={1}
      >
        <Grid item sx={{minWidth:"66%",flex:1}}>
          <Arcmap
            style={{ minHeight: "300px" }}
            center={center}
            voteList={sortedAnswers}
            zoom={10}
          />
        </Grid>
        <Grid sx={{ minWidth: "300px", position: "relative" }} item>
          <List sx={{ width: "100%", bgcolor: "inherit", marginTop: "10%" }}>
            {sortedAnswers.map((answer, index) => {
              return (
                <ListItem
                  key={index}
                  sx={{
                    paddingBlock: 0,
                    display: "flex",
                  }}
                >
                  <ListItemText>
                    <Typography sx={{ flexGrow: 1 }} variant="h6">
                      {answer.content}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Avatar
                        sx={{
                          width: "25px",
                          height: "25px",
                          bgcolor: color[index],
                        }}
                      >
                        {" "}
                      </Avatar>
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
                    </Box>
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
