import Image from "next/image";
import React from "react";
import loadingGif from "../assets/icons/deliveryt.svg"
const LoadingPage = () => {
  return (
    <div>
      <Image src={loadingGif} alt="Error" width={1000} height={1000}/>
    </div>
  );
};

export default LoadingPage;