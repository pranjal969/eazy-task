import { NextResponse } from 'next/server';
export async function  middleware(request) {
  try { 
    
    const authToken = await request.cookies.get("authToken")?.value;
    const path = await request.nextUrl.pathname;
    const accessAfterLoginUrls = ['/add-task', '/profile', '/show-task'];
    const NoAccessAfterLoginUrls = ['/signup', '/login', '/'];
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
          return NextResponse.redirect(new URL('/show-task', request.url));
        }
        break;

      case accessAfterLoginUrls.includes(path):
        if (!authToken) {
          console.log("No access wrae executed");
          return NextResponse.redirect(new URL('/login', request.url));
        }
        console.log("No acces111 wrae executed");
        break;

      default:
        break;
    }
  } catch (error) {
console.log("Middle Ware Error ",error)
  }
}

export const config = {
  matcher: ['/', '/signup', '/show-task', '/login', '/profile', '/add-task', '/api/work/:path*'],
};
