import React from "react";
import PollCreatorContainer from "./PollCreatorContainer";

import { Modal, Paper } from "@mui/material";

export default function PollCreatorModal({ modalOpen, toggleModal }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width:"80%",
    height:"80%",
    bgcolor: "background.paper",
    borderRadius:"10px",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={modalOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper style={style}>
        <PollCreatorContainer {...{ toggleModal }} />
      </Paper>
    </Modal>
  );
}
