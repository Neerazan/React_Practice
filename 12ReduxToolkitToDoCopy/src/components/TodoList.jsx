import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeTodo, updateTodo } from "../app/features/todo/todoSlice"
import { compose } from "@reduxjs/toolkit"

function TodoList({ setEditValue }) {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    const [completed, setCompleted] = useState(false)

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div
                            key={todo.id}
                            className={`text-white cursor-pointer`}
                        >
                            {todo.text}
                        </div>
                        <div>
                            <button
                                className="text-white bg-blue-500 border-0 py-1 focus:outline-none hover:bg-blue-600 rounded text-md me-2"
                                onClick={() => setEditValue(todo)}
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList
