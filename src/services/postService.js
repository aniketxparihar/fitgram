import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPosts = createAsyncThunk("posts/getallposts", async () => {
    try {
        const res = await axios.get("/api/posts");
        return res.data.posts;
}
    catch (err) {
        console.log(err)
    }
    
}) 

export const getPost = createAsyncThunk("posts/getposts",async (postId) => {
    try {
        const res = await axios.post(`/api/posts/${postId}`)
        console.log(res);
        return res;
    }
    catch (err) {
        console.log(err);
    }
})

export const getAllPostsFromUsername =  async (username)  => {
    try {
        const res = await axios.get(`/api/posts/user/${username}`);
        return res;
    }
    catch (err) {
        console.log(err)
    }

} 

export const addPost =  async (postData, authToken) => {
    try {
        const res = await axios.post("/api/posts", { postData }, {
            headers: {
                authorization: authToken,
            }
        });
        return res;
    }
    catch (err) {
        console.log(err)
    }

}

export const deletePost =  async (postId, authToken) => {
    try {
        const res = await axios.delete(`/api/posts/${postId}`, {
            headers: {
                authorization: authToken,
            }
        });
        return res;
    }
    catch (err) {
        console.log(err)
    }

}



export const editPost = async (postId, postData, authToken) => {
    console.log(postId,postData,authToken)
    try {
        const res = await axios.post(`/api/posts/edit/${postId}`, { postData }, {
            headers: {
                authorization: authToken,
            }
        });
        console.log(res);
        return res;
    }
    catch (err) {
        console.log(err)
    }

}