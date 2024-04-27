"use client"
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import UpdateBookingModal from "./UpdateBookingModal";
import { useState } from "react";
const MyBookingsRow = ({ booking }) => {
    const [open, setOpen] = useState(false)
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
    <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {img && (
              <Image
                width={50}
                height={50}
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
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <FaRegEdit className="h-8 w-8 font-bold" />
        </button>

        <dialog id="my_modal_1" className="modal">
             
             <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="modal-action">
      <form >
       asafg
        <button className="btn">Close</button>
      </form>
     
    </div>
  </div>


        </dialog>
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
