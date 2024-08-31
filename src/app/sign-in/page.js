'use client'

import { userLoginFormControls,initialLoginFormData } from "@/utils";
import { Label } from "@/components/ui/label";
import CommonFormElement from "@/components/form-element";
import { Button } from "@/components/ui/button";
import {useState} from 'react';
import { LoginUserAction } from "@/action";
import {useRouter} from 'next/navigation';
function SignIn(){
  const [loginFormData,setLoginFormData]=useState(initialLoginFormData);
  const router=useRouter();

  function handleLoginBtnValid(){
    return Object.keys(loginFormData).every(
        (key) => loginFormData[key].trim() !== ""
      );
  }
  async function handleLogin(){
    const result=await LoginUserAction(loginFormData);
    if(result.success){
        alert(result.message);
        router.push('/');
    }
    else{
        alert(result.message);
    }

  }

    return (
        <div>
            <h1>Welcome to Login</h1>
            <form action={handleLogin}>
                {
                    userLoginFormControls.map((controlItem)=>{
                        return( 
                       <div key={controlItem.name}>
              <Label>{controlItem?.label}</Label>
              <CommonFormElement
                value={loginFormData[controlItem.name]}
                currentItem={controlItem}
                onChange={(event) =>
                  setLoginFormData({
                    ...loginFormData,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </div> )
                    })
                }
                 <Button disabled={!handleLoginBtnValid()} type='submit' className="disabled:opacity-65 hover:scale-[1.1]">Save</Button>
            </form>
        </div>
    )
}

export default SignIn;