import { connectDb } from "@/helper/db";
import { Work } from "@/models/work";
import { NextResponse } from "next/server";
connectDb();

//Api for get work by id

export const GET = async (request, { params }) => {

    const { workId } = await params;

    try {
        const work = await Work.findById(workId);
        return NextResponse.json(work || { message: "Work not found", status: "False" });
    } catch (error) {
        return NextResponse.json({ message: "Error getting work", status: "False" }, { status: 200 });
    }

}

// Update work by id
export const PUT = async (request, { params }) => {

    const { workId } = await params;

    try {
        //Get the work details from db
        const work = await Work.findById(workId);
        if (work) {
            // fetch work details from request
            const { title, description, status, author, category } = await request.json();
            //create work object with user model

            work.title = title;
            work.description = description;
            work.status = status;
            work.author = author;
            work.category = category;

            const savedWork = work.save();
            return NextResponse.json({ message: "Work details updated successfully", status: "True" }, { status: 200 });
        }
        else {
            return NextResponse.json({ message: "Work not found", status: "True" }, { status: 200 });
        }

    } catch (error) {
        return NextResponse.json({ message: "Error updating work ", status: "False" }, { status: 200 });
    }

}

// delete work by id
export const DELETE = async (request, { params }) => {

    const { workId } = await params;

    try {
        const work = await Work.deleteOne({ _id: workId });
        return NextResponse.json({ message: "Work Deleted successfully", status: "True" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error deleting work", status: "False" }, { status: 200 });
    }

}