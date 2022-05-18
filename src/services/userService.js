import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk("users/allusers", async () => {
    try {
        const res = await axios.get("/api/users");
        return res;
    }
    catch (err) {
        console.log(err);
    }
}
) 

export const getOwner = createAsyncThunk("users/ownerdata", async (ownerId) => {
    try {
        const res= await axios.get(`/api/users/${ownerId}`);
        return res;
    }
    catch (err) {
        console.log(err);
    }
})

export const getUser = createAsyncThunk("users/userdata", async (userId) => {
    try {
        const res = await axios.get(`/api/users/${userId}`);
        return res;
    }
    catch (err) {
        console.log(err);
    }
} )

export const editUser = async (userData, authToken) => {
    try {
        const res =await axios.post("/api/users/edit", {
            userData,
        },
            {
                headers: {
                    authorization: authToken,
                },
            })
        return res;
    }
    catch (err) {
        console.log(err);
    }
    }