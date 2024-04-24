"use client"

import { signOut } from "next-auth/react";

const SignOutBtn = () => {
 return (
 <>
<button className="btn bg-rose-400" onClick={()=>signOut()}>Sign Out</button>
 </>
 )
};

export default SignOutBtn;