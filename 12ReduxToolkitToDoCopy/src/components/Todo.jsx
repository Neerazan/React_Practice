import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, updateTodo } from "../app/features/todo/todoSlice"

function AddTodo() {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    const valueTOUpdate = useSelector((state) => state.editValue)
    console.log(`This is Value to Update inside Todo Component: ${valueTOUpdate}`)

    useEffect(() => {
        
    }, [valueTOUpdate])

    const addUpdateTodoHandler = (event) => {
        event.preventDefault()
        const value = input

        if (value !== "") {
            dispatch(addTodo(value))
            setInput("")
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
                Add
            </button>
        </form>
    )
}

export default AddTodo
