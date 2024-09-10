'use server'
import connectDB from '@/database';
import Profile from '@/models';
import {revalidatePath} from 'next/cache'



//create profile action
export async function createProfile(formData,pathToRevalidate){
    await connectDB();
    await Profile.create(formData);
    revalidatePath(pathToRevalidate);
}