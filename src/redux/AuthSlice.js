import { createSlice } from "@reduxjs/toolkit";
import { loginHandler, signupHandler } from "../services";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("user")),
        authToken: localStorage.getItem("token")
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            state.user = null;
            state.authToken = null;
        }
    }, extraReducers: {
        [loginHandler.fulfilled]: (state, action) => {
            state.user = { username: action.payload.foundUser.username, _id: action.payload.foundUser._id };
            state.authToken = action.payload.encodedToken;
        },
        [signupHandler.fulfilled]: (state, action) => {
            state.user = { username: action.payload.createdUser.username, _id: action.payload.createdUser._id};
            state.authToken = action.payload.encodedToken;
        },
    }
})
export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;