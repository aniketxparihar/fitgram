import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk("posts/getcomments", async (postId) => {
    try { 
        const res = await axios.get(`/api/comments/${postId}`);
        return res.data.comments;
    }
    catch (err) {
        console.log(err);
    }
})

export const addComment = async (postId, authToken, commentData) => {
    try {
        const res = await axios.post(`/api/comments/add/${postId}`, { commentData }, {
            headers: {
                authorization: authToken,
            }
        });
        return res;
    }
    catch (err) {
        console.log(err);
    }
}


export const editComment = async (postId, commentId, authToken, commentData) =>{
    try { 
    const res =await axios.post(`/api/comments/edit/${postId}/${commentId}`, { commentData }, {
        headers: {
            authorization: authToken,
        }
    });
        return res;
    }
    catch (err) {
    console.log(err);
    }
}


export const deleteComment =  async (postId, commentId, authToken) => {
    try {
        const res = await axios.post(`/api/comments/delete/${postId}/${commentId}`,{commentData:{}}, {
            headers: {
                authorization: authToken,
            }
        });
        return res.data.comments;

    } catch (err) { console.log(err) }
}
     
export const upvoteComment = async (postId, commentId, authToken) => {
    try {
        const res = await axios.post(`/api/comments/upvote/${postId}/${commentId}`, {
            headers: {
                authorization: authToken,
            }
        });
        return res;
    } catch (err) {
        console.log(err);
    }
}


export const downvoteComment = async (postId, commentId, authToken) => {
    try { 
        const res = await axios.post(`/api/comments/downvote/${postId}/${commentId}`, {
            headers: {
                authorization: authToken,
            }
        });
        return res;
    }
    catch (err) {console.log(err) } }