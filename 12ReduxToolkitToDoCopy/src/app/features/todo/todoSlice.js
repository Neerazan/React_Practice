import { createSlice, nanoid } from "@reduxjs/toolkit"

const storageValues = JSON.parse(localStorage.getItem("todos"))

const initialState = {
    todos: storageValues ? storageValues : [],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },

        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const todoToUpdate = state.todos.find((todo) => todo.id === id)

            if (todoToUpdate) {
                todoToUpdate.text = text
            }
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id != action.payload
            )
        },

        selectedToUpdate: (state, action) => {
            console.log("Inside SelecteToUpdate function");
            state.editValue = action.payload
            console.log(`EditValue: ${state.editValue}`)
        },
    },
})

export const { addTodo, updateTodo, removeTodo, selectedToUpdate } = todoSlice.actions

export default todoSlice.reducer
