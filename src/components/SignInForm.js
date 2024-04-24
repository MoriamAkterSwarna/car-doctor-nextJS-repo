"use client"

import { signIn, useSession} from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import SocialLogin from "./shared/SocialLogin";


const SignInForm = () => {
    const session = useSession()
    console.log(session, 'sign in')



const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    const email = e.target.email.value; 
    const password = e.target.password.value;

    console.log({email, password});
    const users = {email, password}
    const res = await signIn('credentials', {
        redirect: false,
        email: users?.email,
        password: users?.password,
        
    })
        if ( await (res.error)) {
       
            // console.error(result.error);
            toast.error("Use a valid email and password to sign in!")
        } else {
           
            toast.success("User Signed In successfully!")
        }
 
    
    
    
  
}
if(session?.status === 'loading'){
    <span className="loading loading-dots loading-lg bg-red-500"></span>
  }



 return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-center text-orange-700">Login!</h1>
              <form  onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="Your email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                
              </div>
              <div className="form-control mt-6">
                
                <input className="btn bg-rose-400 hover:bg-rose-700" type="submit" value="Login"/>
              </div>
              </form>

              <p>New to Car Doctor <Link href='/signup' className="text-orange-500 font-bold">Sign Up</Link> </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
 )
};

export default SignInForm;