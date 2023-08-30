import { httpAxios } from "@/helper/httpHelper"

export const addTask=async (task)=>{
 const result= await  httpAxios.post("work",task).then((response)=> response.data);

 return result;
}