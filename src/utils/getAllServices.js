export const getAllServices = async () => {
    

    const res = await fetch(`http://localhost:3000/api/services`, {
       cache: "no-store",
    });
  
    
    const data = await res.json();
    console.log('Service data:', data);
  
    return data.result;
    };
  