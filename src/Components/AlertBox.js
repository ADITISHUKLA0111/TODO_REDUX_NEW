import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React from "react";
import AlertTitle from "@mui/material/AlertTitle";

function AlertBox({ setOpen, open }) {
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={2000}>
      <Alert variant="filled" severity="secondary">
        <AlertTitle>Note can not be empty</AlertTitle>
      </Alert>
    </Snackbar>
  );
}

export default AlertBox;
