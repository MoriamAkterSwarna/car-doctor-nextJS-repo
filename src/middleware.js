export { default } from "next-auth/middleware"

import { NextResponse } from 'next/server'
import { cookies } from "next/headers"


 
export async function middleware(request) {

  const token = cookies(request).get('__Secure-next-auth.session-token')
 


  const {pathname} = new URL(request.url) 
  

  if(!token){
    
    return NextResponse.redirect(new URL('/login', request.url))  

  } else{
  

    const newUrl = new URL(pathname, request.url);
    if (newUrl.toString() !== request.url) {
      
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
