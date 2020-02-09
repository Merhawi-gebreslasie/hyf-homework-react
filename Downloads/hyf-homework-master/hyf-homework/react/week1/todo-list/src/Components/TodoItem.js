import React from "react";

export const TodoItem=(props)=>{
    
    return(
        <div className="items">
        <h6>{props.description}:{props.dueDate} </h6>
        </div>
    )
}