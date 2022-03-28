import React from "react";
import PollCreatorContainer from "./PollCreatorContainer";

import { Modal, Paper } from "@mui/material";

export default function PollCreatorModal({ modalOpen, toggleModal }) {
  const style = {
    position: "absolute",
    top: "10%",
    left: "50%",
    padding:"10px",
    transform: "translate(-50%, 0%)",
    width: "80%",
    height:"80%",
    minHeight: "600px",
    bgcolor: "background.paper",
    borderRadius: "10px",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "auto"  
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
