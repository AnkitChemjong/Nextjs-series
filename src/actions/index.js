'use server'
import connectDB from '@/database';
import Profile from '@/models/profile.js';
import {revalidatePath} from 'next/cache'



//create profile action
export async function createProfileAction(formData,pathToRevalidate){
    await connectDB();
    await Profile.create(formData);
    revalidatePath(pathToRevalidate);
}

//fetch the user after role

export async function fetchProfileAction(id){
    await connectDB();
    const result =await Profile.findOne({userId:id});
    return JSON.parse(JSON.stringify(result))
}