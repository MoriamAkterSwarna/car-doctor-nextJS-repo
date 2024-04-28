"use client";
import React from "react";
import { toast } from "react-toastify";

const UpdateForm = ({ data }) => {
  console.log(data);
  const handleUpdateBooking = async (event) => {
    event.preventDefault();
    const form = event.target;
    const customerName = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const payload = { customerName, date, phone, address };
    const result = await fetch(`/api/bookingsList/${data?._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Service updated successfully.");
        }
      });
  };

  return (
    <div>
      <h1 className="text-4xl">Update {data?.service} Booking</h1>
      <form onSubmit={handleUpdateBooking}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={data?.customerName}
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              defaultValue={data?.date}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              name="phone"
              defaultValue={data?.phone}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              defaultValue={data?.address}
              name="address"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Update Booking"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
