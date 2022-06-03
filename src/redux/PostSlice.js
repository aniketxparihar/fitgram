import { createSlice} from "@reduxjs/toolkit";
import { deleteComment, getAllPosts, getBookmarks, getComments } from "../services";
import { getPagedPosts } from "../services/postService";

const postSlice = createSlice({
    name: "user",
    initialState: {
        homefeed: [],
        explorefeed: [],
        bookmarked: [],
        comments: [],
        pageNum: 0,
        pagedPosts: [],
        totalPages: 0,
        postStatus: "idle",
        pagedPostStatus: "idle",
    },
    reducers: {
        setPageNum: (state) => {
            state.pageNum =
                state.pageNum + 1 > state.totalPages
                    ? state.totalPages
                    : state.pageNum + 1;
        },
    },
    extraReducers: {
        [getAllPosts.fulfilled]: (state, action) => {
            state.homefeed = JSON.parse(JSON.stringify(action.payload));
            state.explorefeed = action.payload;
            state.totalPages = Math.ceil(action.payload.length / 4);
        },
        [getBookmarks.fulfilled]: (state, action) => {
            state.bookmarked = action.payload;
        },
        [getComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
        },
        [getPagedPosts.fulfilled]: (state, action) => {
            state.pagedPosts = action.payload;
            state.pagedPostStatus = "fulfilled";
        },
        [getPagedPosts.pending]: (state) => {
            state.pagedPostStatus = "pending";
        },
        [getPagedPosts.rejected]: (state) => {
            state.pagedPostStatus = "idle";
        },
       
    }
})
export const { setPageNum  } = postSlice.actions;
export default postSlice.reducer;