import { useState } from "react"
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Tasks } from "./components/Tasks";
import { Summary } from "./components/Summary";
import "./global.css"

interface Task {
  content: string;
  completed: boolean;
  excluded: boolean;
}


export function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <div>
      <Header />
      <Input setTasks={setTasks}/>
      <Summary tasks={tasks}/>
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

