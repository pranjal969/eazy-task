import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();


// Api for logout
export const POST = async (request) => {

    const response = NextResponse.json({
        message: "Logout Successfull !!",
        status: true
    });
 response.cookies.set("authToken", "", {
    httpOnly: true,
    maxAge: 0,
})
    return response;
};
