/* eslint-disable react-hooks/rules-of-hooks */



export const getAllBookingsByEmail = async (email) => {
    

  const res = await fetch(`http://localhost:3000/api/bookingsList?email=${email}`);

  
  const data = await res.json();
  console.log('Service data:', data.result);

  return data.result;
  };
