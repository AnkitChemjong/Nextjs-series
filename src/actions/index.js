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
export async function editUserAction(currentUserID,formData,pathToRevalidate){
  await connectToDb();

  try{
    const editUser=await User.findByIdAndUpdate(currentUserID,formData,{new:true});
    if(editUser){
      revalidatePath(pathToRevalidate)
      return {
          success:true,
          message:"user edited successfully"
      }

    }
    else{
      return {
          success:false,
          message:`error on editing user`
      }
    }
  }
  catch(error){
      console.log(error);
      return {
          success:false,
          message:`error on editing user:${error.message}`
      }
  }
}


//delete user action
export async function deleteUserAction(currentUserID,pathToRevalidate){
  await connectToDb();

  try{
    const deletedUser=await User.findByIdAndDelete(currentUserID);
    if(deletedUser){
      revalidatePath(pathToRevalidate)
      return {
          success:true,
          message:"user deleted successfully"
      }

    }
    else{
      return {
          success:false,
          message:`error on deleting user`
      }
    }
  }
  catch(error){
      console.log(error);
      return {
          success:false,
          message:`error on deleting user:${error.message}`
      }
  }

}