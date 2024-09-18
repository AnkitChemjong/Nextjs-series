import { SignUp } from "@clerk/nextjs";

export default function SignUpPage(){
    return (
        <div className=" flex items-center justify-center w-100% h-[600px]">

            <SignUp/>
        </div>
    )
}