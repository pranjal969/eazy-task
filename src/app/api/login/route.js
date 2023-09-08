import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectDb();

// Secret key for JWT
const jwtSecret = process.env.JWT_SECRET;

// Api for login
export const POST = async (request) => {
    const saltRounds = parseInt(process.env.SALT_ROUNDS);
    const salt = process.env.PASSWORD_SALT;
    try {
        // fetch user details from request
        const { email, password } = await request.json();
        const user = await User.findOne({
            email: email,
        });
        // Combine the custom salt with the password
        const saltedPassword = `${salt}${password}`;
        if (user) {
            const matchedPassword = bcrypt.compareSync(saltedPassword, user.password);
            if (!matchedPassword) {
                throw new Error("Password Incorrect");
            }

            //Else Generate a JWT token
            const token = jwt.sign(
                {
                    userId: user._id,
                    name: user.name,
                    email: user.email, // Include any user-related data you need
                },
                jwtSecret,
                { expiresIn: '1h' } // Set an expiration time for the token
            );
            const response = NextResponse.json({ message: "Login success !!",user:user, success: true }, { status: 200, statusText: "ok" })
            response.cookies.set("authToken", token, {
                httpOnly: true,
                maxAge: 3600, 
            })
            // Send the JWT token in the response
            return response;
        } else {
            throw new Error("User Not Found");
        }
    } catch (error) {
        return NextResponse.json({ message: error.message, status: "False" }, { status: 400 });
    }
};
