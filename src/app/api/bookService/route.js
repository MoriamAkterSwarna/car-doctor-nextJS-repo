import ConnectDB from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    if (request.method !== 'POST') {
        return NextResponse.json({ message: 'Method not allowed' });
      }
    
      try {
        const db = await ConnectDB();
        const bookingsCollection = db.collection('bookServices');
    
       
        const data = await request.json()
      
        const result = await bookingsCollection.insertOne(data);
 
    
        return NextResponse.json({ message: "Service booking done successfully.",result }, { status: 201 });
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error Add Booking' }, { status: 500 });
      }
    
}