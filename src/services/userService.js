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