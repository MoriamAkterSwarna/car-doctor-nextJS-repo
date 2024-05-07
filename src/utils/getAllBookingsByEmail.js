/* eslint-disable react-hooks/rules-of-hooks */



export const getAllBookingsByEmail = async (email) => {
    

  const res = await fetch(`https://car-doctor-pro.vercel.app/api/bookingsList?email=${email}`,{
    cache: 'no-store'
  });

  
  const data = await res.json();


  return data.result;
  };
