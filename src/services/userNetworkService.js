import axios from "axios";

export const followUser = (followUserId, authToken) => axios.post(`api/users/follow/${followUserId}`,
    {}, {
    headers: {
        authorization: authToken
    }
});
export const unfollowUser = (followUserId, authToken) => axios.post(`api/users/unfollow/${followUserId}`,
    {}, {
    headers: {
        authorization: authToken
    }
});
