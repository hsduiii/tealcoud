import { combineReducers } from "@reduxjs/toolkit";
import { weatherReducer } from "./weather";

const appReducer = combineReducers({
	weather: weatherReducer,
});

export default appReducer;
