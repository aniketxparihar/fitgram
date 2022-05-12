import axios from "axios";


export const addToBookmark = (postId,authToken) => axios.post(`/api/users/bookmark/${postId}`, {}, {
    headers: {
        authorization:authToken,
    }
});

    
export const removeFromBookmark = (postId, authToken) => axios.post(`/api/users/remove-bookmark/${postId}`, {}, {
    headers: {
        authorization: authToken,
    }
});

export const getBookmarks = (authToken) => axios.get("api/users/bookmark", {
    headers: {
    authorization:authToken,
}})