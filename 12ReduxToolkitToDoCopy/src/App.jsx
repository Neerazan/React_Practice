import { useEffect, useState } from "react"

import "./App.css"
import AddTodo from "./components/Todo"
import TodoList from "./components/TodoList"
import { useSelector } from "react-redux"

function App() {
    const allTasks = useSelector((state) => state.todos)
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(allTasks))
    }, [allTasks])

    return (
        <>
            <h1>ReduxToolkit TODO App (🔥)</h1>
            <AddTodo />
            <TodoList />
        </>
    )
}

export default App
