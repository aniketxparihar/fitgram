import { createSlice} from "@reduxjs/toolkit";
import { getAllPosts } from "../services";

const postSlice = createSlice({
    name: "user",
    initialState: {
        homefeed: [],
    },
    reducers: {
    
    },
    extraReducers: {
        [getAllPosts.fulfilled]: (state, action) => {
            state.homefeed = action.payload;
      }
    }
})
export const {  } = postSlice.actions;
export default postSlice.reducer;