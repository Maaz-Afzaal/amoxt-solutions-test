import { combineReducers } from "redux";
import apiReducer from "./apiReducer";

const allReducer=combineReducers({
    apiReducer,
})

export default allReducer