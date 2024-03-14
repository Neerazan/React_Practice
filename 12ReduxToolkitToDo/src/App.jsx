import { useState } from "react"
import "./App.css"
import AddTodo from "./components/Todo"
import Todos from "./components/TodoList"

function App() {
    return (
        <>
            <h1>ReduxToolkit TODO App 🔥❤️‍🔥</h1>
            <AddTodo />
            <Todos />
        </>
    )
}

export default App
