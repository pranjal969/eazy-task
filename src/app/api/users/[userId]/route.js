import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
connectDb
//Api for get user by id
export const GET = async (request, { params }) => {

    const { userId } = await params;

    try {
        const user = await User.findById(userId).select("-password");
        return NextResponse.json(user || { message: "User not found", status: "False" });
    } catch (error) {
        return NextResponse.json({ message: "Error getting user", status: "False" }, { status: 200 });
    }

}
// delete user by id
export const DELETE = async (request, { params }) => {

    const { userId } = await params;

    try {
        const user = await User.deleteOne({ _id: userId });
        return NextResponse.json({ message: "User Deleted successfully", status: "True" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error deleting user", status: "False" }, { status: 200 });
    }

}

// Update user by id
export const PUT = async (request, { params }) => {

    const { userId } = await params;

    try {
        //Get the user details from db
        const user = await User.findById(userId);
        if (user) {
            // fetch user details from request
            const { name, password, about, profileUrl, address } = await request.json();
            //create user object with user model

            user.name = name;
            user.password = password;
            user.about = about;
            user.profileUrl = profileUrl;
            user.address.street = address.street || "";
            user.address.street = address.city || "";
            user.address.street = address.pincode || "";

            const savedUser = user.save();
            return NextResponse.json({ message: "User details updated successfully", status: "True" }, { status: 200 });
        }
        else {
            return NextResponse.json({ message: "User not found", status: "True" }, { status: 200 });
        }

    } catch (error) {
        return NextResponse.json({ message: "Error updating user ", status: "False" }, { status: 200 });
    }

}

