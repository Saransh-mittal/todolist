import React from "react";

const ToDoList = (prop) =>{
    return <li><span className="hover:text-red-600"><i className="fa-solid fa-circle-xmark drop-shadow-md" onClick={()=>{
        prop.onSelect(prop.id);
    }}></i></span> {prop.text}</li>;
};

export default ToDoList;