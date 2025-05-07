import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from "jose"

const publicRoutes = {
  router: ["/login"]
}

const secret = new TextEncoder().encode("secret")

export async function middleware(request: NextRequest) {
  const urlpath = request.nextUrl.pathname
  const publicRouter = publicRoutes.router.find(x => x === urlpath)
  const token = request.cookies.get('token')

  if (!publicRouter && !token) {
    const redirect = request.nextUrl.clone()
    redirect.pathname = "/login"
    return NextResponse.redirect(redirect)
  }

  try {
    jwtVerify(String(token?.value), secret)
    return NextResponse.next()
  } catch (error) {
    console.log("error : ", error)
    return NextResponse.redirect(new URL('/login', request.url))
  }

}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
