import ConnectDB from "@/lib/ConnectDB";
import { NextRequest, NextResponse } from "next/server";
export const  POST= async(req, res) =>{

 if(req.method === 'POST'){
  try {
    const db = await ConnectDB()
     const usersCollection = db.collection('users');
    

    const body = await req.json();
      const { name, image, email, password } = body;
    
 
     const newUser = { name,image, email, password }; 
     const user = await usersCollection.findOne({ email });
      if (user) {
        return NextResponse.json({ message: 'User already exists' }, { status: 400 });
      }
     const result = await usersCollection.insertOne(newUser);
 
     
     return NextResponse.json({ message: "User registered.",result }, { status: 201 });
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Error registering user' });
   }
  }else {
    return NextResponse.methodNotAllowed();
  }
}


