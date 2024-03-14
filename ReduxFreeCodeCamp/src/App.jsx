import { useState } from 'react'
import './App.css'
import Task from './components/Task'
import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Task />
      <TaskList />
    </div>
)
}

export default App
