
// Functional components
import React from 'react';
import {TodoList} from "./Components/TodoList";
import { TodoItem } from './Components/TodoItem';
import './App.css';
import { AddTodo } from './Components/AddTodo';
import {Header} from './Components/Header';
const todos=[
  {
    description:" Get out of bed",
    dueDate: "Wed Sep 13 2017"
  }, 
  {
description:" Brush teeth",
dueDate:" Thu Sep 14 2017"
 
},
{
description:"Eat breakfast", 
dueDate:" Fri Sep 15 2017"}
  
]
 const App=()=>{
  return(
  <div className="App">
  
  <Header text='Todo list' />
  <AddTodo />
  <TodoList todos={todos}/>
  <TodoItem description="Watch football" dueDate="Sun Sep 1 2017"/>
  
  </div>
    )
};
export default App;

// class components
