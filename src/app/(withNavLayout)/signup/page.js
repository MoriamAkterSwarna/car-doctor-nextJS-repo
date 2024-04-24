import { SignupForm } from "@/components/SignUpForm";
import  loginImg from '@/assets/images/login/login.svg';
import Image from "next/image";

const SignUpPage = () => {

   
    return (
        <div className="flex flex-col lg:flex-row w-11/12 mx-auto justify-evenly items-center my-8">
        <Image className="mr-10 " src={loginImg} alt="login"  height={400} width={400}/>
           <>
           <SignupForm />

           </>
        </div>
    );
};

export default SignUpPage;