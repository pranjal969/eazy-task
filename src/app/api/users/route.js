import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

//API for getting all users
export const GET = async (request) => {

    let getAllUsers = [];
    try {
        await connectDb();
        getAllUsers = await User.find().select("-password");
    } catch (error) {
        return NextResponse.json({ message: "Error getting user", status: "False" }, { status: 200 });
    }
    return NextResponse.json(getAllUsers);
}


// Api for posting user 
export const POST = async (request) => {
    const saltRounds = parseInt(process.env.SALT_ROUNDS);
    const salt = process.env.PASSWORD_SALT; 
    try {
        await connectDb();
        // fetch user details from request
        const { name, email, password, about, profileUrl, address } = await request.json();

        // Combine the custom salt with the password
        const saltedPassword = `${salt}${password}`;

        // Hash the salted password using bcrypt
        const hashedPassword = await bcrypt.hash(saltedPassword, saltRounds);

        // Create user object with hashed password
        const user = new User({
            name,
            email,
            password: hashedPassword, // Use the hashed password
            about,
            profileUrl,
            address: {
                street: address.street || "",
                city: address.city || "",
                pincode: address.pincode || 0
            }
        });

        const createdUser = await user.save();
        const userWithoutPassword = { ...createdUser.toObject() };
        delete userWithoutPassword.password;
        return NextResponse.json(userWithoutPassword, { status: 201, statusText: "createdUser" });
    } catch (error) {
        return NextResponse.json({ message: "Error creating user", status: "False" }, { status: 400 });
    }
}