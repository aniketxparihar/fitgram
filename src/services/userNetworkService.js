import axios from "axios";

export const followUser = (followUserId, authToken) => {
    try {
        axios.post(`/api/users/follow/${followUserId}`,
            {}, {
            headers: {
                authorization: authToken
            }
        })
    }
    catch (err) {
        console.log(err);
} ;
}
export const unfollowUser = (followUserId, authToken) => {
    try {
        axios.post(`/api/users/unfollow/${followUserId}`,
            {}, {
            headers: {
                authorization: authToken
            }
        });
    }
    catch (err) {
        console.log(err);
    };
} 
