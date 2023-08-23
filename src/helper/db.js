import { User } from "@/models/user";
import mongoose from "mongoose"

export const connectDb=async ()=>{
    try {
   const {connection}=  await   mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:'eazy_task',
        });

        console.log("DB connect");
        console.log(connection);

     const user=  new User({
        name:"testname",
        email:"test mail",
        password:"testPassword",
        about:"Test"

       })
       await user.save();
       console.log("user is created")
    } catch (error) {
        console.log("DB connection failed");
        console.log(error);
    }
}