import { NextResponse } from "next/server";

export function DELETE(request,{params}){
    const {userId,postId} =params;
    console.log("User Id " +userId);
    console.log("Post Id " +postId);
    return NextResponse.json(params)
}