import ConnectDB from "@/lib/ConnectDB";
import { ObjectId } from "bson";
import { NextResponse } from "next/server";
export const DELETE = async (request, { params }) => {
  if (request.method !== "DELETE") {
    return NextResponse.json({ message: "Method not allowed" });
  }
  const db = await ConnectDB();
  const bookingsCollection = db.collection("bookServices");

  // console.log(params)
  const { _id } = params;
  console.log(_id);
  try {
    const result = await bookingsCollection.deleteOne({
      _id: new ObjectId(_id),
    });
    console.log(result);
    return NextResponse.json(
      { message: "Service deleted successfully.", result },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting service" },
      { status: 500 }
    );
  }
};

export const PATCH = async (request, { params }) => {
  if (request.method !== "PATCH") {
    return NextResponse.json({ message: "Method not allowed" });
  }
  const db = await ConnectDB();
  const bookingsCollection = db.collection("bookServices");

  // console.log(params)
  const { _id } = params;
  console.log(_id);

  const data = await request.json();
  console.log(data)
  try {
    const result = await bookingsCollection.updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          customerName: data?.customerName,
          date: data?.date,
          phone: data?.phone,
          address: data?.address,
        },
      },
        { upsert: true }
    );
    console.log(result);
    return NextResponse.json(
      { message: "Booking updated successfully.", result },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating service" },
      { status: 500 }
    );
  }
};


export const GET = async (request, { params }) => {
  const db = await ConnectDB();
  const bookingsCollection = db.collection("bookServices");

  const { _id } = params;
  console.log(_id);
  try {
    const result = await bookingsCollection.findOne({_id: new ObjectId(_id)});
    console.log(result);
    return NextResponse.json({message: "Single Booking retrieved successfully", result}, { status: 200 });
  }
  catch (error) {
    return NextResponse.json({ message: "Error fetching service" }, { status: 500 });
  }
}
