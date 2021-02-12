import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";

const appReducer = combineReducers({
	counter: counterReducer,
});

export default appReducer;
