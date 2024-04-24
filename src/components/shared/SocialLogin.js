"use client"

import { getSession, signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { toast } from "react-toastify";
const SocialLogin = () => {


    const session  = useSession();
    console.log(session)
  

    const handleLogin = (provider) => {
        signIn(provider, {redirect: false})
        .then(result => {
            if(result?.error){
                toast.error("An error occurred while logging in");
            }
            else{
                toast.success("User Logged in successfully")
            }
        })

    }
  

    
 return (
 <div>
 
  <div className="divider divider-error">OR</div>
        
        <div className="flex justify-center items-center"><button className="btn mr-3 w-1/3" onClick={()=>handleLogin('google')} ><FcGoogle className="text-xl"/></button>
        <button className="btn w-1/3" onClick={()=>handleLogin('github')} ><IoLogoGithub className="text-xl"/></button></div>
    
 </div>
 )
};

export default SocialLogin;