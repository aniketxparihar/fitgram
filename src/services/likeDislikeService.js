import axios from "axios";


export const likePost = (postId, authToken) => axios.post(`/api/posts/like/${postId}`, {}, {
    headers: {
        authorization: authToken,
    }
});


export const dislikePost = (postId, authToken) => axios.post(`/api/posts/dislike/${postId}`, {}, {
    headers: {
        authorization: authToken,
    }
});

