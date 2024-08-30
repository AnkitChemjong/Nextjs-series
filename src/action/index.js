'use server'

import connectToDB from "@/database";
import User from '@/model';

//register user
export async function registerUserAction(formData){
try{
    await connectToDB();
    const {userName,email,password}=formData;
    const checkUser=await User.findOne({email})
    if(checkUser){
        return {
            success: false,
        message:"User already exists please try different email",
        data:null
        }
    }
    const user=await User.create({userName,email,password});
    if(user){

        return {
            success:true,
            message:"User created successfully",
            data:JSON.parse(JSON.stringify(user))
        }
    }
    else{
        return {
            success: false,
            message:"Error in registerUserAction",
            data:null
        } 
    }
}
catch(err){
    console.log(err)
    return {
        success: false,
        message:"Error in registerUserAction",
        data:null
    }
}
}