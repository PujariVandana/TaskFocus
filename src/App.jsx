import Taskform from "./Compenets/Taskform";
import Tasklist from "./Compenets/Tasklist";
import Progresstracker from "./Compenets/ProgressTracker";

function App() {
  return (
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly task manager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear all task</button>
    </div>
  )
}

export default App;