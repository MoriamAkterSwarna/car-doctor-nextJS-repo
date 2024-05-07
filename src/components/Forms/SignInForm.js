"use client"

import { signIn, useSession} from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import SocialLogin from "../shared/SocialLogin";
import { useRouter } from "next/navigation";




const SignInForm = () => {
    const session = useSession()

    
   const router = useRouter();


const handleSubmit = async (e) => {
    e.preventDefault();
   
    const email = e.target.email.value; 
    const password = e.target.password.value;




    console.log({email, password});
    const users = {email, password}
    const res = await signIn('credentials', {
        redirect: false,
        email: users?.email,
        password: users?.password,
        
    }).then(result => {
        console.log(result)
        if (result.error) {
            console.log(result.error)
            toast.error(result.error)
        } else {
         
            console.log("User Signed In successfully!")
           
            
        }
    
    }) 

    if( session?.data?.user &&  session?.status === 'authenticated'){
      toast.success("User Signed In successfully!")
       router.push('/')
    }


        
    
  
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
                <input type="email" name="email"  placeholder="Your email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                
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