import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server"


connectDb();
export const GET = (request) => {

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
                pincode: address.pincode || ""
            }
        })
        const createdUser = await user.save();
        console.log("User is created")
        return NextResponse.json(user, { status: 201, statusText: "createdUser" });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error creating user", status: "False" }, { status: 200 });
    }
}