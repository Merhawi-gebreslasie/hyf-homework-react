import React from "react";

import {TodoItem} from "./TodoItem";

 export const TodoList=({todos})=>{
    
    return(

        
        <div className ='lists'>
{todos.map((todos,index)=>(
    <TodoItem key={index} description={todos.description} dueDate={todos.dueDate} />
))}
        </div>
    
        
    )
};
