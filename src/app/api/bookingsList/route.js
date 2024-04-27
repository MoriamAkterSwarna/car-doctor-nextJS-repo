

import ConnectDB from "@/lib/ConnectDB";

import { NextResponse } from "next/server";
// New route for fetching a single service
export const GET = async (request, ) => {
    if (request.method !== 'GET') {
        return NextResponse.json({ message: 'Method not allowed' });
    }
    const db = await ConnectDB();
        const bookingsCollection = db.collection('bookServices');
    
        const email = request.nextUrl.searchParams.get("email");
  
    console.log(email)
    try {
       
        
        const result = await bookingsCollection.find( {email: email} ).toArray(); 
        
        return NextResponse.json({ message: "Service retrieved successfully.",result }, { status: 201 });

       
    } catch (error) {

        return NextResponse.json({ message: 'Error retrieving service' }, { status: 500 });

    }

}




