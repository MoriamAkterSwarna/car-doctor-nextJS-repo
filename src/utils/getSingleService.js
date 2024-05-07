

export const getSingleService = async (id) => {

  const res = await fetch(`https://car-doctor-pro.vercel.app/api/services/${id}`, {
    cache: "no-store",
  });

  
  const data = await res.json();

  return data.result;
  };



