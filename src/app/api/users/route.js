import { sendStatusCode } from "next/dist/server/api-utils";
import { NextResponse } from "next/server"

export function GET(request) {

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