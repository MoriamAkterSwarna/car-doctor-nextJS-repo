import React from 'react';
import { toast } from 'react-toastify';

const UpdateBookingModal = ({booking}) => {
    const { _id, date, service, customerName,  address, phone,name  } = booking;

    const handleUpdateBooking = async (event) => {
        event.preventDefault();
        const form = event.target;
        const customerName = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const payload = { customerName, date, phone, address };
        const result = await fetch(`/api/bookingsList/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => res.json()); 
        if(result.ok){
            toast.success('Service updated successfully.'); 
        }  



    return (
<>
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

</>
    //     <button
    //     onClick={ handleModal}
    //   >
    //     <FaRegEdit className="h-8 w-8 font-bold" />
    //   </button>
    //   {open && <UpdateBookingModal booking={booking} open={open} setOpen={setOpen}/>}
        
//         <div className="modal-box w-11/12 max-w-5xl">
//         <h3 className="font-bold text-lg">service</h3>
//         <div className="modal-action">
//            <form onSubmit={handleUpdateBooking} method="dialog">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Name</span>
//                         </label>
//                         <input type="text" defaultValue={name} name="name" className="input input-bordered" />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Date</span>
//                         </label>
//                         <input type="date" name="date" defaultValue={date} className="input input-bordered" />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Phone</span>
//                         </label>
//                         <input type="text" name="phone" defaultValue={phone}  className="input input-bordered" />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Address</span>
//                         </label>
//                         <input type="text" defaultValue={address} name='address' className="input input-bordered" />
//                     </div>
//                 </div>
//                 <div className="form-control mt-6">
//                     <input className="btn btn-primary btn-block" type="submit" value="Update Booking" />
//                 </div>
//             </form> 
//        </div>
//   </div>

/* <div className="modal-box w-11/12 max-w-5xl">
<h3 className="font-bold text-lg">Hello!</h3>
<p className="py-4">Click the button below to close</p>
<div className="modal-action">
  <form method="dialog">
    {/* if there is a button, it will close the modal */
//     <button className="btn">Close</button>
//   </form>
// </div>
// </div> */}
    );
};
}
export default UpdateBookingModal;