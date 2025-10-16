import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/ProgressTracker";
import { useEffect, useState } from "react";

function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  })
  const addTask = (task) => {
    setTasks([...tasks,task]);
  }
  return (
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly task manager</p>
      <Taskform addTask = {addTask}/>
      <Tasklist />
      <Progresstracker />
      <button>Clear all task</button>
    </div>
  )
}

export default App;