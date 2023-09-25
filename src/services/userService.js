import { httpAxios } from "@/helper/httpHelper"

export const addUser = async (user) => {
    const result = await httpAxios.post("users", user).then((response) => response.data);

    return result;
}

//Login Api "login" is the endpoint
export const loginApi = async (loginData) => {
    const result = await httpAxios.post("login", loginData).then((response) => response.data);
    return result;
}

//get current user
export const getCurrentUser = async () => {
    const result = await httpAxios.get("current").then((response) => response.data);
    return result;
}

//Logout Api "logout" is the endpoint
export const logoutApi = async () => {
    const result = await httpAxios.post("logout").then((response) => response.data);
    return result;
}

//Update user api
export const updateUser = async (userData,userId) => {
    const result = await httpAxios.put(`users/${userId}`,userData).then((response) => response.data);
    return result;
}