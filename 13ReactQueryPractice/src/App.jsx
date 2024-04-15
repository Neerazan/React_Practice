import { useState } from 'react'
import DisplayPosts from './components/DisplayPosts'
import CreatePost from './components/CreatePost'
import UpdatePost from './components/UpdatePost'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <DisplayPosts /> */}
      {/* <CreatePost /> */}
      <UpdatePost />
    </>
  )
}

export default App
