import { createSlice,useSelector } from "@reduxjs/toolkit";
import { getAllUsers, getUser } from "../services";
import { getOwner } from "../services/userService";

const userSlice = createSlice({
    name: "user",
    initialState: {
        ownerData: {},
        userdata: {},
        userEdited: false,
        allusers: [],
        currentId:""
    },
    reducers: {
        useredited: (state) => {
            state.userEdited = !state.userEdited;
        },
        changecurrentid: (state, action) => {
            state.currentId = action.payload;
        }
    },
    extraReducers: {
        [getAllUsers.fulfilled]: (state, action) => {
            state.allusers = action.payload.data.users;
        },
        [getUser.fulfilled]: (state, action) => {
            state.userdata=action.payload.data.user
        },
        [getOwner.fulfilled]: (state, action) => {
            state.ownerData=action.payload.data.user
        }
    }
})
export const { useredited,changecurrentid} = userSlice.actions;
export default userSlice.reducer;