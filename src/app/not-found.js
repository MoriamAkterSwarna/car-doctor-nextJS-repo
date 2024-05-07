"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import errorImg from "../assets/images/Frame.png"

const ErrorPage = () => {
    const router = useRouter()

    const handleBackBtn = () =>{
        router.push('/')
    }
  return (
    <div className="mt-5 flex justify-center items-center flex-col">
      <Image className="w-[50vw] h-[40vw]"  src={errorImg} alt="Error" width={1000} height={1000}/>
      <button onClick={handleBackBtn} className="btn btn-error">Back To HomePage</button>
    </div>
  );
};

export default ErrorPage;