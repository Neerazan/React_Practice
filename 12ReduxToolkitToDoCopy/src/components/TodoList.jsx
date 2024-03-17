import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    removeTodo,
    todoSelectedToUpdate,
    toggleCompleted,
} from "../app/features/todo/todoSlice"

function TodoList() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    const [toggleEditButton, setToggleEditButton] = useState(false)
    const [onEdit, setOnEdit] = useState({})

    const handleUpdate = (todo) => {
        setOnEdit({})
        dispatch(todoSelectedToUpdate(todo))
        setOnEdit(todo)

        setToggleEditButton(!toggleEditButton)
        // if (todo.id === onEdit.id) {
        // }
    }

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className={`mt-4 flex justify-between px-4 py-2 rounded items-center ${
                            todo.completed ? "bg-zinc-600" : "bg-zinc-800"
                        } `}
                        key={todo.id}
                    >
                        <div
                            className={` cursor-pointer ${
                                todo.completed
                                    ? "line-through text-red-500"
                                    : "text-white"
                            }`}
                            onClick={() => dispatch(toggleCompleted(todo))}
                        >
                            {todo.text}
                        </div>
                        <div>
                            <button
                                className={`rounded text-md me-2 border-0 py-1 focus:outline-none ${
                                    todo.completed
                                        ? "text-gray-50 bg-blue-500 filter grayscale"
                                        : "text-white bg-blue-500  hover:bg-blue-600"
                                } 
                                `}
                                onClick={() => handleUpdate(todo)}
                                disabled={todo.completed ? "disabled" : ""}
                            >
                                {toggleEditButton && onEdit.id === todo.id
                                    ? "Cancel"
                                    : "Edit"}
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
