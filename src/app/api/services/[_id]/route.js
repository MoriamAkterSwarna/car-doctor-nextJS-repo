

import ConnectDB from "@/lib/ConnectDB";
import { ObjectId } from "bson";
import { NextResponse } from "next/server";
// New route for fetching a single service
export const GET = async (req, {params}) => {
    if (req.method !== 'GET') {
        return NextResponse.json({ message: 'Method not allowed' });
    }
    const db = await ConnectDB();
    const serviceCollection = db.collection('services');
    
    const { _id } = params; 
  
    console.log(_id)
    try {
       
  
        
        const result = await serviceCollection.findOne({_id: new ObjectId(_id)} ); 
        
        return NextResponse.json({ message: "Service retrieved successfully.",result }, { status: 201 });

       
    } catch (error) {

        return NextResponse.json({ message: 'Error retrieving service' }, { status: 500 });

    }

}


