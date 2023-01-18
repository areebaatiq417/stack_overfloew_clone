import { combineReducers } from "redux";
import currentUserReducer from "./currentUser.js";
import authReducer from './auth.js'
import questionsReducer from './questions'
import usersReducer from "./users.js";
export default combineReducers({authReducer,currentUserReducer,questionsReducer,usersReducer})