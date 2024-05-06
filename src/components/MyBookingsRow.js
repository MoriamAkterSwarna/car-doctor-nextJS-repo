
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md"
import Link from "next/link";
const MyBookingsRow = ({ booking }) => {
  const { _id, date, service, price, img } = booking;

  const handleDelete = async (id) => {
    const result = await fetch(`/api/bookingsList/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Service deleted successfully.") {
          toast.success("Service deleted successfully.");
        }
      });
  };
  return (
    <tr className="border">
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {img && (
              <Image
              className="w-24 h-24 rounded-full"
                width={550}
                height={550}
                src={img}
                alt="Avatar Tailwind CSS Component"
              />
            )}
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>${price}</td>
      <td>
        <Link href={`/updateBooking/${_id}`}  >
        
          <FaRegEdit className="h-8 w-8 font-bold" />
        </Link>

        
              
      </td>

      <td>
        <button onClick={() => handleDelete(_id)}>
          <MdDelete className="h-8 w-8 font-bold" />
        </button>
      </td>
    </tr>
  );
};

export default MyBookingsRow;
