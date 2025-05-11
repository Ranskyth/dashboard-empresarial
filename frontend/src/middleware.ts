import { NextRequest, NextResponse } from 'next/server';
import {jwtVerify} from 'jose';

const secret = new TextEncoder().encode("secret")

export async function middleware(req: NextRequest) {

  const token = req.cookies.get('token')?.value

  if(req.nextUrl.pathname === "/login"){
    if(token){
      try{
        await jwtVerify(token, secret);
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }catch{
        return NextResponse.next()
      }
    }
    return NextResponse.next()
  }

  if(req.nextUrl.pathname === "/"){
    return NextResponse.redirect(new URL("/login", req.url))
  }
  
  if (token) {
    try {
      if(token.split(".").length === 3){
        await jwtVerify(token, secret);
        return NextResponse.next();
      }else{
        console.log("erro no formato do jwt")
      }
    } catch(error){
      console.error("Erro ao verificar token:", error);
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }
  

  return NextResponse.redirect(new URL('/login', req.url));
}

export const config = {
  matcher: ['/dashboard/:path*', '/', '/login'],
};