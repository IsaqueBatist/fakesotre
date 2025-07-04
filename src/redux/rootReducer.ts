import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './user/slice'
import cartReducer from './cart/slice'

const rootReducer = combineReducers({userReducer, cartReducer})

export default rootReducer;