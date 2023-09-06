import { NextResponse } from 'next/server'


export async function middleware(request) {

  const authToken = await request.cookies.get("authToken")?.value;
  console.log(authToken);
  return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" 
export const config = {
  matcher: ['/signup', '/login', '/add-task',],
}