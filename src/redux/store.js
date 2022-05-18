import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice"
import postSlice from "./PostSlice";
import userSlice from "./UserSlice";

export default configureStore({
    reducer: {
        auth: authSlice, 
        user: userSlice,
        post:postSlice
    }
})