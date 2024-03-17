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
                completed: false,
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

        todoSelectedToUpdate: (state, action) => {
            state.editValue = action.payload
        },

        clearTodoSelectedToUpdate: (state) => {
            state.editValue = undefined
        },

        toggleCompleted: (state, action) => {
            state.todos.map((todo) =>
                action.payload.id === todo.id
                    ? (todo.completed = !action.payload.completed)
                    : todo
            )
        },
    },
})

export const {
    addTodo,
    updateTodo,
    removeTodo,
    todoSelectedToUpdate,
    clearTodoSelectedToUpdate,
    toggleCompleted,
} = todoSlice.actions

export default todoSlice.reducer
