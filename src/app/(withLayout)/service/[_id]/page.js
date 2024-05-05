import PrivateRoute from "@/components/PrivateRoute";
import { getSingleService } from "@/utils/getSingleService";
import Link from "next/link";


const SingleService = async ({ params }) => {
  const { _id } = params;
  console.log(_id);
 const dt = await getSingleService(_id);
 console.log(dt)

  return (
    <PrivateRoute>
      <div>
      <h1>Service Page</h1>
      {/* <p>{dt.title}</p>
      <p>{dt.description}</p>
      <p>{dt.price}</p> */}

      <Link href={`/checkout/${_id}`}><button className="btn btn-info">Check out</button></Link>
    </div>
    </PrivateRoute>
  );
};

export default SingleService;