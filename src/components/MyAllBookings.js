"use client"

import { getAllBookingsByEmail } from "@/utils/getAllBookingsByEmail";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import MyBookingsRow from "./MyBookingsRow";

const MyAllBookings =  () => {
    const session = useSession();
    const [bookingData, setBookingData] = useState([]);
console.log(session)


    useEffect(() => {
      if (session?.data?.user?.email) {
        getAllBookingsByEmail(session?.data?.user?.email).then(dt => {
          setBookingData(dt);
          console.log(bookingData);
        });
      }
    }, [session?.data?.user?.email]);

    console.log(bookingData);
    return (
        <div>
            <h1>My All Bookings</h1>
            <div className='w-11/12 mx-auto'>
                <table className='w-full table-zebra bordered'>
                    <thead>
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
                           <MyBookingsRow key={booking.id} booking={booking}></MyBookingsRow>
                        ))}
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyAllBookings;