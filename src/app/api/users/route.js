import { connectDb } from "@/helper/db";
import { sendStatusCode } from "next/dist/server/api-utils";
import { NextResponse } from "next/server"


connectDb();
export const GET=(request)=> {

    const arr = [{
        name: "Pranjal",
        age: "24"
    },
    {
        name: "Amit",
        age: "24"
    },
    {
        name: "Ravi",
        age: "24"
    }
        , {
        name: "Sachin",
        age: "24"
    }]

    return NextResponse.json(arr);
}

export const POST=(request)=>{

    console.log(request.body);
    console.log(request.method);
    console.log(request.headers);
    return NextResponse.json({message:"Ok Posted"});
}