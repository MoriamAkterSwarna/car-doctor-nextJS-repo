"use client"

import { signOut } from "next-auth/react";

const SignOutBtn = () => {

    const handleSignOut = async (event) => {
        event.preventDefault();
        await signOut();
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