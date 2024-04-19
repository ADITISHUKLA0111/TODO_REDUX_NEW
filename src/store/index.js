import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo-slice";
 const store=configureStore({
reducer:{
    todokey:todoReducer,
}
})

export default store;
