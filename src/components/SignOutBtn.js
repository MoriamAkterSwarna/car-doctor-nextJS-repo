"use client"

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignOutBtn = () => {
    const router = useRouter()

    // console.log(router, 'router')
    const handleSignOut = async (event) => {
        event.preventDefault();
        await signOut({
            redirect: false 
          });
            router.push('/login')
    };
 return (
 <>
 <form onSubmit={handleSignOut}>

<input className="btn bg-rose-400" type="submit" value="Sign Out" />
 </form>
 </>
 )
};

export default SignOutBtn;