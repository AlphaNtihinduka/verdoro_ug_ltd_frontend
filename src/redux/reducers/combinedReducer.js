import { combineReducers } from "@reduxjs/toolkit";
import { carReducer } from "./carReducer";
const reducers = combineReducers({
    allcars: carReducer,
})

export default reducers