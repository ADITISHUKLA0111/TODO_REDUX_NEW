import { createSlice } from "@reduxjs/toolkit";


const todoSlice=createSlice({
    name:"newTodo",
    initialState:[],
    reducers:{
        addTodo(state,action)
        {
            let text=action.payload;
            const newTask={
                id:Math.random()*1000,
                note:text,
                completed:false,
            };
            state.push(newTask);
        },
        toggleComplete(state,action)
        {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed;
            }
        },
        deleteTodo(state,action){
            const index=state.findIndex((element)=>element.id===action.payload);
            if(index !== -1)
            {
                state.splice(index,1);
            }
        }
    }
})

export const {addTodo,toggleComplete,deleteTodo}=todoSlice.actions;
export default todoSlice.reducer;