export const getSingleBooking = async (id) => {
    console.log(id)
    const res = await fetch(`http://localhost:3000/api/bookingsList/${id}`, {
        cache: "no-store"
    }); 
    
    const data = await res.json();
    console.log("Service data:", data.result);
    
    return data.result;
    }