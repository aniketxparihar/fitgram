import { createSlice} from "@reduxjs/toolkit";
import { getAllPosts, getBookmarks } from "../services";

const postSlice = createSlice({
    name: "user",
    initialState: {
        homefeed: [],
        explorefeed: [],
        bookmarked:[]
    },
    reducers: {
    
    },
    extraReducers: {
        [getAllPosts.fulfilled]: (state, action) => {
            state.homefeed = JSON.parse(JSON.stringify(action.payload));
            state.explorefeed = action.payload;
        },
        [getBookmarks.fulfilled]: (state, action) => {
            state.bookmarked = action.payload;
        }
    }
})
export const {  } = postSlice.actions;
export default postSlice.reducer;