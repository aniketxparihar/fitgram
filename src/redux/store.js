import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice"
import userSlice from "./UserSlice";

export default configureStore({
    reducer: {
        auth: authSlice, 
        user: userSlice
    }
})