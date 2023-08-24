import { connectDb } from "@/helper/db";
import { Work } from "@/models/work";
import { NextResponse } from "next/server";
connectDb();//Api for get work by id

export const GET = async (request, { params }) => {

    const { workId } = await params;

    try {
        const work = await Work.findById(workId);
        return NextResponse.json(work || { message: "Work not found", status: "False" });
    } catch (error) {
        return NextResponse.json({ message: "Error getting work", status: "False" }, { status: 200 });
    }

}