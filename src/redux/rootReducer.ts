import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './user/slice'

const rootReducer = combineReducers({userReducer})

export default rootReducer;