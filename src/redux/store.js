import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userReducer from "./userSlice";
const store = configureStore({
    reducer:{
       user: userReducer
    }
})
export default store