import React, { useState } from "react";

import { addTodo } from "../store/todo-slice";
import { useDispatch } from "react-redux";
// import React from "react";
// import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
// import FilledInput from "@mui/material/FilledInput";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";

// import FormControl from "@mui/material/FormControl";
// import AlertBox from "./AlertBox";
// import { purple } from '@mui/material/colors';
import AlertBox from "./AlertBox";
function Todo() {
const [text,setText]=useState("");
const navigate = useNavigate();
const dispatch=useDispatch();
const [open, setOpen] = useState(false);
const handleSubmit=()=>{
if(text.length===0)
{
setOpen(true);
}else{
dispatch(addTodo(text))
setText("");
navigate("/showTodo");
}
}
  return (
    <>
       
        <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
      <Box
        component="form"
        // maxWidth="sm"
        sx={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          gap: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
         <Typography
          variant="body1"
          component="h6"
          sx={{ alignSelf: "flex-start" }}
        >
          Todo Form
        </Typography>

        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          placeholder="Note"
          variant="filled"
          size="small"
          fullWidth
          color="secondary"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
         <Button
          variant="outlined"
          color="secondary"
          sx={{ alignSelf: "flex-start"}}
          onClick={handleSubmit}
        >
          Add Task
        </Button>
      </Box>
      <AlertBox setOpen={setOpen} open={open}/>
      </Container>
    </>
  )
}

export default Todo