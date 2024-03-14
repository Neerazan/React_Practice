import { useSelector, useDispatch } from "react-redux"
import { deleteTodo } from "../features/todoSlice"

const TodoList = () => {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <div className="tasklist">
            <div className="display-tasks">
                <h3>Your tasks:</h3>
                <ul className="tasks">
                    {tasks.map((task) => (
                        <li className="task" key={task.id}>
                            {task.text}
                            <button
                                className=""
                                onClick={() => handleDelete(task.id)}
                            >
                                delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList
