import React, { useState } from "react";
import Task from "./Task";


function TaskList({tasks}) {
  const [list,setList]=useState(tasks)

  function handleDelete(taskText) {
    const updatedList = tasks.filter((task) => task.text !== taskText);
    setList(updatedList);
  }
  

  
  
  return (
    <div className="tasks">
     {list.map(((task,index)=><Task key={index} text={task.text} category={task.category} onDelete={()=>handleDelete(task.text)}/>))}
    </div>
  );
}

export default TaskList;
