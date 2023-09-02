import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server"

connectDb();
//API for getting all users
export const GET =async (request) => {

    let getAllUsers = [];
    try {
     getAllUsers=await User.find().select("-password");
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error getting user", status: "False" }, { status: 200 });
    }
    return NextResponse.json(getAllUsers);
}


// Api for posting user 
export const POST = async (request) => {
    try {
        // fetch user details from request
        const { name, email, password, about, profileUrl, address } =await request.json();
        //create user object with user model
        const user = new User({
            name,
            email,
            password,
            about,
            profileUrl,
            address: {
                street: address.street || "",
                city: address.city || "",
                pincode: address.pincode || 0
            }
        })
        const createdUser = await user.save();
        console.log("User is created")
        return NextResponse.json(createdUser, { status: 201, statusText: "createdUser" });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error creating user", status: "False" }, { status: 400 });
    }
}