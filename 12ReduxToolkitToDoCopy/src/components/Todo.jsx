import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    addTodo,
    updateTodo,
    clearTodoSelectedToUpdate,
} from "../app/features/todo/todoSlice"

function AddTodo() {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    const valueToUpdate = useSelector((state) => state.editValue)
    const [button, setButton] = useState("Add")

    useEffect(() => {
        if (valueToUpdate) {
            setInput(valueToUpdate.text)
            setButton("Update")
        } else{
            setInput("")
            setButton("Add")
        }
    }, [valueToUpdate])

    const addUpdateTodoHandler = (event) => {
        event.preventDefault()
        const value = input

        if (value !== "") {
            if (button === "Update") {
                dispatch(
                    updateTodo({
                        id: valueToUpdate.id,
                        text: input,
                        completed: valueToUpdate.completed,
                    })
                )
                setButton("Add")
                setInput("")
                dispatch(clearTodoSelectedToUpdate())
            } else {
                dispatch(addTodo(value))
                setInput("")
            }
        }
    }

    return (
        <form onSubmit={addUpdateTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />

            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                {button}
            </button>
        </form>
    )
}

export default AddTodo
