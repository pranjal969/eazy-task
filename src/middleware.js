import { NextResponse } from 'next/server';

export async function middleware(request) {
  const authToken = await request.cookies.get("authToken")?.value;

  // Check if the request is for an API route
  if (request.nextUrl.pathname.startsWith('/api')) {
    // If it's an API route, check for authToken
    if (!authToken) {
      // If authToken is not present for API routes, deny access
      return NextResponse.json({ message: "Unauthorized access prohibted", status: "False", securedVia: "AWS_Token" }, { status: 401 });
    }
  } else if (request.nextUrl.pathname.startsWith('/signup') ||
    request.nextUrl.pathname.startsWith('/login')) {
    if (authToken) {
      // If authToken is present, redirect to the profile page
      return NextResponse.redirect(new URL('/profile', request.url));
    }
    else {
      return;
    }
  }

  return;
}

// Match all routes under /api
export const config = {
  matcher: ['/signup', '/login', '/add-task', '/api/users:path*','/api/work:path*'],
}
