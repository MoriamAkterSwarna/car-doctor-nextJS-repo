'use client'

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import SocialLogin from "../shared/SocialLogin";
import { useState } from "react";
import {  useRouter } from "next/navigation";


 
export function SignupForm() {

  const [error, setError] = useState("");
const session = useSession()
const router = useRouter()
const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value; 
  const email = form.email.value;
  const image = form.photo.value;
  const password = form.password.value;

  if (!name || !email || !password || !image) {
    setError("All fields are necessary.");
    return;
  }

  const userData = { name, email, password, image }

  const result = await fetch('api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  const data = await result.json()
    console.log(data)
    if (result.ok) {
    
  
      // User is registered, now sign them in
      signIn("credentials", {
        redirect: false,
        name: userData.name,
        email: userData.email,
        image: userData.image,
        password: userData.password
      }).then((result) => {
        if (result?.error) {
          
          console.error(result.error);
          toast.error("An error occurred while Sign Up")
        } else {
         
          toast.success("User Signed Up successfully!")
          form.reset();
          router.push('/login')
        }
      });
    } else {
      toast.error('Error registering user')
    }

 
}

  return (




<div className="card flex-shrink-0 w-full max-w-sm border">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-center text-orange-700">Sign Up!</h1>
              <form  onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" name="photo" placeholder="Photo URL"  className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required/>
               
              </div>
              <div className="form-control mt-6">
                
                <input className="btn bg-rose-400 hover:bg-rose-700" type="submit" value="Sign Up"/>
              </div>
              {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
              </form>

              <p>Already have an account?? <Link href='/login' className="text-orange-500 font-bold">Log in</Link> </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
  )
}