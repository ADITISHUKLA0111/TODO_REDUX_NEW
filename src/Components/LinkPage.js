import React from 'react'

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { createTheme,ThemeProvider} from "@mui/material";


//for practice
const myTheme=createTheme({
    components:{
        MuiButton:{
            variants:[
                {
                    props:{
                        variant:"text"
                    },
                    style:{
                        color:"white",
                        my:2
                    }
                }
            ]
        }
    }

})

function LinkPage() {
  return (
    <>
 <ThemeProvider theme={myTheme}>
<Link to="/showTodo"><Button >Home</Button></Link>
<Link to="/"><Button >Add todo</Button></Link>
</ThemeProvider>
    </>
  )
}

export default LinkPage