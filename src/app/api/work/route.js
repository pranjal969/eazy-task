import { connectDb } from "@/helper/db";
import { Work } from "@/models/work";

import { NextResponse } from "next/server"

connectDb();
//API for getting all works
export const GET =async (request) => {

    let getAllWorks = [];
    try {
        getAllWorks=await Work.find();
    } catch (error) {
        return NextResponse.json({ message: "Error getting works", status: "False" }, { status: 200 });
    }
    return NextResponse.json(getAllWorks);
}


// Api for posting works 
export const POST = async (request) => {
    try {
        // fetch user details from request
        const { title, description, status, author, category,userId } =await request.json();
        //create user object with user model
        const work = new Work({
            title, 
            description, 
            status, 
            author, 
            category,
            userId
        })
        const createdWork = await work.save();
        return NextResponse.json(createdWork, { status: 201, statusText: "createdWork" });
    } catch (error) {
        return NextResponse.json({ message: "Error creating work", status: "False" }, { status: 400 });
    }
}