import { useEffect, useState } from "react"

import "./App.css"
import AddTodo from "./components/Todo"
import TodoList from "./components/TodoList"
import { useSelector } from "react-redux"

function App() {
    const allTasks = useSelector((state) => state.todos)
    let userVisited = localStorage.getItem("todos")

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(allTasks))
    }, [allTasks])

    const handleUserVisited = (target) => {
        let parent = target.closest('#userGuide')
        if(parent){
            parent.remove()
        }
    }

    return (
        <>
            {userVisited == null ? (
                <div className="mb-3 animate-bounce" id="userGuide">
                    <span className="bg-blue-600 ps-2 py-2 rounded-md hover:ring-2">
                        Click todo to mark as completed
                        <span 
                            className="ms-1 p-2 cursor-pointer bg-blue-700 rounded-e-md hover:bg-blue-800"
                            onClick={(e) => handleUserVisited(e.target)}
                        >
                            ok
                        </span>
                    </span>
                </div>
            ) : null}


            <h1>ReduxToolkit TODO App (🔥)</h1>
            <AddTodo />
            <TodoList />
        </>
    )
}

export default App
