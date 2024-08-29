'use server'

import connectToDb from "@/database"
import User from "@/models/user";
import { revalidatePath } from "next/cache";

// async function fetchListOfProducts(){
//         const res=await fetch('https://dummyjson.com/products');
//         const data=await res.json();
//         return data?.products;
// }
// export default fetchListOfProducts;

//add new user action

export async function addNewUserAction(formData,pathToRevalidate){
    await connectToDb();

    try{
      const newlyCreatedUser=await User.create(formData);
      if(newlyCreatedUser){
        revalidatePath(pathToRevalidate)
        return {
            success:true,
            message:"user added successfully"
        }

      }
      else{
        return {
            success:false,
            message:`error on creating user`
        }
      }
    }
    catch(error){
        console.log(error);
        return {
            success:false,
            message:`error on creating user:${error.message}`
        }
    }

}

//get user action
export async function fetchUserAction(){
    await connectToDb();
    try{
      const allUsers=await User.find({});
      if(allUsers){
        return {
            success:true,
            users:JSON.parse(JSON.stringify(allUsers))
        }
      }
      else{
        return {
            success:false,
            message:`error on getting user`
        }
      }
    }
    catch(error){
        console.log(error);
        return {
            success:false,
            message:`error on getting user:${error.message}`
        }
    }

}

//edit user action



//delete user action