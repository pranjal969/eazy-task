import { httpAxios } from "@/helper/httpHelper"

export const addUser=async (user)=>{
 const result= await  httpAxios.post("users",user).then((response)=> response.data);

 return result;
}