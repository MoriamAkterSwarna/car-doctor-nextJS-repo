

export const getSingleService = async (id) => {

  const res = await fetch(`http://localhost:3000/api/services/${id}`, {
    cache: "no-store",
  });

  
  const data = await res.json();

  return data.result;
  };



