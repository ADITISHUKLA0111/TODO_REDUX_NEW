import Navbar from "../src/Components/Navbar"
import './App.css';
import Todo from "./Components/Todo";
import ShowTodo from "./Components/ShowTodo";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
   <Navbar />
   <Routes>
    <Route path="/" element={<Todo />} />
    <Route path="/showTodo" element={<ShowTodo/>}/>
   </Routes>
   </>
  );
}

export default App;
