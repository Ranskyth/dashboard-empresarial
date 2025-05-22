import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode('secret');

async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('token')?.value || null;

  const isAuth = token && (await verifyToken(token));
  const isLoginPage = pathname === '/login';
  const isRoot = pathname === '/';

  if (isLoginPage) {
    return isAuth
      ? NextResponse.redirect(new URL('/dashboard', req.url))
      : NextResponse.next();
  }

  if (isRoot) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (!isAuth) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/', '/login'],
};
