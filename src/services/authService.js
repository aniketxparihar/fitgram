import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginHandler = createAsyncThunk("auth/login", async ({ username, password, rememberme }) => {
    try {
        const res = await axios.post("/api/auth/login", { username, password });
        if (rememberme)
        {
            localStorage.setItem("user", JSON.stringify({ username: res.data.foundUser.username, _id: res.data.foundUser._id }));
            localStorage.setItem("token",res.data.encodedToken);
        }
        return res.data;
    }
    catch (err) {
        console.log(err)
    }
}) 


export const signupHandler = createAsyncThunk("auth/signup", async (firstName, lastName, username, password) => {
    try {
        const res = await axios.post("/api/auth/signup", {
            firstName,
            lastName,
            username,
            password
        });
        return res;
    }
    catch (err) {
        console.log(err);
    }

}) 