import { connectDb } from "@/helper/db";
import { Work } from "@/models/work";
import { NextResponse } from "next/server";


//api/users/userId/work
export const GET = async (request, { params }) => {

    const { userId } = await params;

    try {
        await connectDb();
        const work = await  Work.find({
            userId:userId
        });
       
        return NextResponse.json(work || { message: "work not found", status: "False" });
    } catch (error) {
        return NextResponse.json({ message: "Error getting work", status: "False" }, { status: 200 });
    }

}