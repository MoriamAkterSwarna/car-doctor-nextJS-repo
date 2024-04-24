/* eslint-disable react/no-children-prop */

import SignInForm from "@/components/SignInForm";
import Image from "next/image";
import  loginImg from '@/assets/images/login/login.svg';

const LoginPage = () => {


    

    return (
        <div className="flex w-11/12 mx-auto justify-evenly items-center mt-16">
        <Image className="" src={loginImg} alt="login"  height={400} width={400}/>
           <div className="">
        <SignInForm></SignInForm>
        </div>
        </div>
    );
};

export default LoginPage;