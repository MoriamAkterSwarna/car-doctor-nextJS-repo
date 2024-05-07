"use client"
import Image from "next/image";

import logo from '@/assets/logo.svg'
import Link from "next/link";

import SignOutBtn from "../SignOutBtn";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession()
  const navItems =(
    <>
    <li><Link href='/'>Home</Link></li>
      <li><Link href='/myBookings'>My Bookings</Link></li>

      
    </>
  )

  
  return (
    <>
      <div className="navbar bg-base-100 h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
          {navItems}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image src={logo} width={100} height={100} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navItems}
        </ul>
      </div>
      <div className="navbar-end">
      {
        session?.data?.user ? 
        <>
        <div style={{borderRadius: "50%", width: "50px", height:"50px", overflow: "hidden"}} title={session?.data?.user.name}>
          <Image className="mr-4"  alt={session?.data?.user.name} src={session?.data?.user?.image} objectFit="cover" height={50} width={50} /> 
        </div>
        <SignOutBtn/> 
        </>
        : 
        <>
        <Link href='/login' className="btn btn-outline mr-3">Login</Link>
        <Link href='/signup' className="btn btn-error">Register</Link>
        </>
      }

       
      </div>
    </div>
    </>
  );
};

export default Navbar;
