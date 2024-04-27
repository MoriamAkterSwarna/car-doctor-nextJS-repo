import ConnectDB from "@/lib/ConnectDB";

import { NextResponse } from "next/server";
export const  GET= async(req, res) =>{
    if (req.method !== 'GET') {
        return NextResponse.json({ message: 'Method not allowed' });
      }
    
      try {
        const db = await ConnectDB();
        const serviceCollection = db.collection('services');
    
        const result = await serviceCollection.find().toArray();
 
     
     return NextResponse.json({ message: "Services retrieved successfully.",result }, { status: 201 });
   } catch (error) {
     console.error(error);
     return NextResponse.json({ message: 'Error Getting Services' });
   }
 
}


