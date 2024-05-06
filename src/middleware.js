export { default } from "next-auth/middleware"

import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"
import { cookies } from "next/headers"

// import { getServerSession } from "next-auth/next"
const secret = process.env.NEXTAUTH_JWT_SECRET
 
export async function middleware(request) {


  const token = cookies(request).get('next-auth.session-token')
  console.log(token, 'cookies token')


  const {pathname} = new URL(request.url) 
  console.log(pathname, 'pathname')

  if(!token){
    console.log("token nei")
    return NextResponse.redirect(new URL('/login', request.url))  

  } else{
    // console.log('token ache ')
    // return NextResponse.redirect(new URL(pathname, request.url))

    const newUrl = new URL(pathname, request.url);
    if (newUrl.toString() !== request.url) {
      console.log('token ache ')
      return NextResponse.redirect(newUrl)
    }

  }


 

}

export const config = {
  matcher: ['/service/:path*',
            '/checkout/:path*',
            '/myBookings/:path*',
            '/updateBooking/:path*',
            

]
}
