export const getSingleBooking = async (id) => {
    console.log(id)
    const res = await fetch(`https://car-doctor-pro.vercel.app/api/bookingsList/${id}`, {
        cache: "no-store"
    }); 
    
    const data = await res.json();
   
    
    return data.result;
    }