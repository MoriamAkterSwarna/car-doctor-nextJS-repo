
import ConnectDB from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const db = await ConnectDB()
     const usersCollection = db.collection('users');
    const { email } = await req.json();
    const user = await usersCollection.findOne({ email })
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.error({ message: "Error checking user" });
  }
}