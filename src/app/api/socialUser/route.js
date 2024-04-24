
import ConnectDB from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const db = await ConnectDB()
     const usersCollection = db.collection('users');
     const { body } = req;
  const user = JSON.parse(body);
  console.log(user)
    const result = await usersCollection.insertOne(user);
    console.log("user: ", result);
    return NextResponse.json({ message: "User added", user: result});
  } catch (error) {
    return NextResponse.error({ message: "Error checking user" });
  }
}

