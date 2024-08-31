'use server'

import connectToDB from "@/database";
import User from '@/model';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const secret=process.env.secret_key;



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

//Login
export async function LoginUserAction(formData){
    try{
        await connectToDB();
        const {email,password}=formData;
        const result=await User.checkLogin(email,password);
        // console.log(result);
        if(result.success){
           const getCookies=cookies();
           getCookies.set('cook',result.data,{httpOnly:true,maxAge:24*60*60*1000});
           return {
            success: true,
            message:"Login successfully",
            data:'cook'
        }
        }
        else{
            return {
                success: false,
                message:result.message,
                data:null
            }
        }
    }
    catch(err){
        console.log(err)
        return {
            success: false,
            message:"Error in LoginUserAction",
            data:null
        }
    }
    }

//get User
export async function fetchAuthUserAction(){
    try{

        await connectToDB();
        const getCookies=cookies();
        const token=getCookies.get('cook')?.value||"";
        if(token===""){
            return {
                success:false,
                message:"Token is invalid"
                ,data:null
            }
        }
        const decodedToken=jwt.verify(token,secret);
        const getUserInfo=await User.findById(decodedToken.id);
        if(getUserInfo){
            return {
                success:true,
                message:"success",
                data:JSON.parse(JSON.stringify(getUserInfo))
            }
        }
        else{
            return {
                success:false,
               data:null,
               message:"Error in gettingAuthUserAction"
            } 
        }
    }
    catch(error){
        console.log("Error",error.message);
        return {
            success: false,
            message:"Error in gettingAuthUserAction",
            data:null
        }
    }
}


export async function logoutAction(){
    console.log("logoutAction")
    const getCookies=cookies();
    getCookies.delete('cook');
}