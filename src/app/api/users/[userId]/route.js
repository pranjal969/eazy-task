import { NextResponse } from "next/server";

export function DELETE(request, { params }) {
    console.log(typeof params.userId);
    return NextResponse.json({
        message: "Deleted Successfully",
        status: "ok"
    }, { status: 200, statusText: "Deleted" })
}