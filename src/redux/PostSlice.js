import { createSlice} from "@reduxjs/toolkit";
import { deleteComment, getAllPosts, getBookmarks, getComments } from "../services";

const postSlice = createSlice({
    name: "user",
    initialState: {
        homefeed: [],
        explorefeed: [],
        bookmarked: [],
        comments:[]
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
        },
        [getComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
        }
       
    }
})
export const {  } = postSlice.actions;
export default postSlice.reducer;