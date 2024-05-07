"use client"

import { getAllBookingsByEmail } from "@/utils/getAllBookingsByEmail";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import MyBookingsRow from "./MyBookingsRow";

const MyAllBookings =  () => {
    const session = useSession();
    const [bookingData, setBookingData] = useState([]);



    useEffect(() => {
      if (session?.data?.user?.email) {
        getAllBookingsByEmail(session?.data?.user?.email).then(dt => {
          setBookingData(dt);
          
        });
      }
    }, [session?.data?.user?.email]);

    return (
        <div className="my-8">
            <h1 className="text-center font-bold text-3xl my-4">My All Bookings</h1>
            <div className='w-11/12 mx-auto overflow-x-auto'>
                <table className='w-full table table-zebra'>
                    <thead className="border">
                        <tr>
                            <th>Service Image</th>
                            <th>Service Name</th>
                            <th>Service Date</th>
                            <th>Service Price</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        { bookingData && bookingData?.map((booking, index) => (
                           <MyBookingsRow key={booking.id} bookingData={bookingData} setBookingData={setBookingData} booking={booking}></MyBookingsRow>
                        ))}
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyAllBookings;