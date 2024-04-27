"use client"

import { getAllBookingsByEmail } from "@/utils/getAllBookingsByEmail";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import MyBookingsRow from "./MyBookingsRow";

const MyAllBookings =  () => {
    const session = useSession();
    const [data, setData] = useState(null);
console.log(session)

// const handleMyBookings = (session) => {
//     if(session){
//         getAllBookingsByEmail(session?.data?.user?.email).then(res => {
//             console.log(res);
//         });
       
//     }
// }
// handleMyBookings(session)
// console.log(data)
    // // const data = await getAllBookingsByEmail(session?.data?.user?.email);
    // const data = await getAllBookingsByEmail(user?.email);
    // console.log(data);

    
    // const [data, setData] = useState(null);

    useEffect(() => {
      if (session?.data?.user?.email) {
        getAllBookingsByEmail(session?.data?.user?.email).then(dt => {
          setData(dt);
          console.log(data);
        });
      }
    }, [session?.data?.user, data]);

    console.log(data)
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
                        { data && data?.map((booking, index) => (
                           <MyBookingsRow key={booking.id} booking={booking}></MyBookingsRow>
                        ))}
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default MyAllBookings;