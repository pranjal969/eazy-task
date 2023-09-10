import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";



export const GET = async (request, { params }) => {

  const { userId } = await params;

  try {
    await connectDb();
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
    await connectDb();
    const user = await User.deleteOne({ _id: userId });
    return NextResponse.json({ message: "User Deleted successfully", status: "True" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting user", status: "False" }, { status: 200 });
  }

}

// Update user by id
export const PUT = async (request, { params }) => {
  try {
    await connectDb();
    // Extract the userId from params
    const { userId } = params;

    // Get the user details from the database
    const user = await User.findById(userId);

    if (user) {
      // Extract user details from the request body
      const { name, password, about, profileUrl, address } = await request.json();

      // Update the user object with new data
      user.name = name;
      user.password = password;
      user.about = about;
      user.profileUrl = profileUrl;

      // Update address if provided
      if (address) {
        user.address.street = address.street || "";
        user.address.city = address.city || "";
        user.address.pincode = address.pincode || "";
      }

      // Save the updated user object
      await user.save();

      // Return a success response
      return NextResponse.json({ message: "User details updated successfully", status: "True" }, { status: 200 });
    } else {
      // Return a not found response if the user doesn't exist
      return NextResponse.json({ message: "User not found", status: "False" }, { status: 404 });
    }
  } catch (error) {
    // Handle errors and return an error response
    return NextResponse.json({ message: "Error updating user", status: "False" }, { status: 500 });
  }
};

