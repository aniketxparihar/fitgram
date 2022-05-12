import axios from "axios";


export const getAllUsers = () => axios.get("/api/users");

export const getUser = (userId) => axios.get(`/api/users/${userId}`);

export const editUser = (userData, authToken) => axios.post("api/users/edit", {
        user: userData,
    },
    {
    headers: {
        authorization: authToken,
    },
})