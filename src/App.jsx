import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/ProgressTracker";
import FilterBar from "./Components/FilterBar";
import { useEffect, useState } from "react";
import "./Style.css";


export default function App() {
  const[tasks, setTasks] = useState([]);
  
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  })

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);

  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  const clearTasks = () => {
    setTasks([]);
  }

  console.log("Current filter:", filter);
   // Apply filter logic
   const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true; // "all"
  });

  return (
    <div className="App">
      <header>
        <h1 className="title">Task Focus</h1>
        <p className="tagline">Our friendly task manager</p>
      </header>
      <FilterBar filter={filter} setFilter={setFilter} />
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {filteredTasks} 
      updateTask = {updateTask} 
      deleteTask = {deleteTask}/>
      <Progresstracker tasks={tasks}/>
      <button onClick={clearTasks} className="clear-btn">Clear all task</button>
    </div>
  )
}

