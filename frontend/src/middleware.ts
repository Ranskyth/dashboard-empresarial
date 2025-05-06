import { NextRequest, NextResponse } from 'next/server';

const publicRoutes = {
  router : ["/login"]
}

export function middleware(request: NextRequest) {
  const urlpath = request.nextUrl.pathname
  const publicRouter = publicRoutes.router.find(x => x === urlpath)
  const token = request.cookies.get("token")
  const valuetoken = "123456789"
  console.log(token)

  if(!publicRouter && !token){
    const redirect = request.nextUrl.clone()
    redirect.pathname = "/login"
    return NextResponse.redirect(redirect)
  }

  if(!publicRouter && token){
    if(token.value !== valuetoken){
      const redirect = request.nextUrl.clone()
      redirect.pathname = "/login"
      return NextResponse.redirect(redirect)
    }
    return NextResponse.next()
  }

  return NextResponse.next()

}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
