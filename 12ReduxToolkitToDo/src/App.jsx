import { useEffect } from "react"

import "./App.css"
import AddTodo from "./components/Todo"
import Todos from "./components/TodoList"
import { useSelector } from "react-redux"

function App() {
    const allTasks = useSelector((state) => state.todos)

    useEffect(() => {
        if (allTasks.length > 0){
            localStorage.setItem("todos", JSON.stringify(allTasks))
        }
    }, [allTasks])

    return (
        <>
            <h1>ReduxToolkit TODO App 🔥❤️‍🔥</h1>
            <AddTodo />
            <Todos />
        </>
    )
}

export default App
