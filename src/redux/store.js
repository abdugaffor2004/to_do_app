import { combineReducers, legacy_createStore } from "redux";
import toDoReducer from "./toDoReducer";

const reducers = combineReducers({
    toDoApp: toDoReducer
})

let store = legacy_createStore(reducers);

window.store = store

export default store