"use client"

import { useSession } from 'next-auth/react';

import React from 'react';
import { toast } from 'react-toastify';


const BookingForm = ({data}) => {
    console.log(data)

   
    const session = useSession()
    // console.log(session, 'sign in')
    const handleBookService= async() =>{
        // console.log('Book Service');
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const email = session?.data?.user?.email;
        const booking = {
            customerName: name, 
            email, 
          
            date, 
            phone,
            address,
            service: data?.title,
            service_id: data?._id, 
            img: data?.img,
            price: data?.price
        }

        // console.log(booking);

     const result = await  fetch('/api/bookService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        }).then(res => res.json())
        .then(data => {
            if(data.message === 'Service booking done successfully.'){
                toast.success('Service booking done successfully.');
            }
    })
   
    }
   
    
    return (
        <div className='my-10'>
          <div className='w-11/12 mx-auto'>
            <h2 className='text-center text-3xl mb-4'>Book Service: {data?.title} </h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={session?.data?.user?.name} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={session?.data?.user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" name="price"  defaultValue={'$'+ data?.price}  className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" name="phone"  placeholder='Your Phone'  className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Present Address</span>
                        </label>
                        <input type="text" name="address" placeholder='Your Address'  className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>  
        </div>
    );
};





export default BookingForm;