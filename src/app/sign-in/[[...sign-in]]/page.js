import { SignIn } from "@clerk/nextjs";

export default function SignInPage(){
    return (
        <div className=" flex items-center justify-center w-100% h-[490px]">

            <SignIn/>
        </div>
    )
}