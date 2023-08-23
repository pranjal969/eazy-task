import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
connectDb
//Api for get user by id
export const GET = async (request, { params }) => {

    const { userId } = await params;

    try {
        const user = await User.findById(userId);
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ message: "Error getting user", status: "False" }, { status: 200 });
    }

}
// delete user by id
export const DELETE = async (request, { params }) => {

    const { userId } = await params;

    try {
        const user = await User.deleteOne({_id:userId});
        return NextResponse.json({ message: "User Deleted successfully", status: "True" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error deleting user", status: "False" }, { status: 200 });
    }

}

