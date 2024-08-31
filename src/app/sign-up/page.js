"use client";
import { Label } from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import { formControls, initialState } from "@/utils";
import CommonFormElement from "@/components/form-element";
import { useState } from "react";
import { registerUserAction } from "@/action";
import { useRouter } from "next/navigation";

function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState(initialState);
  const router=useRouter();
  
  function handleSignUpBtnValid(){
    return Object.keys(signUpFormData).every(
        (key) => signUpFormData[key].trim() !== ""
      );
  }
  async function handleSignUp(){
    const result=await registerUserAction(signUpFormData);
    console.log(result);
    if(result.success){
        alert(result.message);
        router.push('/sign-in');
    }
  }

  return (
    <div>
      <h1>Welcome to registration</h1>
      <form action={handleSignUp}>
        {formControls.map((controlItem) => {
          return (
            <div key={controlItem.name}>
              <Label>{controlItem?.label}</Label>
              <CommonFormElement
                value={signUpFormData[controlItem.name]}
                currentItem={controlItem}
                onChange={(event) =>
                  setSignUpFormData({
                    ...signUpFormData,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </div>
          );
        })}
        <Button disabled={!handleSignUpBtnValid()} type='submit' className="disabled:opacity-65 hover:scale-[1.1]">Save</Button>
      </form>
    </div>
  );
}

export default SignUp;
