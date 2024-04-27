

export const getSingleService = async (id) => {
    // console.log('Fetching service with ID:', id);

  const res = await fetch(`http://localhost:3000/api/services/${id}`, {
    cache: "no-store",
  });

  
  const data = await res.json();
  // console.log('Service data:', data.result);

  return data.result;
  };



