import { NextResponse } from 'next/server';

export async function middleware(request) {
  const authToken = await request.cookies.get("authToken")?.value;
  const path = await request.nextUrl.pathname;
  const accessAfterLoginUrls = ['/add-task', '/profile'];
  const NoAccessAfterLoginUrls = ['/signup', '/login'];
  switch (true) {
    case path.startsWith('/api'):
      if (!authToken) {
        return NextResponse.json(
          {
            message: "Unauthorized access prohibited",
            securedVia: "256 Bit Encryption",
            status: false
          },
          { status: 401 }
        );
      }
      break;

    case NoAccessAfterLoginUrls.includes(path):
      if (authToken) {
        return NextResponse.redirect(new URL('/profile', request.url));
      }
      break;

    case accessAfterLoginUrls.includes(path):
      if (!authToken) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
      break;

    default:
      break;
  }
}

export const config = {
  matcher: ['/signup', '/login', '/profile', '/add-task', '/api/users/:path*', '/api/work/:path*'],
};
