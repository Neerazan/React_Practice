import { useState } from "react"
import "./App.css"

import Todo from "./components/Todo"
import TodoList from "./components/TodoList"

function App() {
    return (
        <>
            <h1>RTK TODO FreeCodeCamp(🔥)</h1>
            <Todo />
            <TodoList />
        </>
    )
}

export default App
