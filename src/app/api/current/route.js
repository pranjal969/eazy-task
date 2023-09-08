import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";


connectDb();
const jwtSecret = process.env.JWT_SECRET; // Load your JWT secret from environment variables

export const GET = async (request) => {
    try {
        const authToken = await request.cookies.get("authToken")?.value;

        // Verify the JWT token
        const decodedToken = jwt.verify(authToken, jwtSecret);


        return NextResponse.json({ user: decodedToken, message: "Token verified successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Token verification failed", error: error.message }, { status: 401 });
    }
};
