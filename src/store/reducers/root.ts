import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./features/app";

const rootReducer = combineReducers({
	app: appReducer,
});

export default rootReducer;
