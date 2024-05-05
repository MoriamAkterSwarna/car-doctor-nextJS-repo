import { NextResponse } from 'next/server'

import { getSession, useSession } from 'next-auth/react';
 

// export async function getServerSideProps(context) {
//     const session = await getSession({ req: context.req })
  
//     return {
//       props: { session }
//     }
//   }

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    console.log("executed")

    // const user = useSessionDetail();
    const session = await getSession({request});

    // const dt = await session.user;
    // const dt = useSession();
    // console.log(dt,'inside middleware');

  // Now you can use the session object
  console.log(session,'inside middleware');

//   return NextResponse.redirect(new URL('/home', request.url))


// if( !session){
//     // return NextResponse.redirect(new URL('/login', request.url))
// }
}
 //request.nextUrl.pathname
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/service/:path*',
            '/checkout/:path*',
            '/myBookings/:path*',
            '/updateBooking/:path*',
            // "/login/:path*",
            // "/signup/:path*",

]
}

// import { getSession } from 'next-auth/react'

