import React  from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]); 
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const visibleTasks = tasks.filter((task) =>
    selectedCategory === "All" ? true : task.category === selectedCategory
  );
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES}  onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={visibleTasks} categories={CATEGORIES} />
    </div>
  );
}

export default App;
