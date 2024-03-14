export const addTodo = (text) => {
    return{
        type: "ADD_TASK",
        payload: {
            id: Date.now(),
            text: text,
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TASK",
        payload: id
    }
}