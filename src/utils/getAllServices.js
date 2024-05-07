export const getAllServices = async () => {
    

    const res = await fetch(`https://car-doctor-pro.vercel.app/api/services`, {
       cache: "no-store",
    });
  
    
    const data = await res.json();
    return data.result;
    };
  