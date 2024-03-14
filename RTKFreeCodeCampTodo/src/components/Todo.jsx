import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todoSlice"

const Todo = () => {
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    function addNewTask(e) {
        e.preventDefault()
        const task = inputRef.current.value.trim()
        if (task !== "") {
            dispatch(addTodo(task))
            inputRef.current.value = ""
        }
    }

    return (
        <div className="task-component">
            <div className="add-task">
                <form action="" onSubmit={addNewTask}>
                    <input
                        type="text"
                        placeholder="Add task here..."
                        ref={inputRef}
                        className="taskInput"
                    />
                    <button type="submit">Add task</button>
                </form>
            </div>
        </div>
    )
}

export default Todo
