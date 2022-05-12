import axios from "axios";


export const getComments = (postId) => axios.get(`/api/comments/${postId}`);

export const addComment = (postId, authToken, commentData) => axios.post(`/api/comments/add/${postId}`, { commentData }, {
    headers: {
        authorization: authToken,
    }
});
export const editComment = (postId, commentId, authToken, commentData) => axios.post(`/api/comments/edit/${postId}/${commentId}`, { commentData }, {
    headers: {
        authorization: authToken,
    }
});
export const deleteComment = (postId, commentId, authToken) => axios.post(`/api/comments/delete/${postId}/${commentId}`, {
    headers: {
        authorization: authToken,
    }
});
export const upvoteComment = (postId, commentId, authToken) => axios.post(`/api/comments/upvote/${postId}/${commentId}`, {
    headers: {
        authorization: authToken,
    }
});
export const downvoteComment = (postId, commentId, authToken) => axios.post(`/api/comments/downvote/${postId}/${commentId}`, {
    headers: {
        authorization: authToken,
    }
});