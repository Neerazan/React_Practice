import { useState } from 'react'
import DisplayPosts from './components/DisplayPosts'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisplayPosts />
    </>
  )
}

export default App
