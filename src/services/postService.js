import axios from "axios";


export const getAllPosts = (postId) => axios.get("/api/posts");

export const getPost = (postId) => axios.post(`/api/posts/${postId}`);

export const getAllPostsFromUsername = (username) => axios.post(`/api/posts/user/${username}`);

export const addPost = (post, authToken) => axios.post("/api/posts", {post}, {
    headers: {
        authorization: authToken,
    }
});
export const deletePost = (postId, authToken) => axios.delete(`/api/posts/${postId}`, {
    headers: {
        authorization: authToken,
    }
});
export const editPost = (postId,postData, authToken) => axios.post(`/api/posts/${postId}`, {postData}, {
    headers: {
        authorization: authToken,
    }
});