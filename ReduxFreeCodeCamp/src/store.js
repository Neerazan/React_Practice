import { createStore } from "redux";
// import thunk from "redux-thunk";


import taskReducer from "./reducers/taskReducer";
import rootReducer from "./reducers";

const store = createStore(
    taskReducer
)

export default store;