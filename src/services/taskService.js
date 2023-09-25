import { httpAxios } from "@/helper/httpHelper"

export const addTask = async (task) => {
    const result = await httpAxios.post("work", task).then((response) => response.data);

    return result;
}

export const viewTaskByUserId = async (userId) => {
    const result = await httpAxios.get(`users/${userId}/work`).then((response) => response.data);
    return result;
}